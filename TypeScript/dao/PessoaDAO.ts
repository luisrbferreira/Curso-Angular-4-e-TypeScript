import DAOInterface from '../interface/DaoInterface'
import Pessoa from '../model/Pessoa'

export default class PessoaDAO implements DAOInterface {
    
    nomeTabela: string = 'tbl_Pessoa'
    
    inserir(object : Pessoa): boolean {
        console.log('Lógica de insert')

        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('Lógica de update')

        return true
    }

    remover(id: number): Pessoa {
        console.log('Lógica de delete')

        return new Pessoa ('', '')
    }

    selecionar(id: number): Pessoa {
        console.log('Lógica de select')

        return new Pessoa('', '')
    }

    selecionarTodos(): [any] {
        console.log('Lógica de select all')

        return [new Pessoa('', '')]
    }
}