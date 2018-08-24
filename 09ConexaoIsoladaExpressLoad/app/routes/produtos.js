
// Passo 0 - Antes da alteração
//         console.log('Requisição ao banco de dados realizada com sucesso');

//         connection.end();

//         console.log('Requisição a página url/produtos efetuada com sucesso.');

//     });
// }

// Passo 1 - alterar a var connection pois dbConnection que não existe mis devido a utilização do express-load
// Desta forma teremos que criar a var connection = app.infra.connectionFactory()
// Podemos utilizar esta rota app.infra.connectionFactory() devido ao express-load

module.exports = function (app) {

    app.get('/produtos', function (request, response) {

        var connection = app.infra.connectionFactory(); // Alteramos esta variável para utlizar esta rota.

        connection.query('select * from livros', function (err, results) {
            response.render('produtos/lista', { lista: results }); // reponse alterado para enviar uma lista Json para a página.
        });

        console.log('Requisição ao banco de dados realizada com sucesso');

        connection.end();

        console.log('Requisição a página url/produtos efetuada com sucesso.');

    });
}
