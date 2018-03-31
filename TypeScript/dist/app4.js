"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDAO_1 = require("./dao/ConcessionariaDAO");
var Concessionaria_1 = require("./model/Concessionaria");
var PessoaDAO_1 = require("./DAO/PessoaDAO");
var Pessoa_1 = require("./model/Pessoa");
var CarroDAO_1 = require("./dao/CarroDAO");
var Carro_1 = require("./model/Carro");
var MotoDAO_1 = require("./dao/MotoDAO");
var Moto_1 = require("./model/Moto");
// Concessionária
var concessionariaDAO = new ConcessionariaDAO_1.default();
var concessionaria = new Concessionaria_1.default('', []);
concessionariaDAO.inserir(concessionaria);
// Pessoa
var pessoaDAO = new PessoaDAO_1.default();
var pessoa = new Pessoa_1.default('', '');
pessoaDAO.atualizar(pessoa);
// Carro
var carroDAO = new CarroDAO_1.default();
var carro = new Carro_1.default('', 0);
carroDAO.inserir(carro);
// Moto
var motoDAO = new MotoDAO_1.default();
var moto = new Moto_1.default();
motoDAO.inserir(moto);
