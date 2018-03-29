"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro"); //Importando outra variável e dando um apelido pra ela
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
// Criar carros
var carroA = new Carro_1.default('Veloster', 3);
var carroB = new Carro_1.default('Dodge', 4);
var carroC = new Carro_1.default('Cerato', 4);
// Lista de carros da concessionaria
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av Luiz Viana Filho', listaDeCarros);
//  Exibir lista de carros
console.log(concessionaria.mostrarListaDeCarros());
// Comprar carro
var cliente = new Pessoa_1.default('Luis', 'Veloster');
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    console.log(carro);
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
