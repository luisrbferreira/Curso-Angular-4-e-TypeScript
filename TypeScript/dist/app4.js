"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./model/Concessionaria");
var DAO_1 = require("./DAO");
// // Concessionária
// let concessionariaDAO: ConcessionariaDAO = new ConcessionariaDAO()
var concessionaria = new Concessionaria_1.default('', []);
// concessionariaDAO.inserir(concessionaria)
// // Pessoa
// let pessoaDAO: PessoaDAO = new PessoaDAO()
// let pessoa = new Pessoa('', '')
// pessoaDAO.atualizar(pessoa)
// // Carro
// let carroDAO: CarroDAO = new CarroDAO()
// let carro = new Carro('', 0)
// carroDAO.inserir(carro)
// // Moto
// let motoDAO: MotoDAO = new MotoDAO()
// let moto = new Moto()
// motoDAO.inserir(moto)
var dao = new DAO_1.default();
dao.inserir(concessionaria);
