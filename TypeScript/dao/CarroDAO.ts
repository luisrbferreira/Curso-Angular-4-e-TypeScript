import DAOInterface from '../interface/DaoInterface'
import Carro from '../model/Carro'

export default class CarroDAO implements DAOInterface {
    
    nomeTabela: string = 'tbl_Carro'
    
    inserir(object : Carro): boolean {
        console.log('Lógica de insert')

        return true
    }

    atualizar(object: Carro): boolean {
        console.log('Lógica de update')

        return true
    }

    remover(id: number): Carro {
        console.log('Lógica de delete')

        return new Carro ('', 0)
    }

    selecionar(id: number): Carro {
        console.log('Lógica de select')

        return new Carro('', 0)
    }

    selecionarTodos(): [any] {
        console.log('Lógica de select all')

        return [new Carro('', 0)]
    }
}