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
        var se, categories, getCatId, workshopChainId, wholesalerId, diagSpecId, bodyRepairId, brandOwnerId, swedenCompanies, _i, swedenCompanies_1, company, existing, setParent;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Seeding Sweden (SE) Market Data...');
                    return [4 /*yield*/, prisma.country.findUnique({ where: { code: 'SE' } })];
                case 1:
                    se = _a.sent();
                    if (!se)
                        throw new Error("Country SE not found");
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
                    swedenCompanies = [
                        // --- Wholesalers & Brand Owners ---
                        { name: 'KGK (KG Knutsson AB)', categoryId: brandOwnerId, turnover: 450000000, techMaturityScore: 8, website: 'https://kgk.se' }, // Autoexperten owner
                        { name: 'Orio AB (Hedin Parts)', categoryId: wholesalerId, turnover: 80000000, techMaturityScore: 7, website: 'https://orio.com' },
                        { name: 'Atoy Automotive Sweden AB', categoryId: wholesalerId, turnover: 120000000, techMaturityScore: 7, website: 'https://atoy.se' },
                        { name: 'Ryds Bilglas AB (Belron)', categoryId: bodyRepairId, turnover: 150000000, techMaturityScore: 6, website: 'https://rydsbilglas.se' },
                        // --- Workshop Chains (Workshop Chains & Groups) ---
                        { name: 'MEKO AB', categoryId: workshopChainId, turnover: 800000000, techMaturityScore: 8, website: 'https://meko.com' },
                        { name: 'Mekonomen Sweden', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://mekonomen.se' }, // Sub of MEKO
                        { name: 'Meca Sweden', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://meca.se' }, // Sub of MEKO
                        { name: 'Bileko Car Parts AB', categoryId: brandOwnerId, turnover: null, techMaturityScore: 8, website: '' }, // Sub of MEKO
                        { name: 'Autoexperten', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://autoexperten.se' }, // Sub of KGK
                        { name: 'BDS', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://bds.se' },
                        { name: 'MekPartner', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://mekpartner.se' },
                        { name: 'MekoPartner', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: '' }, // Sub of MEKO
                        { name: 'AD Bildelar', categoryId: workshopChainId, turnover: 90000000, techMaturityScore: 7, website: 'https://adbildelar.se' },
                        { name: 'Bosch Car Service SE', categoryId: workshopChainId, turnover: null, techMaturityScore: 10, website: 'https://boschcarservice.com/se/sv' },
                        { name: 'Speedy Bilservice', categoryId: workshopChainId, turnover: 30000000, techMaturityScore: 5, website: 'https://speedybilservice.se' },
                        { name: 'Din Bil Sweden AB', categoryId: workshopChainId, turnover: 2000000000, techMaturityScore: 9, website: 'https://dinbil.se' },
                        { name: 'Bilia AB', categoryId: workshopChainId, turnover: 3500000000, techMaturityScore: 9, website: 'https://bilia.se' },
                        { name: 'Hedin Bil', categoryId: workshopChainId, turnover: 4000000000, techMaturityScore: 9, website: 'https://hedinbil.se' },
                        { name: 'Upplands Motor (Bilia)', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: '' },
                        // --- Diagnostic Specialists / Niche ---
                        { name: 'Sun Maskin & Service AB', categoryId: diagSpecId, turnover: 15000000, techMaturityScore: 10, website: 'https://sunmaskin.se' },
                        { name: 'Verkstadsteknik i Sweden AB', categoryId: diagSpecId, turnover: 8000000, techMaturityScore: 9, website: '' },
                        { name: 'Hella Gutmann Solutions SE', categoryId: diagSpecId, turnover: null, techMaturityScore: 10, website: 'https://hella-gutmann.com' },
                        { name: 'Wurth Svenska AB', categoryId: brandOwnerId, turnover: 300000000, techMaturityScore: 8, website: 'https://wurth.se' },
                        { name: 'Berner Sweden AB', categoryId: brandOwnerId, turnover: 80000000, techMaturityScore: 7, website: 'https://berner.se' },
                        { name: 'Midac Batteries SE', categoryId: brandOwnerId, turnover: 12000000, techMaturityScore: 4, website: '' },
                        { name: 'Strands Fordonskomponenter AB', categoryId: brandOwnerId, turnover: 60000000, techMaturityScore: 5, website: 'https://strands.se' },
                        // --- Body / Glass / Tires ---
                        { name: 'Werksta Nordic AB', categoryId: bodyRepairId, turnover: 250000000, techMaturityScore: 7, website: 'https://werksta.se' }, // Needs ADAS
                        { name: 'Vianor AB', categoryId: workshopChainId, turnover: 200000000, techMaturityScore: 6, website: 'https://vianor.se' },
                        { name: 'Däckia AB', categoryId: workshopChainId, turnover: 180000000, techMaturityScore: 6, website: 'https://dackia.se' },
                        { name: 'Euromaster AB', categoryId: workshopChainId, turnover: 160000000, techMaturityScore: 6, website: 'https://euromaster.se' },
                        { name: 'First Stop Sweden', categoryId: workshopChainId, turnover: null, techMaturityScore: 5, website: 'https://firststop.se' },
                        { name: 'Carglass Sweden', categoryId: bodyRepairId, turnover: null, techMaturityScore: 7, website: 'https://carglass.se' }, // Needs ADAS
                        { name: 'Samglas', categoryId: bodyRepairId, turnover: 40000000, techMaturityScore: 6, website: 'https://samglas.se' },
                        { name: 'Svenska Bilglas', categoryId: bodyRepairId, turnover: 25000000, techMaturityScore: 6, website: '' },
                        // --- Others ---
                        { name: 'Skruvat.se (Bythjul)', categoryId: wholesalerId, turnover: 100000000, techMaturityScore: 4, website: 'https://skruvat.se' },
                        { name: 'Autodoc SE', categoryId: wholesalerId, turnover: null, techMaturityScore: 4, website: 'https://autodoc.se' },
                        { name: 'Biltema Sweden AB', categoryId: brandOwnerId, turnover: 1500000000, techMaturityScore: 4, website: 'https://biltema.se' },
                        { name: 'Jula AB (Auto Dept)', categoryId: brandOwnerId, turnover: 500000000, techMaturityScore: 3, website: 'https://jula.se' },
                        { name: 'Trodo.se', categoryId: wholesalerId, turnover: null, techMaturityScore: 3, website: 'https://trodo.se' },
                        { name: 'Bildelaronline24', categoryId: wholesalerId, turnover: null, techMaturityScore: 3, website: 'https://bildelaronline24.se' },
                        { name: 'Lagerstedt & Krantz AB (L&K)', categoryId: brandOwnerId, turnover: null, techMaturityScore: 5, website: '' },
                        { name: 'Nordiska Bilreservdelar', categoryId: wholesalerId, turnover: 15000000, techMaturityScore: 4, website: '' },
                        // Added to reach 50 roughly
                        { name: 'Ojanperä', categoryId: brandOwnerId, turnover: 12000000, techMaturityScore: 5, website: '' },
                        { name: 'Lvd Lastvagnsdelar Svenska AB', categoryId: wholesalerId, turnover: 35000000, techMaturityScore: 7, website: '' },
                        { name: 'DieselTrim Bilverkstad', categoryId: diagSpecId, turnover: null, techMaturityScore: 9, website: '' },
                        { name: 'Motorbiten', categoryId: diagSpecId, turnover: null, techMaturityScore: 8, website: '' },
                        { name: 'Swedol (Tools)', categoryId: brandOwnerId, turnover: 400000000, techMaturityScore: 6, website: 'https://swedol.se' },
                        { name: 'Ahlsell Sweden AB (Auto/Industry)', categoryId: brandOwnerId, turnover: 3500000000, techMaturityScore: 6, website: 'https://ahlsell.se' },
                        { name: 'Svenska Batteripoolen', categoryId: brandOwnerId, turnover: 20000000, techMaturityScore: 4, website: '' },
                        { name: 'Start & Generator Specialisten', categoryId: diagSpecId, turnover: 10000000, techMaturityScore: 8, website: '' },
                        { name: 'Hallsbergs Bildelar', categoryId: wholesalerId, turnover: 18000000, techMaturityScore: 5, website: '' },
                        { name: 'Abris Sjö & Snö', categoryId: diagSpecId, turnover: 25000000, techMaturityScore: 6, website: '' }
                    ];
                    _i = 0, swedenCompanies_1 = swedenCompanies;
                    _a.label = 3;
                case 3:
                    if (!(_i < swedenCompanies_1.length)) return [3 /*break*/, 7];
                    company = swedenCompanies_1[_i];
                    return [4 /*yield*/, prisma.company.findFirst({
                            where: { name: company.name, countryId: se.id }
                        })];
                case 4:
                    existing = _a.sent();
                    if (!!existing) return [3 /*break*/, 6];
                    return [4 /*yield*/, prisma.company.create({
                            data: __assign(__assign({}, company), { countryId: se.id })
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
                    return [4 /*yield*/, setParent('Mekonomen Sweden', 'MEKO AB')];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, setParent('Meca Sweden', 'MEKO AB')];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, setParent('Bileko Car Parts AB', 'MEKO AB')];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, setParent('MekoPartner', 'MEKO AB')];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, setParent('Autoexperten', 'KGK (KG Knutsson AB)')];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, setParent('Upplands Motor (Bilia)', 'Bilia AB')];
                case 13:
                    _a.sent();
                    console.log('Sweden SE Seeding finished.');
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
