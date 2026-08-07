import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Germany (DE) Market Data...')

  const de = await prisma.country.findUnique({ where: { code: 'DE' } })
  if (!de) throw new Error("Country DE not found")

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

  const germanyCompanies = [
    // --- Wholesalers & Brand Owners ---
    { name: 'LKQ Europe GmbH', categoryId: wholesalerId, turnover: null, techMaturityScore: 9, website: 'https://lkqeurope.com' }, // Stahlgruber
    { name: 'Stahlgruber GmbH', categoryId: wholesalerId, turnover: 1600000000, techMaturityScore: 8, website: 'https://stahlgruber.de' }, // Sub of LKQ
    { name: 'PV Automotive GmbH', categoryId: wholesalerId, turnover: null, techMaturityScore: 8, website: 'https://pvautomotive.de' }, // Sub of LKQ
    { name: 'WM SE', categoryId: wholesalerId, turnover: 1600000000, techMaturityScore: 8, website: 'https://wm.de' },
    { name: 'Hess Automotive', categoryId: wholesalerId, turnover: 250000000, techMaturityScore: 7, website: 'https://hess-automotive.de' },
    { name: 'Wessels+Müller (WM SE)', categoryId: wholesalerId, turnover: null, techMaturityScore: 8, website: '' }, // Holding WM
    { name: 'Coparts Autoteile GmbH', categoryId: wholesalerId, turnover: 150000000, techMaturityScore: 7, website: 'https://coparts.de' },
    { name: 'CARAT Systementwicklungs GmbH', categoryId: wholesalerId, turnover: 1300000000, techMaturityScore: 8, website: 'https://carat-gruppe.de' },
    { name: 'Select AG', categoryId: wholesalerId, turnover: 800000000, techMaturityScore: 8, website: 'https://select.ag' },
    
    // --- Workshop Chains (Workshop Chains & Groups) ---
    { name: 'Bosch Car Service DE', categoryId: workshopChainId, turnover: null, techMaturityScore: 10, website: 'https://boschcarservice.com/de/de' },
    { name: '1a autoservice', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://go1a.de' }, // Sub of CARAT
    { name: 'Meisterhaft', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://meisterhaft.com' }, // Sub of Stahlgruber
    { name: 'AutoFit', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: '' }, // Sub of Stahlgruber
    { name: 'AutoPro', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: '' }, // Sub of Coparts
    { name: 'Profiservice Werkstatt', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://profiservice-werkstatt.de' }, // Sub of Coparts
    { name: 'Autofit', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://autofit.de' }, // Select AG
    { name: 'AutoPartner', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: '' },
    { name: 'Premio Reifen + Autoservice', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://premio.de' }, // Goodyear
    
    // Auto Centers & Fast Fit
    { name: 'A.T.U (Auto-Teile-Unger)', categoryId: workshopChainId, turnover: 1000000000, techMaturityScore: 8, website: 'https://atu.de' }, // Fast Fit
    { name: 'Pitstop', categoryId: workshopChainId, turnover: 120000000, techMaturityScore: 6, website: 'https://pitstop.de' },
    { name: 'stop+go', categoryId: workshopChainId, turnover: 60000000, techMaturityScore: 6, website: 'https://stopandgo.de' },
    { name: 'Pneuhage', categoryId: workshopChainId, turnover: 450000000, techMaturityScore: 5, website: 'https://pneuhage.de' },
    { name: 'Vergölst', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://vergoelst.de' }, // Continental

    // --- Diagnostic Specialists / Niche ---
    { name: 'Hella Gutmann Solutions GmbH', categoryId: diagSpecId, turnover: 120000000, techMaturityScore: 10, website: 'https://hella-gutmann.com' },
    { name: 'Faber GmbH', categoryId: diagSpecId, turnover: 25000000, techMaturityScore: 8, website: '' }, // WShop equipment
    { name: 'Würtz GmbH', categoryId: diagSpecId, turnover: null, techMaturityScore: 7, website: '' },
    { name: 'KS Tools Werkzeuge - Maschinen GmbH', categoryId: brandOwnerId, turnover: 250000000, techMaturityScore: 8, website: 'https://kstools.com' },
    { name: 'Würth Group (Automotive DE)', categoryId: brandOwnerId, turnover: null, techMaturityScore: 9, website: 'https://wuerth.de' },
    { name: 'Berner SE', categoryId: brandOwnerId, turnover: 1100000000, techMaturityScore: 7, website: 'https://berner.com' },
    { name: 'Texa Deutschland GmbH', categoryId: diagSpecId, turnover: 15000000, techMaturityScore: 10, website: 'https://texadeutschland.com' },
    { name: 'Wow! Würth Online World GmbH', categoryId: diagSpecId, turnover: 40000000, techMaturityScore: 9, website: 'https://wow-portal.com' },

    // --- Body / Glass / Tires ---
    { name: 'Carglass GmbH', categoryId: bodyRepairId, turnover: 500000000, techMaturityScore: 7, website: 'https://carglass.de' },
    { name: 'Junited Autoglas', categoryId: bodyRepairId, turnover: 100000000, techMaturityScore: 6, website: 'https://junited-autoglas.de' }, // Sub of Belron
    { name: 'KS Autoglas', categoryId: bodyRepairId, turnover: 40000000, techMaturityScore: 6, website: 'https://ksautoglas.com' },
    { name: 'IRS Group (Intelligent Repair Solutions)', categoryId: bodyRepairId, turnover: 200000000, techMaturityScore: 7, website: 'https://irs-group.com' },
    { name: 'Karosserie + Lack (ZKF)', categoryId: bodyRepairId, turnover: null, techMaturityScore: 5, website: '' }, // Network
    { name: 'Repanet (Standox)', categoryId: bodyRepairId, turnover: null, techMaturityScore: 5, website: 'https://repanet.de' },

    // --- Others / Online / Specific ---
    { name: 'Autodoc SE', categoryId: wholesalerId, turnover: 1120000000, techMaturityScore: 5, website: 'https://autodoc.de' },
    { name: 'Kfzteile24 GmbH', categoryId: wholesalerId, turnover: 200000000, techMaturityScore: 5, website: 'https://kfzteile24.de' },
    { name: 'Motointegrator (Inter Cars)', categoryId: wholesalerId, turnover: null, techMaturityScore: 5, website: 'https://motointegrator.de' },
    { name: 'Meyle AG', categoryId: brandOwnerId, turnover: 300000000, techMaturityScore: 6, website: 'https://meyle.com' },
    { name: 'Schaeffler Automotive Aftermarket', categoryId: brandOwnerId, turnover: 1800000000, techMaturityScore: 9, website: 'https://aftermarket.schaeffler.de' },
    { name: 'ZF Aftermarket', categoryId: brandOwnerId, turnover: 3000000000, techMaturityScore: 9, website: 'https://aftermarket.zf.com' },
    { name: 'Continental Aftermarket', categoryId: brandOwnerId, turnover: 2200000000, techMaturityScore: 10, website: 'https://continental-aftermarket.com' },
    { name: 'Hella GmbH & Co. KGaA (Aftermarket)', categoryId: brandOwnerId, turnover: 1500000000, techMaturityScore: 10, website: 'https://hella.com' },
    { name: 'Mahle Aftermarket GmbH', categoryId: brandOwnerId, turnover: 900000000, techMaturityScore: 9, website: 'https://mahle-aftermarket.com' },
    { name: 'Mann+Hummel (Mann-Filter)', categoryId: brandOwnerId, turnover: 1000000000, techMaturityScore: 5, website: 'https://mann-filter.com' }
  ]

  for (const company of germanyCompanies) {
    const existing = await prisma.company.findFirst({
        where: { name: company.name, countryId: de.id }
    })

    if (!existing) {
        await prisma.company.create({
            data: {
              ...company,
              countryId: de.id,
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

  await setParent('Stahlgruber GmbH', 'LKQ Europe GmbH')
  await setParent('PV Automotive GmbH', 'LKQ Europe GmbH')
  await setParent('Meisterhaft', 'Stahlgruber GmbH')
  await setParent('AutoFit', 'Stahlgruber GmbH')
  
  await setParent('1a autoservice', 'CARAT Systementwicklungs GmbH')
  await setParent('Profiservice Werkstatt', 'Coparts Autoteile GmbH')
  await setParent('AutoPro', 'Coparts Autoteile GmbH')
  await setParent('Autofit', 'Select AG')

  await setParent('Junited Autoglas', 'Carglass GmbH')
  
  await setParent('Wow! Würth Online World GmbH', 'Würth Group (Automotive DE)')

  console.log('Germany DE Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
