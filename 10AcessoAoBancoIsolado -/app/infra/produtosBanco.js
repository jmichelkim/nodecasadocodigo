// Este arquivo foi criado para que o acesso ao banco de dados seja separado do arquivo produtos.js

module.exports = function(){
    this.lista = function(connection, callback){
        connection.query('select * from livros', callback);
    }
    return this;
}