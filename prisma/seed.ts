import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // 1. Create Countries
  const countriesData = [
    { code: 'SE', name: 'Sweden' },
    { code: 'DE', name: 'Germany' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'ES', name: 'Spain' },
    { code: 'PL', name: 'Poland' },
    { code: 'FR', name: 'France' },
  ]

  for (const c of countriesData) {
    await prisma.country.upsert({
      where: { code: c.code },
      update: {},
      create: c,
    })
  }

  // 2. Create Categories
  const categoriesData = [
    { name: 'Diagnostic Specialists', description: 'Independent experts and niche players in vehicle diagnostics' },
    { name: 'Workshop Chains & Groups', description: 'Large-scale networks' },
    { name: 'Wholesalers & Brand Owners', description: 'Central distributors' },
    { name: 'Body Shop Chains', description: 'Specialized networks for bodywork, glass, and repair' },
    { name: 'Wholesalers', description: 'Major international spare parts distributors' },
  ]

  for (const cat of categoriesData) {
    await prisma.category.upsert({
      where: { name: cat.name },
      update: {},
      create: cat,
    })
  }

  // 3. Create some sample companies
  const se = await prisma.country.findUnique({ where: { code: 'SE' } })
  const de = await prisma.country.findUnique({ where: { code: 'DE' } })
  
  const workshopChain = await prisma.category.findUnique({ where: { name: 'Workshop Chains & Groups' } })
  const wholesaler = await prisma.category.findUnique({ where: { name: 'Wholesalers' } })

  if (se && workshopChain) {
    await prisma.company.create({
      data: {
        name: 'MEKO AB',
        countryId: se.id,
        categoryId: workshopChain.id,
        turnover: 800000000,
        employees: 3000,
        website: 'https://meko.com',
        techMaturityScore: 8
      }
    })
  }

  if (se && wholesaler) {
    await prisma.company.create({
      data: {
        name: 'KGK (Autoexperten)',
        countryId: se.id,
        categoryId: wholesaler.id,
        turnover: 450000000,
        techMaturityScore: 7
      }
    })
  }

  if (de && wholesaler) {
    await prisma.company.create({
      data: {
        name: 'LKQ Europe',
        countryId: de.id,
        categoryId: wholesaler.id,
        turnover: 5200000000,
        techMaturityScore: 9
      }
    })
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
