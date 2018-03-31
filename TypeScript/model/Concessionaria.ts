import Carro from './Carro'
import { ConcessionariaInterface } from './ConcessionariaInterface'

export default class Concessionaria implements ConcessionariaInterface {
    
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }

    public fornecerHorarioFuncionamento(): string {
        return 'De Segunda a Sexta das 08:00h às 18:00h e Sabado das 08:00h às 12:00h'
    }
}