import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// These are the top 5 most strategic accounts per country for Autocom based on the criteria in Skills.md
// (Targeting major workshop chains and large wholesalers that also handle diagnostics/garage equipment)
const TARGETS_BY_COUNTRY = {
  'SE': [
    'MEKO AB',
    'KGK (KG Knutsson AB)',
    'Orio AB', // Now part of Hedin
    'Hedin Bil',
    'Bilia AB'
  ],
  'DE': [
    'LKQ Europe', 
    'WM SE (Trost)',
    'PV Automotive',
    'Hella Gutmann Solutions', // Major competitor/partner for diag
    'Bosch Car Service DE'
  ],
  'UK': [
    'LKQ Euro Car Parts',
    'Kwik Fit (ITOCHU)',
    'Halfords Autocentres',
    'Alliance Automotive Group UK',
    'Arnold Clark'
  ],
  'FR': [
    'PHE (Parts Holding Europe)', // Autodis
    'Alliance Automotive Group FR',
    'Mobivia Groupe', // Norauto parent
    'Feu Vert',
    'Actia Group' // Diag manufacturer/partner
  ],
  'ES': [
    'AD Parts',
    'Serca (Grupo Serca Automoción)',
    'Cojali S.L. (Jaltest)', // Major diag manufacturer
    'Norauto España',
    'Lausan'
  ],
  'PL': [
    'Inter Cars S.A.', // Largest in CEE
    'Moto-Profil',
    'Auto Partner SA',
    'Bosch Car Service PL',
    'CDIF/3 (Axes System)' // Local diag competitor/partner
  ]
}

async function markTargets() {
  console.log('Resetting all targets...')
  await prisma.company.updateMany({
    data: { isTarget: false }
  })

  console.log('Marking top 5 targets per country...')
  
  for (const [countryCode, companyNames] of Object.entries(TARGETS_BY_COUNTRY)) {
    const country = await prisma.country.findUnique({ where: { code: countryCode } })
    if (!country) {
      console.warn(`Country ${countryCode} not found in DB.`)
      continue
    }

    for (const name of companyNames) {
      const company = await prisma.company.findFirst({
        where: { name, countryId: country.id }
      })

      if (company) {
        await prisma.company.update({
          where: { id: company.id },
          data: { isTarget: true }
        })
        console.log(`[${countryCode}] Marked: ${company.name}`)
      } else {
        console.warn(`[${countryCode}] Could not find company: ${name}`)
      }
    }
  }
}

markTargets()
  .then(() => {
    console.log('Target marking complete.')
    process.exit(0)
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
