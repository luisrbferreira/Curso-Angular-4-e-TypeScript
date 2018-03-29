import Carro from './Carro' //Importando outra variável e dando um apelido pra ela
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

// Criar carros
let carroA = new Carro ('Veloster', 3)
let carroB = new Carro ('Dodge', 4)
let carroC = new Carro ('Cerato', 4)

// Lista de carros da concessionaria
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Luiz Viana Filho', listaDeCarros)

//  Exibir lista de carros
console.log(concessionaria.mostrarListaDeCarros())

// Comprar carro
let cliente = new Pessoa('Luis', 'Veloster')

console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    console.log(carro)

    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro)
    }
});