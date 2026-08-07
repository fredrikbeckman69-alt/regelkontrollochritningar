import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Poland (PL) Market Data...')

  const pl = await prisma.country.findUnique({ where: { code: 'PL' } })
  if (!pl) throw new Error("Country PL not found")

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

  const plCompanies = [
    // --- Wholesalers & Brand Owners ---
    { name: 'Inter Cars S.A.', categoryId: wholesalerId, turnover: 4000000000, techMaturityScore: 9, website: 'https://intercars.eu' }, // Largest in CEE
    { name: 'Moto-Profil', categoryId: wholesalerId, turnover: 500000000, techMaturityScore: 8, website: 'https://moto-profil.pl' },
    { name: 'Auto Partner SA', categoryId: wholesalerId, turnover: 800000000, techMaturityScore: 8, website: 'https://autopartner.com' },
    { name: 'Gordon (Hurtownia Motoryzacyjna)', categoryId: wholesalerId, turnover: 250000000, techMaturityScore: 6, website: 'https://gordon.com.pl' },
    { name: 'Elit Polska', categoryId: wholesalerId, turnover: null, techMaturityScore: 7, website: 'https://elitpolska.pl' }, // LKQ
    { name: 'Groupauto Polska', categoryId: wholesalerId, turnover: null, techMaturityScore: 7, website: 'https://groupautopolska.pl' },
    { name: 'Hart (Hurtownia)', categoryId: wholesalerId, turnover: 200000000, techMaturityScore: 6, website: 'https://hartphp.com.pl' },

    // --- Workshop Chains & Fast Fit ---
    { name: 'Q-Service Castrol', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://qservicecastrol.eu' }, // Inter Cars network
    { name: 'ProfiAuto Serwis', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://profiauto.pl' }, // Moto-Profil network
    { name: 'Bosch Car Service PL', categoryId: workshopChainId, turnover: null, techMaturityScore: 9, website: 'https://boschcarservice.com/pl/pl' },
    { name: 'Opony Express', categoryId: workshopChainId, turnover: null, techMaturityScore: 5, website: 'https://oponyexpress.pl' },
    { name: 'Premio Opony-Autoserwis PL', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://premio.pl' },
    { name: 'Euromaster Polska', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://euromaster.pl' },
    { name: 'AutoCrew', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://autocrew.pl' }, // Bosch
    { name: 'Perfect Service', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: '' },
    { name: 'MaXserwis', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://maxserwis.com.pl' }, // Auto Partner network

    // --- Diagnostic Specialists / Niche ---
    { name: 'Precyzja-Technik', categoryId: diagSpecId, turnover: null, techMaturityScore: 9, website: 'https://precyzja.pl' }, // Wheel alignment, diagnostics
    { name: 'WSOP', categoryId: diagSpecId, turnover: 25000000, techMaturityScore: 8, website: 'https://wsop.pl' }, // Diagnostic equipment eqpt
    { name: 'Unimetal', categoryId: diagSpecId, turnover: 15000000, techMaturityScore: 8, website: 'https://unimetal.pl' }, // Diagnostic lanes
    { name: 'CDIF/3 (Axes System)', categoryId: diagSpecId, turnover: null, techMaturityScore: 9, website: 'https://cdif3.com' }, // Polish diagnostic tool
    { name: 'Fomar Friction', categoryId: brandOwnerId, turnover: 30000000, techMaturityScore: 5, website: 'https://fomar.com.pl' }, // Local manufacturer
    
    // --- Body / Glass / Tires ---
    { name: 'Carglass Polska', categoryId: bodyRepairId, turnover: null, techMaturityScore: 7, website: 'https://carglass.pl' },
    { name: 'Pilkington Automotive Poland', categoryId: bodyRepairId, turnover: 150000000, techMaturityScore: 8, website: 'https://pilkington.com/pl' },
    { name: 'NordGlass (AGR)', categoryId: bodyRepairId, turnover: 80000000, techMaturityScore: 7, website: 'https://nordglass.pl' },
    { name: 'Parys (Car Care)', categoryId: brandOwnerId, turnover: 25000000, techMaturityScore: 3, website: 'https://parys.pl' },

    // --- Others / Specific ---
    { name: 'Motointegrator PL', categoryId: wholesalerId, turnover: null, techMaturityScore: 5, website: 'https://motointegrator.com/pl' }, // Inter Cars
    { name: 'iParts.pl', categoryId: wholesalerId, turnover: 45000000, techMaturityScore: 5, website: 'https://iparts.pl' },
    { name: 'Ucando', categoryId: wholesalerId, turnover: null, techMaturityScore: 4, website: 'https://ucando.pl' }, // B2C
    { name: 'Sędziszów (PZL)', categoryId: brandOwnerId, turnover: 20000000, techMaturityScore: 5, website: 'https://pzlsedziszow.pl' }, // Filters
    { name: 'Lumag (Breck)', categoryId: brandOwnerId, turnover: 45000000, techMaturityScore: 6, website: 'https://lumag.pl' } // Brakes
  ]

  for (const company of plCompanies) {
    const existing = await prisma.company.findFirst({
        where: { name: company.name, countryId: pl.id }
    })

    if (!existing) {
        await prisma.company.create({
            data: {
              ...company,
              countryId: pl.id,
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

  await setParent('Q-Service Castrol', 'Inter Cars S.A.')
  await setParent('Motointegrator PL', 'Inter Cars S.A.')
  await setParent('ProfiAuto Serwis', 'Moto-Profil')
  await setParent('MaXserwis', 'Auto Partner SA')

  console.log('Poland PL Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
