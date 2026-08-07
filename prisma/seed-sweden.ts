import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Sweden (SE) Market Data...')

  const se = await prisma.country.findUnique({ where: { code: 'SE' } })
  if (!se) throw new Error("Country SE not found")

  const categories = await prisma.category.findMany()
  const getCatId = (name: string) => categories.find(c => c.name === name)?.id

  const workshopChainId = getCatId('Workshop Chains & Groups')
  const wholesalerId = getCatId('Wholesalers')
  const diagSpecId = getCatId('Diagnostic Specialists')
  const bodyRepairId = getCatId('Body Shop Chains')
  const brandOwnerId = getCatId('Wholesalers & Brand Owners')

  if (!workshopChainId || !wholesalerId || !diagSpecId || !bodyRepairId || !brandOwnerId) {
    throw new Error("Missing categories")
  }

  const swedenCompanies = [
    // --- Wholesalers & Brand Owners ---
    { name: 'KGK (KG Knutsson AB)', categoryId: brandOwnerId, turnover: 450000000, techMaturityScore: 8, website: 'https://kgk.se' }, // Autoexperten owner
    { name: 'Orio AB (Hedin Parts)', categoryId: wholesalerId, turnover: 80000000, techMaturityScore: 7, website: 'https://orio.com' },
    { name: 'Atoy Automotive Sweden AB', categoryId: wholesalerId, turnover: 120000000, techMaturityScore: 7, website: 'https://atoy.se' },
    { name: 'Ryds Bilglas AB (Belron)', categoryId: bodyRepairId, turnover: 150000000, techMaturityScore: 6, website: 'https://rydsbilglas.se' },
    
    // --- Workshop Chains (Workshop Chains & Groups) ---
    { name: 'MEKO AB', categoryId: workshopChainId, turnover: 800000000, techMaturityScore: 8, website: 'https://meko.com' },
    { name: 'Mekonomen Sweden', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://mekonomen.se' }, // Sub of MEKO
    { name: 'Meca Sweden', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://meca.se' }, // Sub of MEKO
    { name: 'Bileko Car Parts AB', categoryId: brandOwnerId, turnover: null, techMaturityScore: 8, website: '' }, // Sub of MEKO
    { name: 'Autoexperten', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://autoexperten.se' }, // Sub of KGK
    { name: 'BDS', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://bds.se' },
    { name: 'MekPartner', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://mekpartner.se' },
    { name: 'MekoPartner', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: '' }, // Sub of MEKO
    { name: 'AD Bildelar', categoryId: workshopChainId, turnover: 90000000, techMaturityScore: 7, website: 'https://adbildelar.se' },
    { name: 'Bosch Car Service SE', categoryId: workshopChainId, turnover: null, techMaturityScore: 10, website: 'https://boschcarservice.com/se/sv' },
    { name: 'Speedy Bilservice', categoryId: workshopChainId, turnover: 30000000, techMaturityScore: 5, website: 'https://speedybilservice.se' },
    { name: 'Din Bil Sweden AB', categoryId: workshopChainId, turnover: 2000000000, techMaturityScore: 9, website: 'https://dinbil.se' },
    { name: 'Bilia AB', categoryId: workshopChainId, turnover: 3500000000, techMaturityScore: 9, website: 'https://bilia.se' },
    { name: 'Hedin Bil', categoryId: workshopChainId, turnover: 4000000000, techMaturityScore: 9, website: 'https://hedinbil.se' },
    { name: 'Upplands Motor (Bilia)', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: '' },

    // --- Diagnostic Specialists / Niche ---
    { name: 'Sun Maskin & Service AB', categoryId: diagSpecId, turnover: 15000000, techMaturityScore: 10, website: 'https://sunmaskin.se' },
    { name: 'Verkstadsteknik i Sweden AB', categoryId: diagSpecId, turnover: 8000000, techMaturityScore: 9, website: '' },
    { name: 'Hella Gutmann Solutions SE', categoryId: diagSpecId, turnover: null, techMaturityScore: 10, website: 'https://hella-gutmann.com' },
    { name: 'Wurth Svenska AB', categoryId: brandOwnerId, turnover: 300000000, techMaturityScore: 8, website: 'https://wurth.se' },
    { name: 'Berner Sweden AB', categoryId: brandOwnerId, turnover: 80000000, techMaturityScore: 7, website: 'https://berner.se' },
    { name: 'Midac Batteries SE', categoryId: brandOwnerId, turnover: 12000000, techMaturityScore: 4, website: '' },
    { name: 'Strands Fordonskomponenter AB', categoryId: brandOwnerId, turnover: 60000000, techMaturityScore: 5, website: 'https://strands.se' },

    // --- Body / Glass / Tires ---
    { name: 'Werksta Nordic AB', categoryId: bodyRepairId, turnover: 250000000, techMaturityScore: 7, website: 'https://werksta.se' }, // Needs ADAS
    { name: 'Vianor AB', categoryId: workshopChainId, turnover: 200000000, techMaturityScore: 6, website: 'https://vianor.se' },
    { name: 'Däckia AB', categoryId: workshopChainId, turnover: 180000000, techMaturityScore: 6, website: 'https://dackia.se' },
    { name: 'Euromaster AB', categoryId: workshopChainId, turnover: 160000000, techMaturityScore: 6, website: 'https://euromaster.se' },
    { name: 'First Stop Sweden', categoryId: workshopChainId, turnover: null, techMaturityScore: 5, website: 'https://firststop.se' },
    { name: 'Carglass Sweden', categoryId: bodyRepairId, turnover: null, techMaturityScore: 7, website: 'https://carglass.se' }, // Needs ADAS
    { name: 'Samglas', categoryId: bodyRepairId, turnover: 40000000, techMaturityScore: 6, website: 'https://samglas.se' },
    { name: 'Svenska Bilglas', categoryId: bodyRepairId, turnover: 25000000, techMaturityScore: 6, website: '' },

    // --- Others ---
    { name: 'Skruvat.se (Bythjul)', categoryId: wholesalerId, turnover: 100000000, techMaturityScore: 4, website: 'https://skruvat.se' },
    { name: 'Autodoc SE', categoryId: wholesalerId, turnover: null, techMaturityScore: 4, website: 'https://autodoc.se' },
    { name: 'Biltema Sweden AB', categoryId: brandOwnerId, turnover: 1500000000, techMaturityScore: 4, website: 'https://biltema.se' },
    { name: 'Jula AB (Auto Dept)', categoryId: brandOwnerId, turnover: 500000000, techMaturityScore: 3, website: 'https://jula.se' },
    { name: 'Trodo.se', categoryId: wholesalerId, turnover: null, techMaturityScore: 3, website: 'https://trodo.se' },
    { name: 'Bildelaronline24', categoryId: wholesalerId, turnover: null, techMaturityScore: 3, website: 'https://bildelaronline24.se' },
    { name: 'Lagerstedt & Krantz AB (L&K)', categoryId: brandOwnerId, turnover: null, techMaturityScore: 5, website: '' },
    { name: 'Nordiska Bilreservdelar', categoryId: wholesalerId, turnover: 15000000, techMaturityScore: 4, website: '' },

    // Added to reach 50 roughly
    { name: 'Ojanperä', categoryId: brandOwnerId, turnover: 12000000, techMaturityScore: 5, website: '' },
    { name: 'Lvd Lastvagnsdelar Svenska AB', categoryId: wholesalerId, turnover: 35000000, techMaturityScore: 7, website: '' },
    { name: 'DieselTrim Bilverkstad', categoryId: diagSpecId, turnover: null, techMaturityScore: 9, website: '' },
    { name: 'Motorbiten', categoryId: diagSpecId, turnover: null, techMaturityScore: 8, website: '' },
    { name: 'Swedol (Tools)', categoryId: brandOwnerId, turnover: 400000000, techMaturityScore: 6, website: 'https://swedol.se' },
    { name: 'Ahlsell Sweden AB (Auto/Industry)', categoryId: brandOwnerId, turnover: 3500000000, techMaturityScore: 6, website: 'https://ahlsell.se' },
    { name: 'Svenska Batteripoolen', categoryId: brandOwnerId, turnover: 20000000, techMaturityScore: 4, website: '' },
    { name: 'Start & Generator Specialisten', categoryId: diagSpecId, turnover: 10000000, techMaturityScore: 8, website: '' },
    { name: 'Hallsbergs Bildelar', categoryId: wholesalerId, turnover: 18000000, techMaturityScore: 5, website: '' },
    { name: 'Abris Sjö & Snö', categoryId: diagSpecId, turnover: 25000000, techMaturityScore: 6, website: '' }
  ]

  for (const company of swedenCompanies) {
    // Basic existence check
    const existing = await prisma.company.findFirst({
        where: { name: company.name, countryId: se.id }
    })

    if (!existing) {
        await prisma.company.create({
            data: {
              ...company,
              countryId: se.id,
            }
        })
    }
  }

  // Handle Parent-Child Hierarchies
  const setParent = async (childName: string, parentName: string) => {
    const parent = await prisma.company.findFirst({ where: { name: parentName }})
    const child = await prisma.company.findFirst({ where: { name: childName }})
    
    if (parent && child) {
        await prisma.company.update({
            where: { id: child.id },
            data: { parentCompanyId: parent.id }
        })
    }
  }

  await setParent('Mekonomen Sweden', 'MEKO AB')
  await setParent('Meca Sweden', 'MEKO AB')
  await setParent('Bileko Car Parts AB', 'MEKO AB')
  await setParent('MekoPartner', 'MEKO AB')
  await setParent('Autoexperten', 'KGK (KG Knutsson AB)')
  await setParent('Upplands Motor (Bilia)', 'Bilia AB')

  console.log('Sweden SE Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
