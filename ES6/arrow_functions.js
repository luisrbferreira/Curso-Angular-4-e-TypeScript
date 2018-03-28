//ES5
// var dobroDoValor = function(numero) {
//     return numero * 2;
// }

// console.log(dobroDoValor(7));

//ES6 - Arrow Functions
var dobroDoValor = (numero) => {
    return numero * 2;
}

//Mesma função de cima
var dobroDoValor = numero => numero * 2;

//Se não tiver parâmetros, é necessário os ()
var dobroDoValor = () => {
    return 2 * 2;
}

//Se tiver múltiplos parâmetros, é necessário os ()
var dobroDoValor = (numero1, numero2) => {
    return numero1 * numero2;
}

console.log(dobroDoValor(7));