import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TARGET_ENRICHMENTS: Record<string, any> = {
  "MEKO AB": {
    description: "The largest car service network and spare parts distributor in Northern Europe. Operates concepts like Mekonomen, MECA, AutoMester, and BilXtra.",
    headquarters: "Stockholm, Sweden",
    foundedYear: 1973,
    diagnosticBrands: "Autocom (Main Partner), Bosch",
    keyFocus: "Passenger Cars, Light Commercial Vehicles, Complete Workshop Solutions"
  },
  "KGK (Autoexperten)": {
    description: "Leading wholesaler of automotive accessories and spare parts in Sweden with the Autoexperten workshop chain concept.",
    headquarters: "Sollentuna, Sweden",
    foundedYear: 1946,
    diagnosticBrands: "Autocom, Hella Gutmann, TEXA",
    keyFocus: "Passenger Cars, Heavy Duty, Marine, Garage Equipment"
  },
  "LKQ Europe": {
    description: "The leading distributor of automotive aftermarket parts in Europe. Operates across multiple countries through various subsidiaries (Stahlgruber, Euro Car Parts, etc.).",
    headquarters: "Zug, Switzerland",
    foundedYear: 2011,
    diagnosticBrands: "Multiple (Bosch, Hella, Delphi, Autocom - depends on region)",
    keyFocus: "Pan-European Distribution, Workshop Concepts, Digital Solutions"
  },
  "Bosch Car Service DE": {
    description: "The world's largest independent workshop chain, deeply integrated with Bosch's diagnostic ecosystem.",
    headquarters: "Karlsruhe, Germany",
    foundedYear: 1921,
    diagnosticBrands: "Bosch (KTS series)",
    keyFocus: "Multi-brand servicing, Advanced Diagnostics, Parts, System Knowledge"
  },
  "Hedin Bil": {
    description: "One of the largest privately-owned car dealerships and workshop groups in Europe, representing over 40 vehicle brands.",
    headquarters: "Mölndal, Sweden",
    foundedYear: 1985,
    diagnosticBrands: "OEM specific (Odis, Xentry, VIDA, etc.), Autocom (Multi-brand)",
    keyFocus: "Vehicle Sales, Authorized Workshop Services, Multi-brand expansion"
  },
  "Bilia AB": {
    description: "One of Europe's largest car dealership chains, offering car sales, financing, and comprehensive workshop services.",
    headquarters: "Gothenburg, Sweden",
    foundedYear: 1967,
    diagnosticBrands: "OEM specific, Autocom/Delphi for all-makes service",
    keyFocus: "Authorized Dealerships, Service, Glass & Damage Repair"
  },
  "Inter Cars S.A.": {
    description: "The largest importer and distributor of automotive spare parts for passenger cars and commercial vehicles in Central and Eastern Europe.",
    headquarters: "Warsaw, Poland",
    foundedYear: 1990,
    diagnosticBrands: "Magneti Marelli, Bosch, TEXA, Autocom/Delphi",
    keyFocus: "CEE Region Distribution, Heavy Duty, Garage Equipment, Moto-Profil"
  },
  "LKQ Euro Car Parts": {
    description: "The UK's largest supplier of car parts and garage equipment, operating the AutoEducation academy to train technicians on modern diagnostics.",
    headquarters: "Tamworth, UK",
    foundedYear: 1978,
    diagnosticBrands: "Bosch, Hella Gutmann, Snap-on, Delphi",
    keyFocus: "UK Parts Distribution, Training (LKQ Academy), Complete Garage Solutions"
  },
  "Alliance Automotive Group UK": {
    description: "Leading distributor of passenger and light commercial vehicle parts to the independent aftermarket in Europe (subsidiary of GPC).",
    headquarters: "Bradford, UK",
    foundedYear: 1989,
    diagnosticBrands: "Delphi, Bosch, Autel",
    keyFocus: "Parts Distribution, Workshop Networks (e.g. AutoCare)"
  },
  "AD Parts": {
    description: "The largest spare parts distribution network in Spain and Portugal, part of AD International.",
    headquarters: "Girona, Spain",
    foundedYear: 1989,
    diagnosticBrands: "Bosch, TEXA, Autel",
    keyFocus: "Iberian Peninsula Distribution, AD Workshops, Technical Training (Grup Eina)"
  },
  "Cojali S.L. (Jaltest)": {
    description: "Major Spanish manufacturer of cooling systems, braking systems, and the renowned Jaltest multi-brand diagnostics for commercial vehicles.",
    headquarters: "Campo de Criptana, Spain",
    foundedYear: 1991,
    diagnosticBrands: "Jaltest (Proprietary)",
    keyFocus: "Commercial Vehicles, Agricultural, Off-Highway, Marine Diagnostics"
  },
  "PHE (Parts Holding Europe)": {
    description: "A major European player in independent distribution of light vehicle and heavy goods vehicle parts, mainly operating through Autodis Group (AD).",
    headquarters: "Arcueil, France",
    foundedYear: 1962,
    diagnosticBrands: "Bosch, Delphi, Actia",
    keyFocus: "French Market Dominance, Glass Repair (Mondial Pare-Brise), AD Network"
  },
  "Mobivia Groupe": {
    description: "European leader in multi-brand vehicle servicing and parts, operating brands like Norauto, Midas, ATU, and Carter-Cash.",
    headquarters: "Lille, France",
    foundedYear: 1970,
    diagnosticBrands: "Bosch, Actia, Hella, Autel",
    keyFocus: "Fast-Fit Services, Retail, B2C Auto Centers"
  },
  "Moto-Profil": {
    description: "One of the longest-operating distributors of automotive spare parts in Poland, founder of the ProfiAuto network.",
    headquarters: "Chorzów, Poland",
    foundedYear: 1993,
    diagnosticBrands: "Bosch, TEXA, Magneti Marelli",
    keyFocus: "Parts Wholesaling, ProfiAuto Workshops, Garage Data Solutions"
  }
}

async function main() {
  console.log("Enriching company profiles with deeper insights...")
  for (const [name, data] of Object.entries(TARGET_ENRICHMENTS)) {
    await prisma.company.updateMany({
      where: { name: name },
      data: data
    })
    console.log(`Enriched profile for: ${name}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
