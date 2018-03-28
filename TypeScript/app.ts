let ola = (nome: string, sobrenome: string) => {
    console.log("Olá " + nome + " " + sobrenome);
}

ola("Luis", "Ferreira");

//Inferência de tipos

let mensagem: string = "Seja bem vindo!!!"

let temporadasFriends: number = 10

let estudandoAngular: boolean = true

let listaDeFrutas: Array<string> = ['Uva', 'Banana', 'Abacaxi']

//Mesma coisa de cima
let listaDeFrutas2: string[] = ['Uva', 'Banana', 'Abacaxi']

let notasDasProvas: Array<number> = [7.5, 8, 9]