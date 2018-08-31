// Observe o código antigo

// var mysql = require('mysql');

// var conecction = mysql.createConnection({
//     host: 'localhost',
//     user: 'usuario',
//     password: '',
//     database: 'casadocodigo_nodejs'
// });



// Obserque que este código de conexão é diferente do código que estava no arquivo.
// Ou seja, transferimos a conexão aqui, mas o código teve alteração.

// var mysql = require('mysql');

// module.exports = function() {
//     return mysql.createConnection({
//     host: 'localhost',
//     user: 'usuario',
//     password: '',
//     database: 'casadocodigo_nodejs'
// });
// };


// Passo 1 - Como o express-load carrega e invoca a função, isto implica em criar uma conexão
// com o banco de dados mesmo sem necessidade. Desta forma iremos utilizar o Wrapper (empacotar 
// uma função em outra), assim o app somente vai carregar a função, e não invocá-la.
// o module.exports vai ficar na parte de baixo do arquivo.

var mysql = require('mysql');

function createDBConnection(){

    return mysql.createConnection({
        host: 'localhost',
        user: 'usuario',
        password: '',
        database: 'casadocodigo_nodejs'
    });

};

module.exports = function () {
    return createDBConnection;
};

