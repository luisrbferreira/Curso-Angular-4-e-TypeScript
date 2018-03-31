import DAOInterface from '../interface/DaoInterface'
import Concessionaria from '../model/Concessionaria'

export default class ConcessionariaDAO implements DAOInterface {
    
    nomeTabela: string = 'tbl_Concessionaria'

    inserir(object : Concessionaria): boolean {
        console.log('Lógica de insert')

        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('Lógica de update')

        return true
    }

    remover(id: number): Concessionaria {
        console.log('Lógica de delete')

        return new Concessionaria ('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log('Lógica de select')

        return new Concessionaria('', [])
    }

    selecionarTodos(): [any] {
        console.log('Lógica de select all')

        return [new Concessionaria('', [])]
    }
}