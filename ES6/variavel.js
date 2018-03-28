var serie = 'Friends' //Escopo global

if (true) {
    serie = 'Game of Thrones' //Alterando valor da variavel global
}

console.log(serie);

//O var neste caso sofre a elevação e a variável sai do escopo do bloco e assume o escopo global

var serie = 'Friends' //Escopo global

if (true) {
    var serie2 = 'Game of Thrones'
}

console.log(serie2); //Imprime Game of thrones por conta da elevação

//O let assume o escopo de onde estiver

var serie = 'Friends' //Escopo global

if (true) {
    let serie2 = 'Game of Thrones'
}

console.log(serie2); //Vai dar erro pois a variavel existe apenas no escopo do bloco

var serie = 'Friends' //Escopo global

if (true) {
    let serie2 = 'Game of Thrones'
    console.log(serie2); //Imprime Game of thrones pois está no contexto do bloco
}

var serie = 'Friends' //Escopo global

if (true) {
    let serie = 'Game of Thrones' //Escopo do bloco
    console.log(serie); //Imprime Game of Thrones
}

console.log(serie); //Imprime Friends

const serie = 'Friends' //Constante
serie = 'Game of Thrones' //Dá erro pois o valor não pode ser alterado