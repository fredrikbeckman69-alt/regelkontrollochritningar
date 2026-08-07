const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.document.count();
  console.log(`Indexed documents in database: ${count}`);
  
  const sample = await prisma.document.findFirst({
    select: { title: true, category: true, fileType: true, keywords: true }
  });
  console.log("Sample Document:", sample);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
