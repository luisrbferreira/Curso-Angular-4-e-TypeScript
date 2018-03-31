"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = require("../model/Veiculo");
var MotoDAO = /** @class */ (function () {
    function MotoDAO() {
        this.nomeTabela = 'tbl_Moto';
    }
    MotoDAO.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    MotoDAO.prototype.atualizar = function (object) {
        console.log('Lógica de update');
        return true;
    };
    MotoDAO.prototype.remover = function (id) {
        console.log('Lógica de delete');
        return new Veiculo_1.default();
    };
    MotoDAO.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return new Veiculo_1.default();
    };
    MotoDAO.prototype.selecionarTodos = function () {
        console.log('Lógica de select all');
        return [new Veiculo_1.default()];
    };
    return MotoDAO;
}());
exports.default = MotoDAO;
