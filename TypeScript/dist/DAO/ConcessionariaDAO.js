"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("../model/Concessionaria");
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = 'tbl_Concessionaria';
    }
    ConcessionariaDAO.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log('Lógica de update');
        return true;
    };
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log('Lógica de delete');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log('Lógica de select all');
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDAO;
}());
exports.default = ConcessionariaDAO;
