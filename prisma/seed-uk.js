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
        var uk, categories, getCatId, workshopChainId, wholesalerId, diagSpecId, bodyRepairId, brandOwnerId, ukCompanies, _i, ukCompanies_1, company, existing, setParent;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Seeding United Kingdom (UK) Market Data...');
                    return [4 /*yield*/, prisma.country.findUnique({ where: { code: 'UK' } })];
                case 1:
                    uk = _a.sent();
                    if (!uk)
                        throw new Error("Country UK not found");
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
                    ukCompanies = [
                        // --- Wholesalers & Brand Owners ---
                        { name: 'LKQ Euro Car Parts', categoryId: wholesalerId, turnover: 1200000000, techMaturityScore: 9, website: 'https://eurocarparts.com' },
                        { name: 'Alliance Automotive Group UK (AAG)', categoryId: wholesalerId, turnover: 1000000000, techMaturityScore: 8, website: 'https://allianceautomotive.co.uk' }, // GPC
                        { name: 'Motor Parts Direct (MPD)', categoryId: wholesalerId, turnover: 150000000, techMaturityScore: 7, website: 'https://mpdonline.co.uk' },
                        { name: 'GSF Car Parts', categoryId: wholesalerId, turnover: 250000000, techMaturityScore: 7, website: 'https://gsfcarparts.com' },
                        { name: 'The Parts Alliance', categoryId: wholesalerId, turnover: null, techMaturityScore: 7, website: 'https://thepartsalliance.com' }, // Now mostly under GSF
                        { name: '丁TMD Friction UK Ltd', categoryId: brandOwnerId, turnover: null, techMaturityScore: 6, website: 'https://tmdfriction.com' },
                        // --- Workshop Chains & Fast Fit ---
                        { name: 'Kwik Fit', categoryId: workshopChainId, turnover: 500000000, techMaturityScore: 7, website: 'https://kwik-fit.com' }, // Itochu
                        { name: 'Halfords Autocentres', categoryId: workshopChainId, turnover: 300000000, techMaturityScore: 8, website: 'https://halfords.com' },
                        { name: 'National Tyres and Autocare', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://national.co.uk' }, // Owned by Halfords
                        { name: 'Arnold Clark Autoparts', categoryId: workshopChainId, turnover: 100000000, techMaturityScore: 7, website: 'https://arnoldclark.com' },
                        { name: 'HiQ Tyres & Autocare', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://hiqonline.co.uk' }, // Goodyear
                        { name: 'Protyre (Micheldever)', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://protyre.co.uk' },
                        { name: 'F1 Autocentres', categoryId: workshopChainId, turnover: 150000000, techMaturityScore: 7, website: 'https://f1autocentres.co.uk' },
                        { name: 'Mr Clutch Autocentres', categoryId: workshopChainId, turnover: 30000000, techMaturityScore: 5, website: 'https://mrclutch.com' },
                        { name: 'In ' + 'n' + ' Out Autocentres', categoryId: workshopChainId, turnover: 25000000, techMaturityScore: 6, website: 'https://in-n-out.co.uk' },
                        { name: 'Servicesure Autocentres', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://servicesureautocentres.com' }, // AAG Network
                        { name: 'AutoCare', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://autocaregarages.co.uk' }, // GROUPAUTO Network
                        // --- Diagnostic Specialists / Niche ---
                        { name: 'Snap-on Diagnostics UK', categoryId: diagSpecId, turnover: null, techMaturityScore: 10, website: 'https://diagnostics.snapon.co.uk' },
                        { name: 'Delphi Technologies Aftermarket', categoryId: diagSpecId, turnover: null, techMaturityScore: 10, website: 'https://delphiautoparts.com' }, // BorgWarner
                        { name: 'Pico Technology (PicoScope)', categoryId: diagSpecId, turnover: 30000000, techMaturityScore: 10, website: 'https://picotech.com' },
                        { name: 'Launch UK', categoryId: diagSpecId, turnover: 15000000, techMaturityScore: 8, website: 'https://launchtech.co.uk' },
                        { name: 'Maverick Diagnostics', categoryId: diagSpecId, turnover: 5000000, techMaturityScore: 9, website: 'https://maverickdiagnostics.com' },
                        { name: 'Autel UK', categoryId: diagSpecId, turnover: 20000000, techMaturityScore: 9, website: 'https://autel.uk' },
                        { name: 'Sealey Tools', categoryId: brandOwnerId, turnover: 100000000, techMaturityScore: 6, website: 'https://sealey.co.uk' },
                        { name: 'Draper Tools', categoryId: brandOwnerId, turnover: 70000000, techMaturityScore: 5, website: 'https://drapertools.com' },
                        // --- Body / Glass / Tires ---
                        { name: 'Autoglass (Belron)', categoryId: bodyRepairId, turnover: 200000000, techMaturityScore: 8, website: 'https://autoglass.co.uk' }, // Needs ADAS
                        { name: 'Steer Automotive Group', categoryId: bodyRepairId, turnover: 180000000, techMaturityScore: 7, website: 'https://steerautomotive.com' },
                        { name: 'Fix Auto UK', categoryId: bodyRepairId, turnover: null, techMaturityScore: 6, website: 'https://fixauto.com/uk' }, // Network
                        { name: 'National Windscreens', categoryId: bodyRepairId, turnover: 100000000, techMaturityScore: 7, website: 'https://nationalwindscreens.co.uk' },
                        { name: 'Activate Accident Repair', categoryId: bodyRepairId, turnover: 50000000, techMaturityScore: 7, website: 'https://activateaccidentrepair.com' },
                        // --- Others / Specific ---
                        { name: 'Ring Automotive', categoryId: brandOwnerId, turnover: 40000000, techMaturityScore: 7, website: 'https://ringautomotive.com' },
                        { name: 'Comma Oil', categoryId: brandOwnerId, turnover: null, techMaturityScore: 3, website: 'https://commaoil.com' },
                        { name: 'First Line Ltd', categoryId: brandOwnerId, turnover: 50000000, techMaturityScore: 4, website: 'https://firstlineltd.com' },
                        { name: 'BM Catalysts', categoryId: brandOwnerId, turnover: 30000000, techMaturityScore: 5, website: 'https://bmcatalysts.co.uk' },
                        { name: 'Platinum International', categoryId: wholesalerId, turnover: 120000000, techMaturityScore: 4, website: 'https://platinuminternational.com' }, // Batteries/Lubes
                        { name: 'Sankey & Co', categoryId: wholesalerId, turnover: null, techMaturityScore: 4, website: '' },
                        { name: 'Andrew Page', categoryId: wholesalerId, turnover: null, techMaturityScore: 6, website: '' } // Part of LKQ
                    ];
                    _i = 0, ukCompanies_1 = ukCompanies;
                    _a.label = 3;
                case 3:
                    if (!(_i < ukCompanies_1.length)) return [3 /*break*/, 7];
                    company = ukCompanies_1[_i];
                    return [4 /*yield*/, prisma.company.findFirst({
                            where: { name: company.name, countryId: uk.id }
                        })];
                case 4:
                    existing = _a.sent();
                    if (!!existing) return [3 /*break*/, 6];
                    return [4 /*yield*/, prisma.company.create({
                            data: __assign(__assign({}, company), { countryId: uk.id })
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
                    return [4 /*yield*/, setParent('Andrew Page', 'LKQ Euro Car Parts')];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, setParent('The Parts Alliance', 'GSF Car Parts')];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, setParent('National Tyres and Autocare', 'Halfords Autocentres')];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, setParent('Servicesure Autocentres', 'Alliance Automotive Group UK (AAG)')];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, setParent('AutoCare', 'Alliance Automotive Group UK (AAG)')];
                case 12:
                    _a.sent();
                    console.log('United Kingdom UK Seeding finished.');
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
