"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var TARGET_ENRICHMENTS = {
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
};
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, _b, name_1, data;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log("Enriching company profiles with deeper insights...");
                    _i = 0, _a = Object.entries(TARGET_ENRICHMENTS);
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    _b = _a[_i], name_1 = _b[0], data = _b[1];
                    return [4 /*yield*/, prisma.company.updateMany({
                            where: { name: name_1 },
                            data: data
                        })];
                case 2:
                    _c.sent();
                    console.log("Enriched profile for: ".concat(name_1));
                    _c.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
