import DAOInterface from "./interface/DAOInterface";

export default class DAO<T> implements DAOInterface<T> {
    nomeTabela: string = ''
    
    inserir(object : T): boolean {
        console.log('Lógica de insert')

        return true
    }

    atualizar(object: T): boolean {
        console.log('Lógica de update')

        return true
    }

    remover(id: number): T {
        console.log('Lógica de delete')

        return Object()
    }

    selecionar(id: number): T {
        console.log('Lógica de select')

        return Object()
    }

    selecionarTodos(): [T] {
        console.log('Lógica de select all')

        return [Object()]
    }
} 