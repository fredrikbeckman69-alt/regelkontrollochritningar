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
        var pl, categories, getCatId, workshopChainId, wholesalerId, diagSpecId, bodyRepairId, brandOwnerId, plCompanies, _i, plCompanies_1, company, existing, setParent;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Seeding Poland (PL) Market Data...');
                    return [4 /*yield*/, prisma.country.findUnique({ where: { code: 'PL' } })];
                case 1:
                    pl = _a.sent();
                    if (!pl)
                        throw new Error("Country PL not found");
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
                    plCompanies = [
                        // --- Wholesalers & Brand Owners ---
                        { name: 'Inter Cars S.A.', categoryId: wholesalerId, turnover: 4000000000, techMaturityScore: 9, website: 'https://intercars.eu' }, // Largest in CEE
                        { name: 'Moto-Profil', categoryId: wholesalerId, turnover: 500000000, techMaturityScore: 8, website: 'https://moto-profil.pl' },
                        { name: 'Auto Partner SA', categoryId: wholesalerId, turnover: 800000000, techMaturityScore: 8, website: 'https://autopartner.com' },
                        { name: 'Gordon (Hurtownia Motoryzacyjna)', categoryId: wholesalerId, turnover: 250000000, techMaturityScore: 6, website: 'https://gordon.com.pl' },
                        { name: 'Elit Polska', categoryId: wholesalerId, turnover: null, techMaturityScore: 7, website: 'https://elitpolska.pl' }, // LKQ
                        { name: 'Groupauto Polska', categoryId: wholesalerId, turnover: null, techMaturityScore: 7, website: 'https://groupautopolska.pl' },
                        { name: 'Hart (Hurtownia)', categoryId: wholesalerId, turnover: 200000000, techMaturityScore: 6, website: 'https://hartphp.com.pl' },
                        // --- Workshop Chains & Fast Fit ---
                        { name: 'Q-Service Castrol', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://qservicecastrol.eu' }, // Inter Cars network
                        { name: 'ProfiAuto Serwis', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://profiauto.pl' }, // Moto-Profil network
                        { name: 'Bosch Car Service PL', categoryId: workshopChainId, turnover: null, techMaturityScore: 9, website: 'https://boschcarservice.com/pl/pl' },
                        { name: 'Opony Express', categoryId: workshopChainId, turnover: null, techMaturityScore: 5, website: 'https://oponyexpress.pl' },
                        { name: 'Premio Opony-Autoserwis PL', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://premio.pl' },
                        { name: 'Euromaster Polska', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://euromaster.pl' },
                        { name: 'AutoCrew', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://autocrew.pl' }, // Bosch
                        { name: 'Perfect Service', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: '' },
                        { name: 'MaXserwis', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://maxserwis.com.pl' }, // Auto Partner network
                        // --- Diagnostic Specialists / Niche ---
                        { name: 'Precyzja-Technik', categoryId: diagSpecId, turnover: null, techMaturityScore: 9, website: 'https://precyzja.pl' }, // Wheel alignment, diagnostics
                        { name: 'WSOP', categoryId: diagSpecId, turnover: 25000000, techMaturityScore: 8, website: 'https://wsop.pl' }, // Diagnostic equipment eqpt
                        { name: 'Unimetal', categoryId: diagSpecId, turnover: 15000000, techMaturityScore: 8, website: 'https://unimetal.pl' }, // Diagnostic lanes
                        { name: 'CDIF/3 (Axes System)', categoryId: diagSpecId, turnover: null, techMaturityScore: 9, website: 'https://cdif3.com' }, // Polish diagnostic tool
                        { name: 'Fomar Friction', categoryId: brandOwnerId, turnover: 30000000, techMaturityScore: 5, website: 'https://fomar.com.pl' }, // Local manufacturer
                        // --- Body / Glass / Tires ---
                        { name: 'Carglass Polska', categoryId: bodyRepairId, turnover: null, techMaturityScore: 7, website: 'https://carglass.pl' },
                        { name: 'Pilkington Automotive Poland', categoryId: bodyRepairId, turnover: 150000000, techMaturityScore: 8, website: 'https://pilkington.com/pl' },
                        { name: 'NordGlass (AGR)', categoryId: bodyRepairId, turnover: 80000000, techMaturityScore: 7, website: 'https://nordglass.pl' },
                        { name: 'Parys (Car Care)', categoryId: brandOwnerId, turnover: 25000000, techMaturityScore: 3, website: 'https://parys.pl' },
                        // --- Others / Specific ---
                        { name: 'Motointegrator PL', categoryId: wholesalerId, turnover: null, techMaturityScore: 5, website: 'https://motointegrator.com/pl' }, // Inter Cars
                        { name: 'iParts.pl', categoryId: wholesalerId, turnover: 45000000, techMaturityScore: 5, website: 'https://iparts.pl' },
                        { name: 'Ucando', categoryId: wholesalerId, turnover: null, techMaturityScore: 4, website: 'https://ucando.pl' }, // B2C
                        { name: 'Sędziszów (PZL)', categoryId: brandOwnerId, turnover: 20000000, techMaturityScore: 5, website: 'https://pzlsedziszow.pl' }, // Filters
                        { name: 'Lumag (Breck)', categoryId: brandOwnerId, turnover: 45000000, techMaturityScore: 6, website: 'https://lumag.pl' } // Brakes
                    ];
                    _i = 0, plCompanies_1 = plCompanies;
                    _a.label = 3;
                case 3:
                    if (!(_i < plCompanies_1.length)) return [3 /*break*/, 7];
                    company = plCompanies_1[_i];
                    return [4 /*yield*/, prisma.company.findFirst({
                            where: { name: company.name, countryId: pl.id }
                        })];
                case 4:
                    existing = _a.sent();
                    if (!!existing) return [3 /*break*/, 6];
                    return [4 /*yield*/, prisma.company.create({
                            data: __assign(__assign({}, company), { countryId: pl.id })
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
                    return [4 /*yield*/, setParent('Q-Service Castrol', 'Inter Cars S.A.')];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, setParent('Motointegrator PL', 'Inter Cars S.A.')];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, setParent('ProfiAuto Serwis', 'Moto-Profil')];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, setParent('MaXserwis', 'Auto Partner SA')];
                case 11:
                    _a.sent();
                    console.log('Poland PL Seeding finished.');
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
