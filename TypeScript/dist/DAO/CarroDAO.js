"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("../model/Carro");
var CarroDAO = /** @class */ (function () {
    function CarroDAO() {
        this.nomeTabela = 'tbl_Carro';
    }
    CarroDAO.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    CarroDAO.prototype.atualizar = function (object) {
        console.log('Lógica de update');
        return true;
    };
    CarroDAO.prototype.remover = function (id) {
        console.log('Lógica de delete');
        return new Carro_1.default('', 0);
    };
    CarroDAO.prototype.selecionar = function (id) {
        console.log('Lógica de select');
        return new Carro_1.default('', 0);
    };
    CarroDAO.prototype.selecionarTodos = function () {
        console.log('Lógica de select all');
        return [new Carro_1.default('', 0)];
    };
    return CarroDAO;
}());
exports.default = CarroDAO;
