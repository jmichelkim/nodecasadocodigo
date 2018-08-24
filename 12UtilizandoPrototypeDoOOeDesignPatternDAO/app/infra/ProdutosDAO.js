// Acesso ao banco já em OO porém faltando adicionar mais estrutura de OO

module.exports = function () {

    return function(connection){

        this.lista = function (callback) {
            connection.query('select * from livros', callback);
        }
        return this;
    }
}

// Ajustando a classe com a estrutura de OO
// alteramos o nome deste arquivo de produtosBanco para ProdutosDAO (Desingn Pattern DAO)
// ProdutosDAO com letra maiúscula para deixar definido que é uma função.

function ProdutosDAO(connection){ // função produtora, serve como o construtor da classe
    this._connection = connection; // conexão guardada para ser utilizada no prototype.lista
}

ProdutosDAO.prototype.lista = function(callback) { 
    this._connection.query('select * from livros', callback); // Como aqui já chamo o método query,  como o ssitema entende a query?
}

module.exports = function(){
    return ProdutosDAO;
}

