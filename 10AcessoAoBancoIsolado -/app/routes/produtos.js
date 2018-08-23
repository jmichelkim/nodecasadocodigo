// Passo 0 - Antes da alteração

// module.exports = function (app) {

//     app.get('/produtos', function (request, response) {

//         var connection = app.infra.connectionFactory(); // Alteramos esta variável para utlizar esta rota.

//         connection.query('select * from livros', function (err, results) {
//             response.render('produtos/lista', { lista: results }); // reponse alterado para enviar uma lista Json para a página.
//         });

//         console.log('Requisição ao banco de dados realizada com sucesso');

//         connection.end();

//         console.log('Requisição a página url/produtos efetuada com sucesso.');

//     });
// }



// Passo 0 - Antes de isolar a consulta ao banco de dados.

module.exports = function (app) {

    app.get('/produtos', function (request, response) {

        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco;

        produtosBanco.lista(connection, function(err, results){ //Arquivo alterado para isolar a consulta ao banco
           
            response.render('produtos/lista', {lista: results});
        });

        console.log('Requisição ao banco de dados realizada com sucesso');

        connection.end();

        console.log('Requisição a página url/produtos efetuada com sucesso.');

    });
}
