"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("../model/Pessoa");
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'tbl_Pessoa';
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    PessoaDAO.prototype.atualizar = function (object) {
        console.log('Lógica de update');
        return true;
    };
    PessoaDAO.prototype.remover = function (id) {
        console.log('Lógica de delete');
        return new Pessoa_1.default('', '');
    };
    PessoaDAO.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return new Pessoa_1.default('', '');
    };
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log('Lógica de select all');
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDAO;
}());
exports.default = PessoaDAO;
