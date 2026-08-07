import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const count = await prisma.company.count({
    where: {
      OR: [
        { website: null },
        { website: '' }
      ]
    }
  })
  
  console.log(`There are ${count} companies missing a website.`)

  const missing = await prisma.company.findMany({
    where: {
      OR: [
        { website: null },
        { website: '' }
      ]
    },
    select: {
      id: true,
      name: true,
      country: { select: { code: true } }
    }
  })

  console.log(JSON.stringify(missing, null, 2))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
