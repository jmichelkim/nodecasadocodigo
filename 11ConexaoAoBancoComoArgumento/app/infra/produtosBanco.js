// Este arquivo foi criado para que o acesso ao banco de dados seja separado do arquivo produtos.js
// Código antes de transformar a conexão para ser passada na invocação da classe.

// module.exports = function(){
//     this.lista = function(connection, callback){
//         connection.query('select * from livros', callback);
//     }
//     return this;
// }


// Transformando o código para ele ser passado na invocação das classes que necessitam dele.
// Transformando de procedural para OO

module.exports = function () {

    return function(connection){

        this.lista = function (callback) {
            connection.query('select * from livros', callback);
        }
        return this;
    }
}

