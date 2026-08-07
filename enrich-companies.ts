import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const labelCache: Record<string, string> = {};

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function searchWikidata(companyName: string) {
  const url = `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(companyName)}&language=en&format=json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.search && data.search.length > 0) return data.search[0];
  } catch (err) {
    console.error(`Error searching Wikidata for ${companyName}:`, err);
  }
  return null;
}

async function getEntityData(id: string) {
  const url = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${id}&languages=en&format=json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.entities[id];
  } catch (err) {
    console.error(`Error fetching entity ${id}:`, err);
  }
  return null;
}

async function getLabel(id: string): Promise<string | null> {
  if (labelCache[id]) return labelCache[id];
  const url = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${id}&props=labels&languages=en&format=json`;
  try {
    await delay(200); // Small delay to avoid rate limiting
    const res = await fetch(url);
    const data = await res.json();
    const label = data.entities[id]?.labels?.en?.value;
    if (label) {
      labelCache[id] = label;
      return label;
    }
  } catch (err) { }
  return null;
}

function parseAmount(claimObj: any[] | undefined): number | null {
  if (claimObj && claimObj.length > 0) {
    const amountStr = claimObj[0].mainsnak?.datavalue?.value?.amount;
    if (amountStr) {
      const val = parseFloat(amountStr.replace('+', ''));
      return isNaN(val) ? null : val;
    }
  }
  return null;
}

function parseString(claimObj: any[] | undefined): string | null {
  if (claimObj && claimObj.length > 0) {
    return claimObj[0].mainsnak?.datavalue?.value || null;
  }
  return null;
}

async function resolveIdLabelArray(claimObj: any[] | undefined): Promise<string | null> {
  if (!claimObj || claimObj.length === 0) return null;
  const labels: string[] = [];
  for (const claim of claimObj) {
    const id = claim.mainsnak?.datavalue?.value?.id;
    if (id) {
      const label = await getLabel(id);
      if (label) labels.push(label);
    }
  }
  return labels.length > 0 ? labels.join(', ') : null;
}

async function main() {
  const countries = await prisma.country.findMany({ include: { companies: true } });

  for (const country of countries) {
    console.log(`\nProcessing country: ${country.name}`);
    for (const company of country.companies) {
      console.log(`- Searching for: ${company.name}`);
      const searchResult = await searchWikidata(company.name);
      await delay(1000); 

      if (searchResult) {
        console.log(`  Wiki match: ${searchResult.label} (${searchResult.id}) - ${searchResult.description || ''}`);
        const entity = await getEntityData(searchResult.id);
        await delay(1000);

        if (entity && entity.claims) {
          const claims = entity.claims;
          
          let website = parseString(claims.P856);
          let logoFilename = parseString(claims.P154);
          let logoUrl = logoFilename ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(logoFilename)}` : null;
          
          let tickerSymbol = parseString(claims.P249); // Ticker symbol string

          let employees = parseAmount(claims.P1128);
          let turnover = parseAmount(claims.P2139);
          let netIncome = parseAmount(claims.P2295);
          let totalAssets = parseAmount(claims.P2403);
          
          let foundedYear = null;
          if (claims.P571 && claims.P571.length > 0) {
            const timeStr = claims.P571[0].mainsnak?.datavalue?.value?.time;
            if (timeStr) {
               const yearMatch = timeStr.match(/\+?(-?\d{4})/);
               if (yearMatch) foundedYear = parseInt(yearMatch[1], 10);
            }
          }

          let headquarters = await resolveIdLabelArray(claims.P159);
          let ceo = await resolveIdLabelArray(claims.P169);
          let founders = await resolveIdLabelArray(claims.P112);
          let legalForm = await resolveIdLabelArray(claims.P1454);
          let industry = await resolveIdLabelArray(claims.P452);

          console.log(`  Updating DB for ${company.name}...`);
          
          await prisma.company.update({
            where: { id: company.id },
            data: {
              ...(website && !company.website ? { website } : {}),
              ...(foundedYear && !company.foundedYear ? { foundedYear } : {}),
              ...(employees && !company.employees ? { employees } : {}),
              ...(turnover && !company.turnover ? { turnover } : {}),
              ...(netIncome && !company.netIncome ? { netIncome } : {}),
              ...(totalAssets && !company.totalAssets ? { totalAssets } : {}),
              ...(ceo && !company.ceo ? { ceo } : {}),
              ...(founders && !company.founders ? { founders } : {}),
              ...(legalForm && !company.legalForm ? { legalForm } : {}),
              ...(industry && !company.industry ? { industry } : {}),
              ...(headquarters && !company.headquarters ? { headquarters } : {}),
              ...(logoUrl && !company.logoUrl ? { logoUrl } : {}),
              ...(tickerSymbol && !company.tickerSymbol ? { tickerSymbol } : {}),
              ...(searchResult.description && !company.description ? { description: searchResult.description } : {})
            }
          });
        }
      } else {
        console.log(`  No Wikidata match found for: ${company.name}`);
      }
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
