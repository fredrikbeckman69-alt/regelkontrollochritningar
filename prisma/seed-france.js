"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var fr, categories, getCatId, workshopChainId, wholesalerId, diagSpecId, bodyRepairId, brandOwnerId, frCompanies, _i, frCompanies_1, company, existing, setParent;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Seeding France (FR) Market Data...');
                    return [4 /*yield*/, prisma.country.findUnique({ where: { code: 'FR' } })];
                case 1:
                    fr = _a.sent();
                    if (!fr)
                        throw new Error("Country FR not found");
                    return [4 /*yield*/, prisma.category.findMany()];
                case 2:
                    categories = _a.sent();
                    getCatId = function (name) { var _a; return (_a = categories.find(function (c) { return c.name === name; })) === null || _a === void 0 ? void 0 : _a.id; };
                    workshopChainId = getCatId('Workshop Chains & Groups');
                    wholesalerId = getCatId('Wholesalers');
                    diagSpecId = getCatId('Diagnostic Specialists');
                    bodyRepairId = getCatId('Body Shop Chains');
                    brandOwnerId = getCatId('Wholesalers & Brand Owners');
                    if (!workshopChainId || !wholesalerId || !diagSpecId || !bodyRepairId || !brandOwnerId) {
                        throw new Error("Missing categories");
                    }
                    frCompanies = [
                        // --- Wholesalers & Brand Owners ---
                        { name: 'Alliance Automotive Group (AAG)', categoryId: wholesalerId, turnover: 2500000000, techMaturityScore: 9, website: 'https://allianceautomotive.fr' }, // Headquartered in FR
                        { name: 'PHE (Parts Holding Europe / Autodistribution)', categoryId: wholesalerId, turnover: 2000000000, techMaturityScore: 9, website: 'https://partsholdingeurope.com' }, // D'Ieteren
                        { name: 'Emil Frey France (FLAURAUD)', categoryId: wholesalerId, turnover: 120000000, techMaturityScore: 7, website: 'https://flauraud.fr' },
                        { name: 'Doyen Auto (PHE)', categoryId: wholesalerId, turnover: null, techMaturityScore: 7, website: 'https://doyen-auto.com' },
                        { name: 'Agra', categoryId: wholesalerId, turnover: 150000000, techMaturityScore: 6, website: 'https://agra.fr' },
                        // --- Workshop Chains & Fast Fit ---
                        { name: 'Norauto (Mobivia)', categoryId: workshopChainId, turnover: 2800000000, techMaturityScore: 8, website: 'https://norauto.fr' },
                        { name: 'Midas France (Mobivia)', categoryId: workshopChainId, turnover: 250000000, techMaturityScore: 7, website: 'https://midas.fr' },
                        { name: 'Feu Vert', categoryId: workshopChainId, turnover: 650000000, techMaturityScore: 8, website: 'https://feuvert.fr' },
                        { name: 'Speedy France', categoryId: workshopChainId, turnover: 250000000, techMaturityScore: 7, website: 'https://speedy.fr' }, // Bridgestone
                        { name: 'Point S France', categoryId: workshopChainId, turnover: 500000000, techMaturityScore: 6, website: 'https://points.fr' },
                        { name: 'Euro Repar Car Service', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://eurorepar.fr' }, // Stellantis
                        { name: 'Motrio', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://motrio.fr' }, // Renault
                        { name: 'AD (Autodistribution)', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://ad.fr' }, // Network
                        { name: 'Top Garage (AAG)', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://top-garage.fr' },
                        { name: 'Précisium (AAG)', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://precisium.fr' },
                        { name: 'Roady', categoryId: workshopChainId, turnover: 240000000, techMaturityScore: 6, website: 'https://roady.fr' }, // Les Mousquetaires
                        // --- Diagnostic Specialists / Niche ---
                        { name: 'Actia Group', categoryId: diagSpecId, turnover: 500000000, techMaturityScore: 10, website: 'https://actia.com' }, // Major Diag Mfg
                        { name: 'Capelec', categoryId: diagSpecId, turnover: 20000000, techMaturityScore: 9, website: 'https://capelec.com' }, // MOT emissions & headlights
                        { name: 'GYS SA', categoryId: brandOwnerId, turnover: 120000000, techMaturityScore: 8, website: 'https://gys.fr' }, // Welding & Battery Support
                        { name: 'Daf Conseil', categoryId: diagSpecId, turnover: 10000000, techMaturityScore: 9, website: 'https://dafconseil.com' }, // Tech support & Diag
                        { name: 'Fasnet', categoryId: diagSpecId, turnover: null, techMaturityScore: 7, website: '' },
                        // --- Body / Glass / Tires ---
                        { name: 'Carglass France', categoryId: bodyRepairId, turnover: 450000000, techMaturityScore: 8, website: 'https://carglass.fr' }, // Needs ADAS
                        { name: 'France Pare-Brise', categoryId: bodyRepairId, turnover: 180000000, techMaturityScore: 7, website: 'https://franceparebrise.fr' }, // Saint-Gobain
                        { name: 'Mondial Pare-Brise', categoryId: bodyRepairId, turnover: 120000000, techMaturityScore: 7, website: 'https://mondialparebrise.fr' }, // Macif -> PHE
                        { name: 'Carrosserie AD', categoryId: bodyRepairId, turnover: null, techMaturityScore: 6, website: 'https://ad.fr/carrosserie' },
                        { name: 'ZeCarrossery', categoryId: bodyRepairId, turnover: 40000000, techMaturityScore: 6, website: 'https://zecarrossery.fr' },
                        { name: 'Profil Plus', categoryId: workshopChainId, turnover: 350000000, techMaturityScore: 5, website: 'https://profilplus.fr' },
                        // --- Others / Specific ---
                        { name: 'Oscaro', categoryId: wholesalerId, turnover: 300000000, techMaturityScore: 5, website: 'https://oscaro.com' }, // B2C/B2B Online (PHE)
                        { name: 'Mister Auto', categoryId: wholesalerId, turnover: 150000000, techMaturityScore: 4, website: 'https://mister-auto.com' }, // Stellantis
                        { name: 'Yakarouler', categoryId: wholesalerId, turnover: 25000000, techMaturityScore: 4, website: 'https://yakarouler.com' },
                        { name: 'Valeo Service', categoryId: brandOwnerId, turnover: 2000000000, techMaturityScore: 9, website: 'https://valeoservice.fr' },
                        { name: 'NTN-SNR Roulements', categoryId: brandOwnerId, turnover: 1000000000, techMaturityScore: 7, website: 'https://ntn-snr.com' },
                        { name: 'Hutchinson Aftermarket', categoryId: brandOwnerId, turnover: 200000000, techMaturityScore: 5, website: 'https://hutchinsonaftermarket.com' }
                    ];
                    _i = 0, frCompanies_1 = frCompanies;
                    _a.label = 3;
                case 3:
                    if (!(_i < frCompanies_1.length)) return [3 /*break*/, 7];
                    company = frCompanies_1[_i];
                    return [4 /*yield*/, prisma.company.findFirst({
                            where: { name: company.name, countryId: fr.id }
                        })];
                case 4:
                    existing = _a.sent();
                    if (!!existing) return [3 /*break*/, 6];
                    return [4 /*yield*/, prisma.company.create({
                            data: __assign(__assign({}, company), { countryId: fr.id })
                        })];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 3];
                case 7:
                    setParent = function (childName, parentName) { return __awaiter(_this, void 0, void 0, function () {
                        var parent, child;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, prisma.company.findFirst({ where: { name: parentName } })];
                                case 1:
                                    parent = _a.sent();
                                    return [4 /*yield*/, prisma.company.findFirst({ where: { name: childName } })];
                                case 2:
                                    child = _a.sent();
                                    if (!(parent && child)) return [3 /*break*/, 4];
                                    return [4 /*yield*/, prisma.company.update({
                                            where: { id: child.id },
                                            data: { parentCompanyId: parent.id }
                                        })];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); };
                    return [4 /*yield*/, setParent('Doyen Auto (PHE)', 'PHE (Parts Holding Europe / Autodistribution)')];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, setParent('AD (Autodistribution)', 'PHE (Parts Holding Europe / Autodistribution)')];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, setParent('Carrosserie AD', 'PHE (Parts Holding Europe / Autodistribution)')];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, setParent('Oscaro', 'PHE (Parts Holding Europe / Autodistribution)')];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, setParent('Mondial Pare-Brise', 'PHE (Parts Holding Europe / Autodistribution)')];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, setParent('Top Garage (AAG)', 'Alliance Automotive Group (AAG)')];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, setParent('Précisium (AAG)', 'Alliance Automotive Group (AAG)')];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, setParent('Midas France (Mobivia)', 'Norauto (Mobivia)')];
                case 15:
                    _a.sent();
                    console.log('France FR Seeding finished.');
                    return [2 /*return*/];
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
