"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Planner_1 = require("./persons/Planner");
var SoftwareEnginer_1 = require("./persons/SoftwareEnginer");
var PersonStore_1 = require("./persons/PersonStore");
var thisPerson1 = new Planner_1.default(1, "호세", 26);
var thisPerson2 = new Planner_1.default(2, "민준", 25);
var thisPerson3 = new SoftwareEnginer_1.default(3, "유선", 32);
var thisPerson4 = new SoftwareEnginer_1.default(4, "남순", 23);
var personStore = new PersonStore_1.default(new Map);
personStore.pushPerson(thisPerson1);
personStore.pushPerson(thisPerson2);
personStore.pushPerson(thisPerson3);
personStore.pushPerson(thisPerson4);
console.log(personStore.showAllInfo());
