const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Clearing old data from SQLite database...");
  
  // Delete in order to satisfy foreign key constraints
  const deleteCompanies = await prisma.company.deleteMany({});
  const deleteCountries = await prisma.country.deleteMany({});
  const deleteCategories = await prisma.category.deleteMany({});
  
  console.log(`Deleted ${deleteCompanies.count} companies.`);
  console.log(`Deleted ${deleteCountries.count} countries.`);
  console.log(`Deleted ${deleteCategories.count} categories.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
