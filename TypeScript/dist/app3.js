"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var Concessionaria_1 = require("./Concessionaria");
var moto = new Moto_1.default();
moto.acelerar();
moto.acelerar();
var carro = new Carro_1.default('Veloster', 3);
carro.acelerar();
carro.acelerar();
var concessionaria = new Concessionaria_1.default('', []);
console.log(moto);
console.log(carro);
console.log(concessionaria.fornecerHorarioFuncionamento());
