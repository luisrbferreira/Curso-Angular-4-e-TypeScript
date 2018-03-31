import DAOInterface from '../interface/DaoInterface'
import Carro from '../model/Moto'
import Veiculo from '../model/Veiculo';

export default class MotoDAO implements DAOInterface {
    
    nomeTabela: string = 'tbl_Moto'
    
    inserir(object : Veiculo): boolean {
        console.log('Lógica de insert')

        return true
    }

    atualizar(object: Veiculo): boolean {
        console.log('Lógica de update')

        return true
    }

    remover(id: number): Veiculo {
        console.log('Lógica de delete')

        return new Veiculo()
    }

    selecionar(id: number): Veiculo {
        console.log('Lógica de select')

        return new Veiculo()
    }

    selecionarTodos(): [any] {
        console.log('Lógica de select all')

        return [new Veiculo()]
    }
}