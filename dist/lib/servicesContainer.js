"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var awilix_1 = require("awilix");
var drinks_company_data_repositories_1 = require("drinks-company-data-repositories");
var drinks_company_business_services_1 = require("drinks-company-business-services");
var container = awilix_1.createContainer({
    injectionMode: awilix_1.InjectionMode.PROXY,
});
container.register({
    drinksDataRepository: awilix_1.asClass(drinks_company_data_repositories_1.DrinksDataRepository),
    drinksBusinessService: awilix_1.asClass(drinks_company_business_services_1.DrinksBusinessService),
});
exports.default = container;
