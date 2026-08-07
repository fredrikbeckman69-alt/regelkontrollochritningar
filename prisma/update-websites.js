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
var WEBSITES_MAP = {
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
};
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, _b, name_1, website;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _i = 0, _a = Object.entries(WEBSITES_MAP);
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    _b = _a[_i], name_1 = _b[0], website = _b[1];
                    return [4 /*yield*/, prisma.company.updateMany({
                            where: { name: name_1 },
                            data: { website: website }
                        })];
                case 2:
                    _c.sent();
                    console.log("Updated ".concat(name_1, " with ").concat(website));
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
    .catch(console.error)
    .finally(function () { return prisma.$disconnect(); });
