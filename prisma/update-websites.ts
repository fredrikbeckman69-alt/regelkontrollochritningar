import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const WEBSITES_MAP: Record<string, string> = {
  "KGK (Autoexperten)": "https://autoexperten.se",
  "LKQ Europe": "https://lkqeurope.com",
  "Bileko Car Parts AB": "https://mekonomencompany.se/en/bileko-car-parts-2/",
  "MekoPartner": "https://mekopartner.se",
  "Upplands Motor (Bilia)": "https://bilia.se",
  "Verkstadsteknik i Sverige AB": "https://verkstadsteknik.se",
  "Midac Batteries SE": "https://midacbatteries.com",
  "Svenska Bilglas": "https://svenskabilglas.se",
  "Lagerstedt & Krantz AB (L&K)": "https://lkgruppen.se",
  "Nordiska Bilreservdelar": "https://nbr.se",
  "Ojanperä": "https://ojanpera.se",
  "Lvd Lastvagnsdelar Svenska AB": "https://lvd.se",
  "DieselTrim Bilverkstad": "https://dieseltrim.se",
  "Motorbiten": "https://motorbiten.com",
  "Svenska Batteripoolen": "https://batteripoolen.se",
  "Start & Generator Specialisten": "https://startogenerator.se",
  "Hallsbergs Bildelar": "https://hallsbergsbildelar.se",
  "Abris Sjö & Snö": "https://abris.se",
  "Wessels+Müller (WM SE)": "https://wm.de",
  "AutoFit": "https://autofit.de",
  "AutoPro": "https://autopro.de",
  "AutoPartner": "https://autopartner.de",
  "Faber GmbH": "https://faber-gmbh.de",
  "Würtz GmbH": "https://wuertz-gmbh.de",
  "Karosserie + Lack (ZKF)": "https://zkf.de",
  "Sankey & Co": "https://sankey.co.uk",
  "Andrew Page": "https://autopartsuk.com",
  "Fasnet": "https://fasnet.fr",
  "Bertontec (Asistencia)": "https://berton.es",
  "Deter (Grupo)": "https://grupodeter.com",
  "Perfect Service": "https://perfectservice.pl"
}

async function main() {
  for (const [name, website] of Object.entries(WEBSITES_MAP)) {
    await prisma.company.updateMany({
      where: { name: name },
      data: { website: website }
    })
    console.log(`Updated ${name} with ${website}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
