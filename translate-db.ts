import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

const translations = {
  // Countries
  'Sverige': 'Sweden',
  'Tyskland': 'Germany',
  'Storbritannien': 'United Kingdom',
  'Spanien': 'Spain',
  'Polen': 'Poland',
  'Frankrike': 'France',

  // Categories
  'Diagnosspecialister': 'Diagnostic Specialists',
  'Verkstadskedjor & Koncerner': 'Workshop Chains & Groups',
  'Grossister & Varumärkesägare': 'Wholesalers & Brand Owners',
  'Bilskadekedjor': 'Body Shop Chains',
  // Descriptions
  'Fristående experter och nischaktörer inom fordonsdiagnostik': 'Independent experts and niche players in vehicle diagnostics',
  'Storskaliga nätverk': 'Large-scale networks',
  'Centrala distributörer': 'Central distributors',
  'Specialiserade nätverk för karosseri, glas och reparation': 'Specialized networks for bodywork, glass, and repair',
  'Större internationella reservdelsdistributörer': 'Major international spare parts distributors'
}

async function main() {
  console.log('Translating DB records...')
  
  // Translate Countries
  const countries = await prisma.country.findMany()
  for (const c of countries) {
    if (translations[c.name]) {
      await prisma.country.update({
        where: { id: c.id },
        data: { name: translations[c.name] }
      })
      console.log(`Translated Country: ${c.name} -> ${translations[c.name]}`)
    }
  }

  // Translate Categories
  const categories = await prisma.category.findMany()
  for (const c of categories) {
    const updatedName = translations[c.name] || c.name
    const updatedDesc = translations[c.description] || c.description
    
    if (updatedName !== c.name || updatedDesc !== c.description) {
      await prisma.category.update({
        where: { id: c.id },
        data: { name: updatedName, description: updatedDesc }
      })
      console.log(`Translated Category: ${c.name} -> ${updatedName}`)
    }
  }

  console.log('Translating seed files...')
  const prismaDir = path.join(__dirname, 'prisma')
  const files = fs.readdirSync(prismaDir).filter(f => f.endsWith('.ts') || f.endsWith('.js'))

  for (const file of files) {
    const filePath = path.join(prismaDir, file)
    let content = fs.readFileSync(filePath, 'utf-8')
    let fileChanged = false

    for (const [sv, en] of Object.entries(translations)) {
      // We will blindly replace strings in the files, which is safe since these are specific names
      const regex = new RegExp(sv, 'g')
      if (regex.test(content)) {
        content = content.replace(regex, en)
        fileChanged = true
      }
    }

    if (fileChanged) {
      fs.writeFileSync(filePath, content, 'utf-8')
      console.log(`Updated translations in ${file}`)
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
