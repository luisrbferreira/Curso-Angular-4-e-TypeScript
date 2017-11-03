/* --- Criar Carros --- */
let carroA = new Carro('Dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* --- Montar lista de carros da conecessionaria --- */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros)

/* -- Exibir lista de carros -- */
// console.log(conecessionaria.mostrarListaDeCarros())

/* -- Comprar carro -- */
let cliente = new Pessoa('Luis', 'Veloster')
// console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    console.log(Carro)

    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        /* -- Comprar -- */
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())