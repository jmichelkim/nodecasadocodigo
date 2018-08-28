// Passo 0 - Antes de isolar a conexao com o banco de dados para o path ./app/infra/connectionFactory.js

// module.exports = function (app) {

//     app.get('/produtos', function (request, response) {

//         var mysql = require('mysql');

//         var connection = mysql.createConnection({
//             host: 'localhost',
//             user: 'usuario',
//             password: '',
//             database: 'casadocodigo_nodejs'
//         });

//         connection.query('select * from livros', function (err, results) {
//             response.render('produtos/lista', {lista: results}); // reponse alterado para enviar uma lista Json para a página.
//         });

//         console.log('Requisição ao banco de dados realizada com sucesso');

//         connection.end();

//         console.log('Requisição a página url/produtos efetuada com sucesso.');

//     });
// }


// Passo 1 - Criamos as variáveis dbConnection e também a connection

var dbConnection = require('../infra/connectionFactory');

module.exports = function (app) {

    app.get('/produtos', function (request, response) {

        var connection = dbConnection();

        connection.query('select * from livros', function (err, results) {
            response.render('produtos/lista', { lista: results }); // reponse alterado para enviar uma lista Json para a página.
        });

        console.log('Requisição ao banco de dados realizada com sucesso');

        connection.end();

        console.log('Requisição a página url/produtos efetuada com sucesso.');

    });
}