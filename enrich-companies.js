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
var labelCache = {};
function delay(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        });
    });
}
function searchWikidata(companyName) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://www.wikidata.org/w/api.php?action=wbsearchentities&search=".concat(encodeURIComponent(companyName), "&language=en&format=json");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (data.search && data.search.length > 0)
                        return [2 /*return*/, data.search[0]];
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error("Error searching Wikidata for ".concat(companyName, ":"), err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, null];
            }
        });
    });
}
function getEntityData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=".concat(id, "&languages=en&format=json");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    return [2 /*return*/, data.entities[id]];
                case 4:
                    err_2 = _a.sent();
                    console.error("Error fetching entity ".concat(id, ":"), err_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, null];
            }
        });
    });
}
function getLabel(id) {
    return __awaiter(this, void 0, void 0, function () {
        var url, res, data, label, err_3;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (labelCache[id])
                        return [2 /*return*/, labelCache[id]];
                    url = "https://www.wikidata.org/w/api.php?action=wbgetentities&ids=".concat(id, "&props=labels&languages=en&format=json");
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, delay(200)];
                case 2:
                    _d.sent(); // Small delay to avoid rate limiting
                    return [4 /*yield*/, fetch(url)];
                case 3:
                    res = _d.sent();
                    return [4 /*yield*/, res.json()];
                case 4:
                    data = _d.sent();
                    label = (_c = (_b = (_a = data.entities[id]) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b.en) === null || _c === void 0 ? void 0 : _c.value;
                    if (label) {
                        labelCache[id] = label;
                        return [2 /*return*/, label];
                    }
                    return [3 /*break*/, 6];
                case 5:
                    err_3 = _d.sent();
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, null];
            }
        });
    });
}
function parseAmount(claimObj) {
    var _a, _b, _c;
    if (claimObj && claimObj.length > 0) {
        var amountStr = (_c = (_b = (_a = claimObj[0].mainsnak) === null || _a === void 0 ? void 0 : _a.datavalue) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.amount;
        if (amountStr) {
            var val = parseFloat(amountStr.replace('+', ''));
            return isNaN(val) ? null : val;
        }
    }
    return null;
}
function parseString(claimObj) {
    var _a, _b;
    if (claimObj && claimObj.length > 0) {
        return ((_b = (_a = claimObj[0].mainsnak) === null || _a === void 0 ? void 0 : _a.datavalue) === null || _b === void 0 ? void 0 : _b.value) || null;
    }
    return null;
}
function resolveIdLabelArray(claimObj) {
    return __awaiter(this, void 0, void 0, function () {
        var labels, _i, claimObj_1, claim, id, label;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!claimObj || claimObj.length === 0)
                        return [2 /*return*/, null];
                    labels = [];
                    _i = 0, claimObj_1 = claimObj;
                    _d.label = 1;
                case 1:
                    if (!(_i < claimObj_1.length)) return [3 /*break*/, 4];
                    claim = claimObj_1[_i];
                    id = (_c = (_b = (_a = claim.mainsnak) === null || _a === void 0 ? void 0 : _a.datavalue) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.id;
                    if (!id) return [3 /*break*/, 3];
                    return [4 /*yield*/, getLabel(id)];
                case 2:
                    label = _d.sent();
                    if (label)
                        labels.push(label);
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, labels.length > 0 ? labels.join(', ') : null];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var countries, _i, countries_1, country, _a, _b, company, searchResult, entity, claims, website, logoFilename, logoUrl, tickerSymbol, employees, turnover, netIncome, totalAssets, foundedYear, timeStr, yearMatch, headquarters, ceo, founders, legalForm, industry;
        var _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, prisma.country.findMany({ include: { companies: true } })];
                case 1:
                    countries = _f.sent();
                    _i = 0, countries_1 = countries;
                    _f.label = 2;
                case 2:
                    if (!(_i < countries_1.length)) return [3 /*break*/, 18];
                    country = countries_1[_i];
                    console.log("\nProcessing country: ".concat(country.name));
                    _a = 0, _b = country.companies;
                    _f.label = 3;
                case 3:
                    if (!(_a < _b.length)) return [3 /*break*/, 17];
                    company = _b[_a];
                    console.log("- Searching for: ".concat(company.name));
                    return [4 /*yield*/, searchWikidata(company.name)];
                case 4:
                    searchResult = _f.sent();
                    return [4 /*yield*/, delay(1000)];
                case 5:
                    _f.sent();
                    if (!searchResult) return [3 /*break*/, 15];
                    console.log("  Wiki match: ".concat(searchResult.label, " (").concat(searchResult.id, ") - ").concat(searchResult.description || ''));
                    return [4 /*yield*/, getEntityData(searchResult.id)];
                case 6:
                    entity = _f.sent();
                    return [4 /*yield*/, delay(1000)];
                case 7:
                    _f.sent();
                    if (!(entity && entity.claims)) return [3 /*break*/, 14];
                    claims = entity.claims;
                    website = parseString(claims.P856);
                    logoFilename = parseString(claims.P154);
                    logoUrl = logoFilename ? "https://commons.wikimedia.org/wiki/Special:FilePath/".concat(encodeURIComponent(logoFilename)) : null;
                    tickerSymbol = parseString(claims.P249);
                    employees = parseAmount(claims.P1128);
                    turnover = parseAmount(claims.P2139);
                    netIncome = parseAmount(claims.P2295);
                    totalAssets = parseAmount(claims.P2403);
                    foundedYear = null;
                    if (claims.P571 && claims.P571.length > 0) {
                        timeStr = (_e = (_d = (_c = claims.P571[0].mainsnak) === null || _c === void 0 ? void 0 : _c.datavalue) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.time;
                        if (timeStr) {
                            yearMatch = timeStr.match(/\+?(-?\d{4})/);
                            if (yearMatch)
                                foundedYear = parseInt(yearMatch[1], 10);
                        }
                    }
                    return [4 /*yield*/, resolveIdLabelArray(claims.P159)];
                case 8:
                    headquarters = _f.sent();
                    return [4 /*yield*/, resolveIdLabelArray(claims.P169)];
                case 9:
                    ceo = _f.sent();
                    return [4 /*yield*/, resolveIdLabelArray(claims.P112)];
                case 10:
                    founders = _f.sent();
                    return [4 /*yield*/, resolveIdLabelArray(claims.P1454)];
                case 11:
                    legalForm = _f.sent();
                    return [4 /*yield*/, resolveIdLabelArray(claims.P452)];
                case 12:
                    industry = _f.sent();
                    console.log("  Updating DB for ".concat(company.name, "..."));
                    return [4 /*yield*/, prisma.company.update({
                            where: { id: company.id },
                            data: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (website && !company.website ? { website: website } : {})), (foundedYear && !company.foundedYear ? { foundedYear: foundedYear } : {})), (employees && !company.employees ? { employees: employees } : {})), (turnover && !company.turnover ? { turnover: turnover } : {})), (netIncome && !company.netIncome ? { netIncome: netIncome } : {})), (totalAssets && !company.totalAssets ? { totalAssets: totalAssets } : {})), (ceo && !company.ceo ? { ceo: ceo } : {})), (founders && !company.founders ? { founders: founders } : {})), (legalForm && !company.legalForm ? { legalForm: legalForm } : {})), (industry && !company.industry ? { industry: industry } : {})), (headquarters && !company.headquarters ? { headquarters: headquarters } : {})), (logoUrl && !company.logoUrl ? { logoUrl: logoUrl } : {})), (tickerSymbol && !company.tickerSymbol ? { tickerSymbol: tickerSymbol } : {})), (searchResult.description && !company.description ? { description: searchResult.description } : {}))
                        })];
                case 13:
                    _f.sent();
                    _f.label = 14;
                case 14: return [3 /*break*/, 16];
                case 15:
                    console.log("  No Wikidata match found for: ".concat(company.name));
                    _f.label = 16;
                case 16:
                    _a++;
                    return [3 /*break*/, 3];
                case 17:
                    _i++;
                    return [3 /*break*/, 2];
                case 18: return [2 /*return*/];
            }
        });
    });
}
main().catch(console.error).finally(function () { return prisma.$disconnect(); });
