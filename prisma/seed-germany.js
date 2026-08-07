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
        var de, categories, getCatId, workshopChainId, wholesalerId, diagSpecId, bodyRepairId, brandOwnerId, germanyCompanies, _i, germanyCompanies_1, company, existing, setParent;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Seeding Germany (DE) Market Data...');
                    return [4 /*yield*/, prisma.country.findUnique({ where: { code: 'DE' } })];
                case 1:
                    de = _a.sent();
                    if (!de)
                        throw new Error("Country DE not found");
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
                    germanyCompanies = [
                        // --- Wholesalers & Brand Owners ---
                        { name: 'LKQ Europe GmbH', categoryId: wholesalerId, turnover: null, techMaturityScore: 9, website: 'https://lkqeurope.com' }, // Stahlgruber
                        { name: 'Stahlgruber GmbH', categoryId: wholesalerId, turnover: 1600000000, techMaturityScore: 8, website: 'https://stahlgruber.de' }, // Sub of LKQ
                        { name: 'PV Automotive GmbH', categoryId: wholesalerId, turnover: null, techMaturityScore: 8, website: 'https://pvautomotive.de' }, // Sub of LKQ
                        { name: 'WM SE', categoryId: wholesalerId, turnover: 1600000000, techMaturityScore: 8, website: 'https://wm.de' },
                        { name: 'Hess Automotive', categoryId: wholesalerId, turnover: 250000000, techMaturityScore: 7, website: 'https://hess-automotive.de' },
                        { name: 'Wessels+Müller (WM SE)', categoryId: wholesalerId, turnover: null, techMaturityScore: 8, website: '' }, // Holding WM
                        { name: 'Coparts Autoteile GmbH', categoryId: wholesalerId, turnover: 150000000, techMaturityScore: 7, website: 'https://coparts.de' },
                        { name: 'CARAT Systementwicklungs GmbH', categoryId: wholesalerId, turnover: 1300000000, techMaturityScore: 8, website: 'https://carat-gruppe.de' },
                        { name: 'Select AG', categoryId: wholesalerId, turnover: 800000000, techMaturityScore: 8, website: 'https://select.ag' },
                        // --- Workshop Chains (Workshop Chains & Groups) ---
                        { name: 'Bosch Car Service DE', categoryId: workshopChainId, turnover: null, techMaturityScore: 10, website: 'https://boschcarservice.com/de/de' },
                        { name: '1a autoservice', categoryId: workshopChainId, turnover: null, techMaturityScore: 8, website: 'https://go1a.de' }, // Sub of CARAT
                        { name: 'Meisterhaft', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://meisterhaft.com' }, // Sub of Stahlgruber
                        { name: 'AutoFit', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: '' }, // Sub of Stahlgruber
                        { name: 'AutoPro', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: '' }, // Sub of Coparts
                        { name: 'Profiservice Werkstatt', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://profiservice-werkstatt.de' }, // Sub of Coparts
                        { name: 'Autofit', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://autofit.de' }, // Select AG
                        { name: 'AutoPartner', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: '' },
                        { name: 'Premio Reifen + Autoservice', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://premio.de' }, // Goodyear
                        // Auto Centers & Fast Fit
                        { name: 'A.T.U (Auto-Teile-Unger)', categoryId: workshopChainId, turnover: 1000000000, techMaturityScore: 8, website: 'https://atu.de' }, // Fast Fit
                        { name: 'Pitstop', categoryId: workshopChainId, turnover: 120000000, techMaturityScore: 6, website: 'https://pitstop.de' },
                        { name: 'stop+go', categoryId: workshopChainId, turnover: 60000000, techMaturityScore: 6, website: 'https://stopandgo.de' },
                        { name: 'Pneuhage', categoryId: workshopChainId, turnover: 450000000, techMaturityScore: 5, website: 'https://pneuhage.de' },
                        { name: 'Vergölst', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://vergoelst.de' }, // Continental
                        // --- Diagnostic Specialists / Niche ---
                        { name: 'Hella Gutmann Solutions GmbH', categoryId: diagSpecId, turnover: 120000000, techMaturityScore: 10, website: 'https://hella-gutmann.com' },
                        { name: 'Faber GmbH', categoryId: diagSpecId, turnover: 25000000, techMaturityScore: 8, website: '' }, // WShop equipment
                        { name: 'Würtz GmbH', categoryId: diagSpecId, turnover: null, techMaturityScore: 7, website: '' },
                        { name: 'KS Tools Werkzeuge - Maschinen GmbH', categoryId: brandOwnerId, turnover: 250000000, techMaturityScore: 8, website: 'https://kstools.com' },
                        { name: 'Würth Group (Automotive DE)', categoryId: brandOwnerId, turnover: null, techMaturityScore: 9, website: 'https://wuerth.de' },
                        { name: 'Berner SE', categoryId: brandOwnerId, turnover: 1100000000, techMaturityScore: 7, website: 'https://berner.com' },
                        { name: 'Texa Deutschland GmbH', categoryId: diagSpecId, turnover: 15000000, techMaturityScore: 10, website: 'https://texadeutschland.com' },
                        { name: 'Wow! Würth Online World GmbH', categoryId: diagSpecId, turnover: 40000000, techMaturityScore: 9, website: 'https://wow-portal.com' },
                        // --- Body / Glass / Tires ---
                        { name: 'Carglass GmbH', categoryId: bodyRepairId, turnover: 500000000, techMaturityScore: 7, website: 'https://carglass.de' },
                        { name: 'Junited Autoglas', categoryId: bodyRepairId, turnover: 100000000, techMaturityScore: 6, website: 'https://junited-autoglas.de' }, // Sub of Belron
                        { name: 'KS Autoglas', categoryId: bodyRepairId, turnover: 40000000, techMaturityScore: 6, website: 'https://ksautoglas.com' },
                        { name: 'IRS Group (Intelligent Repair Solutions)', categoryId: bodyRepairId, turnover: 200000000, techMaturityScore: 7, website: 'https://irs-group.com' },
                        { name: 'Karosserie + Lack (ZKF)', categoryId: bodyRepairId, turnover: null, techMaturityScore: 5, website: '' }, // Network
                        { name: 'Repanet (Standox)', categoryId: bodyRepairId, turnover: null, techMaturityScore: 5, website: 'https://repanet.de' },
                        // --- Others / Online / Specific ---
                        { name: 'Autodoc SE', categoryId: wholesalerId, turnover: 1120000000, techMaturityScore: 5, website: 'https://autodoc.de' },
                        { name: 'Kfzteile24 GmbH', categoryId: wholesalerId, turnover: 200000000, techMaturityScore: 5, website: 'https://kfzteile24.de' },
                        { name: 'Motointegrator (Inter Cars)', categoryId: wholesalerId, turnover: null, techMaturityScore: 5, website: 'https://motointegrator.de' },
                        { name: 'Meyle AG', categoryId: brandOwnerId, turnover: 300000000, techMaturityScore: 6, website: 'https://meyle.com' },
                        { name: 'Schaeffler Automotive Aftermarket', categoryId: brandOwnerId, turnover: 1800000000, techMaturityScore: 9, website: 'https://aftermarket.schaeffler.de' },
                        { name: 'ZF Aftermarket', categoryId: brandOwnerId, turnover: 3000000000, techMaturityScore: 9, website: 'https://aftermarket.zf.com' },
                        { name: 'Continental Aftermarket', categoryId: brandOwnerId, turnover: 2200000000, techMaturityScore: 10, website: 'https://continental-aftermarket.com' },
                        { name: 'Hella GmbH & Co. KGaA (Aftermarket)', categoryId: brandOwnerId, turnover: 1500000000, techMaturityScore: 10, website: 'https://hella.com' },
                        { name: 'Mahle Aftermarket GmbH', categoryId: brandOwnerId, turnover: 900000000, techMaturityScore: 9, website: 'https://mahle-aftermarket.com' },
                        { name: 'Mann+Hummel (Mann-Filter)', categoryId: brandOwnerId, turnover: 1000000000, techMaturityScore: 5, website: 'https://mann-filter.com' }
                    ];
                    _i = 0, germanyCompanies_1 = germanyCompanies;
                    _a.label = 3;
                case 3:
                    if (!(_i < germanyCompanies_1.length)) return [3 /*break*/, 7];
                    company = germanyCompanies_1[_i];
                    return [4 /*yield*/, prisma.company.findFirst({
                            where: { name: company.name, countryId: de.id }
                        })];
                case 4:
                    existing = _a.sent();
                    if (!!existing) return [3 /*break*/, 6];
                    return [4 /*yield*/, prisma.company.create({
                            data: __assign(__assign({}, company), { countryId: de.id })
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
                    return [4 /*yield*/, setParent('Stahlgruber GmbH', 'LKQ Europe GmbH')];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, setParent('PV Automotive GmbH', 'LKQ Europe GmbH')];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, setParent('Meisterhaft', 'Stahlgruber GmbH')];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, setParent('AutoFit', 'Stahlgruber GmbH')];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, setParent('1a autoservice', 'CARAT Systementwicklungs GmbH')];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, setParent('Profiservice Werkstatt', 'Coparts Autoteile GmbH')];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, setParent('AutoPro', 'Coparts Autoteile GmbH')];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, setParent('Autofit', 'Select AG')];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, setParent('Junited Autoglas', 'Carglass GmbH')];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, setParent('Wow! Würth Online World GmbH', 'Würth Group (Automotive DE)')];
                case 17:
                    _a.sent();
                    console.log('Germany DE Seeding finished.');
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
