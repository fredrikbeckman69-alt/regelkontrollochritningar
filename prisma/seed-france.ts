import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding France (FR) Market Data...')

  const fr = await prisma.country.findUnique({ where: { code: 'FR' } })
  if (!fr) throw new Error("Country FR not found")

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

  const frCompanies = [
    // --- Wholesalers & Brand Owners ---
    { name: 'Alliance Automotive Group (AAG)', categoryId: wholesalerId, turnover: 2500000000, techMaturityScore: 9, website: 'https://allianceautomotive.fr' }, // Headquartered in FR
    { name: 'PHE (Parts Holding Europe / Autodistribution)', categoryId: wholesalerId, turnover: 2000000000, techMaturityScore: 9, website: 'https://partsholdingeurope.com' }, // D'Ieteren
    { name: 'Emil Frey France (FLAURAUD)', categoryId: wholesalerId, turnover: 120000000, techMaturityScore: 7, website: 'https://flauraud.fr' },
    { name: 'Doyen Auto (PHE)', categoryId: wholesalerId, turnover: null, techMaturityScore: 7, website: 'https://doyen-auto.com' },
    { name: 'Agra', categoryId: wholesalerId, turnover: 150000000, techMaturityScore: 6, website: 'https://agra.fr' },

    // --- Workshop Chains & Fast Fit ---
    { name: 'Norauto (Mobivia)', categoryId: workshopChainId, turnover: 2800000000, techMaturityScore: 8, website: 'https://norauto.fr' },
    { name: 'Midas France (Mobivia)', categoryId: workshopChainId, turnover: 250000000, techMaturityScore: 7, website: 'https://midas.fr' },
    { name: 'Feu Vert', categoryId: workshopChainId, turnover: 650000000, techMaturityScore: 8, website: 'https://feuvert.fr' },
    { name: 'Speedy France', categoryId: workshopChainId, turnover: 250000000, techMaturityScore: 7, website: 'https://speedy.fr' }, // Bridgestone
    { name: 'Point S France', categoryId: workshopChainId, turnover: 500000000, techMaturityScore: 6, website: 'https://points.fr' },
    { name: 'Euro Repar Car Service', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://eurorepar.fr' }, // Stellantis
    { name: 'Motrio', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://motrio.fr' }, // Renault
    { name: 'AD (Autodistribution)', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://ad.fr' }, // Network
    { name: 'Top Garage (AAG)', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://top-garage.fr' },
    { name: 'Précisium (AAG)', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://precisium.fr' },
    { name: 'Roady', categoryId: workshopChainId, turnover: 240000000, techMaturityScore: 6, website: 'https://roady.fr' }, // Les Mousquetaires

    // --- Diagnostic Specialists / Niche ---
    { name: 'Actia Group', categoryId: diagSpecId, turnover: 500000000, techMaturityScore: 10, website: 'https://actia.com' }, // Major Diag Mfg
    { name: 'Capelec', categoryId: diagSpecId, turnover: 20000000, techMaturityScore: 9, website: 'https://capelec.com' }, // MOT emissions & headlights
    { name: 'GYS SA', categoryId: brandOwnerId, turnover: 120000000, techMaturityScore: 8, website: 'https://gys.fr' }, // Welding & Battery Support
    { name: 'Daf Conseil', categoryId: diagSpecId, turnover: 10000000, techMaturityScore: 9, website: 'https://dafconseil.com' }, // Tech support & Diag
    { name: 'Fasnet', categoryId: diagSpecId, turnover: null, techMaturityScore: 7, website: '' },

    // --- Body / Glass / Tires ---
    { name: 'Carglass France', categoryId: bodyRepairId, turnover: 450000000, techMaturityScore: 8, website: 'https://carglass.fr' }, // Needs ADAS
    { name: 'France Pare-Brise', categoryId: bodyRepairId, turnover: 180000000, techMaturityScore: 7, website: 'https://franceparebrise.fr' }, // Saint-Gobain
    { name: 'Mondial Pare-Brise', categoryId: bodyRepairId, turnover: 120000000, techMaturityScore: 7, website: 'https://mondialparebrise.fr' }, // Macif -> PHE
    { name: 'Carrosserie AD', categoryId: bodyRepairId, turnover: null, techMaturityScore: 6, website: 'https://ad.fr/carrosserie' },
    { name: 'ZeCarrossery', categoryId: bodyRepairId, turnover: 40000000, techMaturityScore: 6, website: 'https://zecarrossery.fr' },
    { name: 'Profil Plus', categoryId: workshopChainId, turnover: 350000000, techMaturityScore: 5, website: 'https://profilplus.fr' },

    // --- Others / Specific ---
    { name: 'Oscaro', categoryId: wholesalerId, turnover: 300000000, techMaturityScore: 5, website: 'https://oscaro.com' }, // B2C/B2B Online (PHE)
    { name: 'Mister Auto', categoryId: wholesalerId, turnover: 150000000, techMaturityScore: 4, website: 'https://mister-auto.com' }, // Stellantis
    { name: 'Yakarouler', categoryId: wholesalerId, turnover: 25000000, techMaturityScore: 4, website: 'https://yakarouler.com' },
    { name: 'Valeo Service', categoryId: brandOwnerId, turnover: 2000000000, techMaturityScore: 9, website: 'https://valeoservice.fr' },
    { name: 'NTN-SNR Roulements', categoryId: brandOwnerId, turnover: 1000000000, techMaturityScore: 7, website: 'https://ntn-snr.com' },
    { name: 'Hutchinson Aftermarket', categoryId: brandOwnerId, turnover: 200000000, techMaturityScore: 5, website: 'https://hutchinsonaftermarket.com' }
  ]

  for (const company of frCompanies) {
    const existing = await prisma.company.findFirst({
        where: { name: company.name, countryId: fr.id }
    })

    if (!existing) {
        await prisma.company.create({
            data: {
              ...company,
              countryId: fr.id,
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

  await setParent('Doyen Auto (PHE)', 'PHE (Parts Holding Europe / Autodistribution)')
  await setParent('AD (Autodistribution)', 'PHE (Parts Holding Europe / Autodistribution)')
  await setParent('Carrosserie AD', 'PHE (Parts Holding Europe / Autodistribution)')
  await setParent('Oscaro', 'PHE (Parts Holding Europe / Autodistribution)')
  await setParent('Mondial Pare-Brise', 'PHE (Parts Holding Europe / Autodistribution)')
  
  await setParent('Top Garage (AAG)', 'Alliance Automotive Group (AAG)')
  await setParent('Précisium (AAG)', 'Alliance Automotive Group (AAG)')

  await setParent('Midas France (Mobivia)', 'Norauto (Mobivia)')

  console.log('France FR Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
