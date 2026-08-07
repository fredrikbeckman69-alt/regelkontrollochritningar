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
// These are the top 5 most strategic accounts per country for Autocom based on the criteria in Skills.md
// (Targeting major workshop chains and large wholesalers that also handle diagnostics/garage equipment)
var TARGETS_BY_COUNTRY = {
    'SE': [
        'MEKO AB',
        'KGK (KG Knutsson AB)',
        'Orio AB', // Now part of Hedin
        'Hedin Bil',
        'Bilia AB'
    ],
    'DE': [
        'LKQ Europe',
        'WM SE (Trost)',
        'PV Automotive',
        'Hella Gutmann Solutions', // Major competitor/partner for diag
        'Bosch Car Service DE'
    ],
    'UK': [
        'LKQ Euro Car Parts',
        'Kwik Fit (ITOCHU)',
        'Halfords Autocentres',
        'Alliance Automotive Group UK',
        'Arnold Clark'
    ],
    'FR': [
        'PHE (Parts Holding Europe)', // Autodis
        'Alliance Automotive Group FR',
        'Mobivia Groupe', // Norauto parent
        'Feu Vert',
        'Actia Group' // Diag manufacturer/partner
    ],
    'ES': [
        'AD Parts',
        'Serca (Grupo Serca Automoción)',
        'Cojali S.L. (Jaltest)', // Major diag manufacturer
        'Norauto España',
        'Lausan'
    ],
    'PL': [
        'Inter Cars S.A.', // Largest in CEE
        'Moto-Profil',
        'Auto Partner SA',
        'Bosch Car Service PL',
        'CDIF/3 (Axes System)' // Local diag competitor/partner
    ]
};
function markTargets() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, _b, countryCode, companyNames, country, _c, companyNames_1, name_1, company;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('Resetting all targets...');
                    return [4 /*yield*/, prisma.company.updateMany({
                            data: { isTarget: false }
                        })];
                case 1:
                    _d.sent();
                    console.log('Marking top 5 targets per country...');
                    _i = 0, _a = Object.entries(TARGETS_BY_COUNTRY);
                    _d.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 10];
                    _b = _a[_i], countryCode = _b[0], companyNames = _b[1];
                    return [4 /*yield*/, prisma.country.findUnique({ where: { code: countryCode } })];
                case 3:
                    country = _d.sent();
                    if (!country) {
                        console.warn("Country ".concat(countryCode, " not found in DB."));
                        return [3 /*break*/, 9];
                    }
                    _c = 0, companyNames_1 = companyNames;
                    _d.label = 4;
                case 4:
                    if (!(_c < companyNames_1.length)) return [3 /*break*/, 9];
                    name_1 = companyNames_1[_c];
                    return [4 /*yield*/, prisma.company.findFirst({
                            where: { name: name_1, countryId: country.id }
                        })];
                case 5:
                    company = _d.sent();
                    if (!company) return [3 /*break*/, 7];
                    return [4 /*yield*/, prisma.company.update({
                            where: { id: company.id },
                            data: { isTarget: true }
                        })];
                case 6:
                    _d.sent();
                    console.log("[".concat(countryCode, "] Marked: ").concat(company.name));
                    return [3 /*break*/, 8];
                case 7:
                    console.warn("[".concat(countryCode, "] Could not find company: ").concat(name_1));
                    _d.label = 8;
                case 8:
                    _c++;
                    return [3 /*break*/, 4];
                case 9:
                    _i++;
                    return [3 /*break*/, 2];
                case 10: return [2 /*return*/];
            }
        });
    });
}
markTargets()
    .then(function () {
    console.log('Target marking complete.');
    process.exit(0);
})
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
