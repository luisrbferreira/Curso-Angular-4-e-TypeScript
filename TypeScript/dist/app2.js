"use strict";
/* --- Criar Carros --- */
var carroA = new Carro('Dodge Journey', 4);
var carroB = new Carro('Veloster', 3);
var carroC = new Carro('Cerato', 4);
/* --- Montar lista de carros da conecessionaria --- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);
/* -- Exibir lista de carros -- */
// console.log(conecessionaria.mostrarListaDeCarros())
/* -- Comprar carro -- */
var cliente = new Pessoa('Luis', 'Veloster');
// console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    console.log(Carro);
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        /* -- Comprar -- */
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());