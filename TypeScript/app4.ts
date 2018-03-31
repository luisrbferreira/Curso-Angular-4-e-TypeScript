import ConcessionariaDAO from './dao/ConcessionariaDAO'
import Concessionaria from './model/Concessionaria'
import PessoaDAO from './DAO/PessoaDAO';
import Pessoa from './model/Pessoa';
import CarroDAO from './dao/CarroDAO';
import Carro from './model/Carro';
import MotoDAO from './dao/MotoDAO';
import Moto from './model/Moto';

// Concessionária
let concessionariaDAO: ConcessionariaDAO = new ConcessionariaDAO()
let concessionaria = new Concessionaria('', [])

concessionariaDAO.inserir(concessionaria)

// Pessoa
let pessoaDAO: PessoaDAO = new PessoaDAO()
let pessoa = new Pessoa('', '')

pessoaDAO.atualizar(pessoa)

// Carro
let carroDAO: CarroDAO = new CarroDAO()
let carro = new Carro('', 0)

carroDAO.inserir(carro)

// Moto
let motoDAO: MotoDAO = new MotoDAO()
let moto = new Moto()

motoDAO.inserir(moto)