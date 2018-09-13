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


// Conexão antes de atualizar o código para que seja verificada a variável de process.env.NODE_ENV === dev

// var mysql = require('mysql');

// function createDBConnection(){

//     return mysql.createConnection({
//         host: 'localhost',
//         user: 'usuario',
//         password: '',
//         database: 'casadocodigo_nodejs'
//     });

// };

// module.exports = function () {
//     return createDBConnection;
// };


// Códigos que fazem a verificação se o pocesso é de testes para utilizar o banco de testes

var mysql = require('mysql');

function createDBConnection() {

    if (process.env.NODE_ENV == 'production') {
        return mysql.createConnection({
            host: 'us-cdbr-iron-east-01.cleardb.net',
            user: 'b07aae9d23922e',
            password: '927e8634',
            database: 'heroku_bd386599e32eb7e'
        });
    }

    // if (!process.env.NODE_ENV) { // Outra opção
    // if (process.env.NODE_ENV || process.env.node === 'development') { // Outra opção que foi mostrada, mas não funciona, tive que returar o !
    if (process.env.NODE_ENV || process.env.node === 'development') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'usuario',
            password: '',
            database: 'casadocodigo_nodejs'
        });
    };

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'usuario',
            password: '',
            database: 'casadocodigo_nodejs_teste'
        });
    };
};

module.exports = function () {
    return createDBConnection;
};