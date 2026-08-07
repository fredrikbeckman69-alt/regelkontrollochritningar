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
        var es, categories, getCatId, workshopChainId, wholesalerId, diagSpecId, bodyRepairId, brandOwnerId, esCompanies, _i, esCompanies_1, company, existing, setParent;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Seeding Spain (ES) Market Data...');
                    return [4 /*yield*/, prisma.country.findUnique({ where: { code: 'ES' } })];
                case 1:
                    es = _a.sent();
                    if (!es)
                        throw new Error("Country ES not found");
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
                    esCompanies = [
                        // --- Wholesalers & Brand Owners ---
                        { name: 'AD Parts', categoryId: wholesalerId, turnover: 800000000, techMaturityScore: 8, website: 'https://adparts.com' }, // Very strong in ES
                        { name: 'Serca (Grupo Serca Automoción)', categoryId: wholesalerId, turnover: 450000000, techMaturityScore: 7, website: 'https://serca.es' },
                        { name: 'CGA (Consorcio Grupo Automotivo)', categoryId: wholesalerId, turnover: 500000000, techMaturityScore: 7, website: 'https://grupocga.com' },
                        { name: 'Agerauto', categoryId: wholesalerId, turnover: null, techMaturityScore: 6, website: 'https://agerauto.es' },
                        { name: 'Cecauto', categoryId: wholesalerId, turnover: null, techMaturityScore: 6, website: 'https://cecauto.com' },
                        { name: 'Pro Service (Volkswagen Group Spain)', categoryId: wholesalerId, turnover: null, techMaturityScore: 8, website: 'https://proservice.vgsc.es' },
                        { name: 'Vemare (Grupo Vemare)', categoryId: wholesalerId, turnover: 120000000, techMaturityScore: 6, website: 'https://vemare.com' }, // AD Parts member
                        { name: 'Lausan', categoryId: wholesalerId, turnover: 110000000, techMaturityScore: 8, website: 'https://lausan.es' }, // AAG Member
                        // --- Workshop Chains & Fast Fit ---
                        { name: 'Norauto España', categoryId: workshopChainId, turnover: 200000000, techMaturityScore: 7, website: 'https://norauto.es' },
                        { name: 'Midas España', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://midas.es' },
                        { name: 'Feu Vert Ibérica', categoryId: workshopChainId, turnover: 150000000, techMaturityScore: 7, website: 'https://feuvert.es' },
                        { name: 'Aurgi', categoryId: workshopChainId, turnover: 70000000, techMaturityScore: 5, website: 'https://aurgi.com' },
                        { name: 'Confortauto Hankook Masters', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://confortauto.com' },
                        { name: 'EuroTaller', categoryId: workshopChainId, turnover: null, techMaturityScore: 7, website: 'https://eurotaller.com' }, // Groupauto
                        { name: 'Bosch Car Service ES', categoryId: workshopChainId, turnover: null, techMaturityScore: 10, website: 'https://boschcarservice.com/es/es' },
                        { name: 'Rodi Motor Services', categoryId: workshopChainId, turnover: 200000000, techMaturityScore: 6, website: 'https://rodi.es' },
                        { name: 'SPG Talleres', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://spgtalleres.com' }, // Serca
                        { name: 'Talleres Profesional Plus', categoryId: workshopChainId, turnover: null, techMaturityScore: 6, website: 'https://profesionalplus.es' }, // Serca
                        // --- Diagnostic Specialists / Niche ---
                        { name: 'Cojali S.L. (Jaltest)', categoryId: diagSpecId, turnover: 80000000, techMaturityScore: 10, website: 'https://cojali.com' }, // Major multibrand diag, especially CV
                        { name: 'Bertón S.A.', categoryId: diagSpecId, turnover: null, techMaturityScore: 8, website: 'https://berton.es' }, // Spanish diag manufacturer
                        { name: 'Autel Iberia', categoryId: diagSpecId, turnover: 15000000, techMaturityScore: 9, website: 'https://auteliberia.es' },
                        { name: 'Bertontec (Asistencia)', categoryId: diagSpecId, turnover: null, techMaturityScore: 8, website: '' }, // Support arm
                        { name: 'Eina (Eurekar Auto)', categoryId: diagSpecId, turnover: null, techMaturityScore: 9, website: 'https://eina.com' }, // Technical info/Call center
                        { name: 'Vagindauto', categoryId: diagSpecId, turnover: null, techMaturityScore: 8, website: 'https://vagindauto.com' }, // Technical training & diag
                        { name: 'Miac', categoryId: diagSpecId, turnover: 8000000, techMaturityScore: 8, website: 'https://miac.es' }, // Diagnostic equipment dist
                        // --- Body / Glass / Tires ---
                        { name: 'Carglass España', categoryId: bodyRepairId, turnover: 180000000, techMaturityScore: 8, website: 'https://carglass.es' },
                        { name: 'Glassdrive España', categoryId: bodyRepairId, turnover: null, techMaturityScore: 7, website: 'https://glassdrive.es' }, // Saint-Gobain
                        { name: 'Ralarsa', categoryId: bodyRepairId, turnover: 50000000, techMaturityScore: 6, website: 'https://ralarsa.com' }, // Safelite/Belron
                        { name: 'CertifiedFirst España', categoryId: bodyRepairId, turnover: null, techMaturityScore: 6, website: 'https://certifiedfirst.es' }, // PPG
                        { name: 'Vialider', categoryId: workshopChainId, turnover: null, techMaturityScore: 5, website: 'https://vialider.es' }, // Michelin
                        { name: 'Vulco', categoryId: workshopChainId, turnover: null, techMaturityScore: 5, website: 'https://vulco.es' }, // Goodyear
                        { name: 'TallerXXI', categoryId: workshopChainId, turnover: null, techMaturityScore: 5, website: 'https://tallerxxi.com' }, // CGA
                        // --- Others / Specific ---
                        { name: 'Oscaro Ibérica', categoryId: wholesalerId, turnover: null, techMaturityScore: 4, website: 'https://oscaro.es' },
                        { name: 'Endado', categoryId: wholesalerId, turnover: 12000000, techMaturityScore: 4, website: 'https://endado.com' },
                        { name: 'Faes (Fabricación de Automóviles Españoles)', categoryId: brandOwnerId, turnover: 30000000, techMaturityScore: 6, website: 'https://faes.es' },
                        { name: 'Icer Brakes', categoryId: brandOwnerId, turnover: 60000000, techMaturityScore: 5, website: 'https://icerbrakes.com' },
                        { name: 'Deter (Grupo)', categoryId: wholesalerId, turnover: null, techMaturityScore: 5, website: '' }
                    ];
                    _i = 0, esCompanies_1 = esCompanies;
                    _a.label = 3;
                case 3:
                    if (!(_i < esCompanies_1.length)) return [3 /*break*/, 7];
                    company = esCompanies_1[_i];
                    return [4 /*yield*/, prisma.company.findFirst({
                            where: { name: company.name, countryId: es.id }
                        })];
                case 4:
                    existing = _a.sent();
                    if (!!existing) return [3 /*break*/, 6];
                    return [4 /*yield*/, prisma.company.create({
                            data: __assign(__assign({}, company), { countryId: es.id })
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
                    return [4 /*yield*/, setParent('Vemare (Grupo Vemare)', 'AD Parts')];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, setParent('SPG Talleres', 'Serca (Grupo Serca Automoción)')];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, setParent('Talleres Profesional Plus', 'Serca (Grupo Serca Automoción)')];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, setParent('TallerXXI', 'CGA (Consorcio Grupo Automotivo)')];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, setParent('Bertontec (Asistencia)', 'Bertón S.A.')];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, setParent('Ralarsa', 'Carglass España')];
                case 13:
                    _a.sent();
                    console.log('Spain ES Seeding finished.');
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
