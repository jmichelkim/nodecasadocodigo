// Obserque que este código de conexão é diferente do código que estava no arquivo.
// Ou seja, transferimos a conexão aqui, mas o código teve alteração.

var mysql = require('mysql');

module.exports = function() {
    return mysql.createConnection({
    host: 'localhost',
    user: 'usuario',
    password: '',
    database: 'casadocodigo_nodejs'
});
};



// Observe o código antigo

// var mysql = require('mysql');

// var conecction = mysql.createConnection({
//     host: 'localhost',
//     user: 'usuario',
//     password: '',
//     database: 'casadocodigo_nodejs'
// });


