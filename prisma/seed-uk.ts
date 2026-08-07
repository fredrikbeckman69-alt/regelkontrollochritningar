import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding United Kingdom (UK) Market Data...')

  const uk = await prisma.country.findUnique({ where: { code: 'UK' } })
  if (!uk) throw new Error("Country UK not found")

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

  const ukCompanies = [
    // --- Wholesalers & Brand Owners ---
    { name: 'LKQ Euro Car Parts', categoryId: wholesalerId, turnover: 1200000000, techMaturityScore: 9, website: 'https://eurocarparts.com' },
    { name: 'Alliance Automotive Group UK (AAG)', categoryId: wholesalerId, turnover: 1000000000, techMaturityScore: 8, website: 'https://allianceautomotive.co.uk' }, // GPC
    { name: 'Motor Parts Direct (MPD)', categoryId: wholesalerId, turnover: 150000000, techMaturityScore: 7, website: 'https://mpdonline.co.uk' },
    { name: 'GSF Car Parts', categoryId: wholesalerId, turnover: 250000000, techMaturityScore: 7, website: 'https://gsfcarparts.com' },
    { name: 'The Parts Alliance', categoryId: wholesalerId, turnover: null, techMaturityScore: 7, website: 'https://thepartsalliance.com' }, // Now mostly under GSF
    { name: '丁TMD Friction UK Ltd', categoryId: brandOwnerId, turnover: null, techMaturityScore: 6, website: 'https://tmdfriction.com' },

    // --- Workshop Chains & Fast Fit ---
    { name: 'Kwik Fit', categoryId: workshopChainId, turnover: 500000000, techMaturityScore: 7, website: 'https://kwik-fit.com' }, // Itochu
    { name: 'Halfords Autocentres', categoryId: workshopChainId, turnover: 300000000, techMaturityScore: 8, website: 'https://halfords.com' },
    { name: 'National Tyres and Autocare', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://national.co.uk' }, // Owned by Halfords
    { name: 'Arnold Clark Autoparts', categoryId: workshopChainId, turnover: 100000000, techMaturityScore: 7, website: 'https://arnoldclark.com' },
    { name: 'HiQ Tyres & Autocare', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://hiqonline.co.uk' }, // Goodyear
    { name: 'Protyre (Micheldever)', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://protyre.co.uk' },
    { name: 'F1 Autocentres', categoryId: workshopChainId, turnover: 150000000, techMaturityScore: 7, website: 'https://f1autocentres.co.uk' },
    { name: 'Mr Clutch Autocentres', categoryId: workshopChainId, turnover: 30000000, techMaturityScore: 5, website: 'https://mrclutch.com' },
    { name: 'In ' + 'n' + ' Out Autocentres', categoryId: workshopChainId, turnover: 25000000, techMaturityScore: 6, website: 'https://in-n-out.co.uk' },
    { name: 'Servicesure Autocentres', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://servicesureautocentres.com' }, // AAG Network
    { name: 'AutoCare', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://autocaregarages.co.uk' }, // GROUPAUTO Network

    // --- Diagnostic Specialists / Niche ---
    { name: 'Snap-on Diagnostics UK', categoryId: diagSpecId, turnover: null, techMaturityScore: 10, website: 'https://diagnostics.snapon.co.uk' },
    { name: 'Delphi Technologies Aftermarket', categoryId: diagSpecId, turnover: null, techMaturityScore: 10, website: 'https://delphiautoparts.com' }, // BorgWarner
    { name: 'Pico Technology (PicoScope)', categoryId: diagSpecId, turnover: 30000000, techMaturityScore: 10, website: 'https://picotech.com' },
    { name: 'Launch UK', categoryId: diagSpecId, turnover: 15000000, techMaturityScore: 8, website: 'https://launchtech.co.uk' },
    { name: 'Maverick Diagnostics', categoryId: diagSpecId, turnover: 5000000, techMaturityScore: 9, website: 'https://maverickdiagnostics.com' },
    { name: 'Autel UK', categoryId: diagSpecId, turnover: 20000000, techMaturityScore: 9, website: 'https://autel.uk' },
    { name: 'Sealey Tools', categoryId: brandOwnerId, turnover: 100000000, techMaturityScore: 6, website: 'https://sealey.co.uk' },
    { name: 'Draper Tools', categoryId: brandOwnerId, turnover: 70000000, techMaturityScore: 5, website: 'https://drapertools.com' },

    // --- Body / Glass / Tires ---
    { name: 'Autoglass (Belron)', categoryId: bodyRepairId, turnover: 200000000, techMaturityScore: 8, website: 'https://autoglass.co.uk' }, // Needs ADAS
    { name: 'Steer Automotive Group', categoryId: bodyRepairId, turnover: 180000000, techMaturityScore: 7, website: 'https://steerautomotive.com' },
    { name: 'Fix Auto UK', categoryId: bodyRepairId, turnover: null, techMaturityScore: 6, website: 'https://fixauto.com/uk' }, // Network
    { name: 'National Windscreens', categoryId: bodyRepairId, turnover: 100000000, techMaturityScore: 7, website: 'https://nationalwindscreens.co.uk' },
    { name: 'Activate Accident Repair', categoryId: bodyRepairId, turnover: 50000000, techMaturityScore: 7, website: 'https://activateaccidentrepair.com' },

    // --- Others / Specific ---
    { name: 'Ring Automotive', categoryId: brandOwnerId, turnover: 40000000, techMaturityScore: 7, website: 'https://ringautomotive.com' },
    { name: 'Comma Oil', categoryId: brandOwnerId, turnover: null, techMaturityScore: 3, website: 'https://commaoil.com' },
    { name: 'First Line Ltd', categoryId: brandOwnerId, turnover: 50000000, techMaturityScore: 4, website: 'https://firstlineltd.com' },
    { name: 'BM Catalysts', categoryId: brandOwnerId, turnover: 30000000, techMaturityScore: 5, website: 'https://bmcatalysts.co.uk' },
    { name: 'Platinum International', categoryId: wholesalerId, turnover: 120000000, techMaturityScore: 4, website: 'https://platinuminternational.com' }, // Batteries/Lubes
    { name: 'Sankey & Co', categoryId: wholesalerId, turnover: null, techMaturityScore: 4, website: '' },
    { name: 'Andrew Page', categoryId: wholesalerId, turnover: null, techMaturityScore: 6, website: '' } // Part of LKQ
  ]

  for (const company of ukCompanies) {
    const existing = await prisma.company.findFirst({
        where: { name: company.name, countryId: uk.id }
    })

    if (!existing) {
        await prisma.company.create({
            data: {
              ...company,
              countryId: uk.id,
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

  await setParent('Andrew Page', 'LKQ Euro Car Parts')
  await setParent('The Parts Alliance', 'GSF Car Parts')
  await setParent('National Tyres and Autocare', 'Halfords Autocentres')
  await setParent('Servicesure Autocentres', 'Alliance Automotive Group UK (AAG)')
  await setParent('AutoCare', 'Alliance Automotive Group UK (AAG)')

  console.log('United Kingdom UK Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
