import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Spain (ES) Market Data...')

  const es = await prisma.country.findUnique({ where: { code: 'ES' } })
  if (!es) throw new Error("Country ES not found")

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

  const esCompanies = [
    // --- Wholesalers & Brand Owners ---
    { name: 'AD Parts', categoryId: wholesalerId, turnover: 800000000, techMaturityScore: 8, website: 'https://adparts.com' }, // Very strong in ES
    { name: 'Serca (Grupo Serca Automoción)', categoryId: wholesalerId, turnover: 450000000, techMaturityScore: 7, website: 'https://serca.es' },
    { name: 'CGA (Consorcio Grupo Automotivo)', categoryId: wholesalerId, turnover: 500000000, techMaturityScore: 7, website: 'https://grupocga.com' },
    { name: 'Agerauto', categoryId: wholesalerId, turnover: null, techMaturityScore: 6, website: 'https://agerauto.es' },
    { name: 'Cecauto', categoryId: wholesalerId, turnover: null, techMaturityScore: 6, website: 'https://cecauto.com' },
    { name: 'Pro Service (Volkswagen Group Spain)', categoryId: wholesalerId, turnover: null, techMaturityScore: 8, website: 'https://proservice.vgsc.es' },
    { name: 'Vemare (Grupo Vemare)', categoryId: wholesalerId, turnover: 120000000, techMaturityScore: 6, website: 'https://vemare.com' }, // AD Parts member
    { name: 'Lausan', categoryId: wholesalerId, turnover: 110000000, techMaturityScore: 8, website: 'https://lausan.es' }, // AAG Member

    // --- Workshop Chains & Fast Fit ---
    { name: 'Norauto España', categoryId: workshopChainId, turnover: 200000000, techMaturityScore: 7, website: 'https://norauto.es' },
    { name: 'Midas España', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://midas.es' },
    { name: 'Feu Vert Ibérica', categoryId: workshopChainId, turnover: 150000000, techMaturityScore: 7, website: 'https://feuvert.es' },
    { name: 'Aurgi', categoryId: workshopChainId, turnover: 70000000, techMaturityScore: 5, website: 'https://aurgi.com' },
    { name: 'Confortauto Hankook Masters', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://confortauto.com' },
    { name: 'EuroTaller', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://eurotaller.com' }, // Groupauto
    { name: 'Bosch Car Service ES', categoryId: workshopChainId, turnover: null, techMaturityScore: 10, website: 'https://boschcarservice.com/es/es' },
    { name: 'Rodi Motor Services', categoryId: workshopChainId, turnover: 200000000, techMaturityScore: 6, website: 'https://rodi.es' },
    { name: 'SPG Talleres', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://spgtalleres.com' }, // Serca
    { name: 'Talleres Profesional Plus', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://profesionalplus.es' }, // Serca

    // --- Diagnostic Specialists / Niche ---
    { name: 'Cojali S.L. (Jaltest)', categoryId: diagSpecId, turnover: 80000000, techMaturityScore: 10, website: 'https://cojali.com' }, // Major multibrand diag, especially CV
    { name: 'Bertón S.A.', categoryId: diagSpecId, turnover: null, techMaturityScore: 8, website: 'https://berton.es' }, // Spanish diag manufacturer
    { name: 'Autel Iberia', categoryId: diagSpecId, turnover: 15000000, techMaturityScore: 9, website: 'https://auteliberia.es' },
    { name: 'Bertontec (Asistencia)', categoryId: diagSpecId, turnover: null, techMaturityScore: 8, website: '' }, // Support arm
    { name: 'Eina (Eurekar Auto)', categoryId: diagSpecId, turnover: null, techMaturityScore: 9, website: 'https://eina.com' }, // Technical info/Call center
    { name: 'Vagindauto', categoryId: diagSpecId, turnover: null, techMaturityScore: 8, website: 'https://vagindauto.com' }, // Technical training & diag
    { name: 'Miac', categoryId: diagSpecId, turnover: 8000000, techMaturityScore: 8, website: 'https://miac.es' }, // Diagnostic equipment dist

    // --- Body / Glass / Tires ---
    { name: 'Carglass España', categoryId: bodyRepairId, turnover: 180000000, techMaturityScore: 8, website: 'https://carglass.es' },
    { name: 'Glassdrive España', categoryId: bodyRepairId, turnover: null, techMaturityScore: 7, website: 'https://glassdrive.es' }, // Saint-Gobain
    { name: 'Ralarsa', categoryId: bodyRepairId, turnover: 50000000, techMaturityScore: 6, website: 'https://ralarsa.com' }, // Safelite/Belron
    { name: 'CertifiedFirst España', categoryId: bodyRepairId, turnover: null, techMaturityScore: 6, website: 'https://certifiedfirst.es' }, // PPG
    { name: 'Vialider', categoryId: workshopChainId, turnover: null, techMaturityScore: 5, website: 'https://vialider.es' }, // Michelin
    { name: 'Vulco', categoryId: workshopChainId, turnover: null, techMaturityScore: 5, website: 'https://vulco.es' }, // Goodyear
    { name: 'TallerXXI', categoryId: workshopChainId, turnover: null, techMaturityScore: 5, website: 'https://tallerxxi.com' }, // CGA

    // --- Others / Specific ---
    { name: 'Oscaro Ibérica', categoryId: wholesalerId, turnover: null, techMaturityScore: 4, website: 'https://oscaro.es' },
    { name: 'Endado', categoryId: wholesalerId, turnover: 12000000, techMaturityScore: 4, website: 'https://endado.com' },
    { name: 'Faes (Fabricación de Automóviles Españoles)', categoryId: brandOwnerId, turnover: 30000000, techMaturityScore: 6, website: 'https://faes.es' },
    { name: 'Icer Brakes', categoryId: brandOwnerId, turnover: 60000000, techMaturityScore: 5, website: 'https://icerbrakes.com' },
    { name: 'Deter (Grupo)', categoryId: wholesalerId, turnover: null, techMaturityScore: 5, website: '' }
  ]

  for (const company of esCompanies) {
    const existing = await prisma.company.findFirst({
        where: { name: company.name, countryId: es.id }
    })

    if (!existing) {
        await prisma.company.create({
            data: {
              ...company,
              countryId: es.id,
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

  await setParent('Vemare (Grupo Vemare)', 'AD Parts')
  await setParent('SPG Talleres', 'Serca (Grupo Serca Automoción)')
  await setParent('Talleres Profesional Plus', 'Serca (Grupo Serca Automoción)')
  await setParent('TallerXXI', 'CGA (Consorcio Grupo Automotivo)')
  await setParent('Bertontec (Asistencia)', 'Bertón S.A.')
  await setParent('Ralarsa', 'Carglass España')

  console.log('Spain ES Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
