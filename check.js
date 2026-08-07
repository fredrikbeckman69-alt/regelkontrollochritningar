const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const c = await prisma.country.findMany();
  console.log(c.map(x => x.name));
}
main().finally(() => prisma.$disconnect());
