// Ajustando a classe com a estrutura de OO
// alteramos o nome deste arquivo de produtosBanco para ProdutosDAO (Desingn Pattern DAO)
// ProdutosDAO com letra maiúscula para deixar definido que é uma função.

function ProdutosDAO(connection){ // função produtora, serve como o construtor da classe
    this._connection = connection; // conexão guardada para ser utilizada no prototype.lista
}

ProdutosDAO.prototype.lista = function(callback){ 
    this._connection.query('select * from produtos', callback); // Como aqui já chamo o método query,  como o ssitema entende a query?
}

ProdutosDAO.prototype.salva = function(produto, callback){
    // this._connection.query('insert into produtos set ?', produto, callback);
    this._connection.query('insert into produtos (titulo, preco, descricao) values (?, ?, ?)', [produto.titulo, produto.preco, produto.descricao], callback);

}

module.exports = function(){
    return ProdutosDAO;
}

