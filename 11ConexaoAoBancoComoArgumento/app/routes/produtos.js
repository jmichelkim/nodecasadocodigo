// // Passo 0 - Antes de alterar a conexão para ser passada como argumento do objeto produtosBanco
// // começa a ser utlizado OO e por isso o new

// module.exports = function (app) {

//     app.get('/produtos', function (request, response) {

//         var connection = app.infra.connectionFactory();
//         var produtosBanco = app.infra.produtosBanco;

//         produtosBanco.lista(connection, function (err, results) { //Arquivo alterado para isolar a consulta ao banco

//             response.render('produtos/lista', { lista: results });
//         });

//         console.log('Requisição ao banco de dados realizada com sucesso');

//         connection.end();

//         console.log('Requisição a página url/produtos efetuada com sucesso.');

//     });
// }



// Passo 1
// Transforma o acesso (query) ao banco em OO, desta forma passa a connection apenas uma vez na 
// invocação deste objeto. Para isto transforma o produtosBanco(Query ao Banco) em Objeto (OO), utilizando
// o wrapper no module para não executar diretamente a query.
// E altera a rota produto para invocar o objeto via new já passando a conexão.

module.exports = function (app) {

    app.get('/produtos', function (request, response) {

        var connection = app.infra.connectionFactory();

        var produtosBanco = new app.infra.produtosBanco(connection);

        produtosBanco.lista(function (err, results) {

            response.render('produtos/lista', { lista: results });
        });

        console.log('Requisição ao banco de dados realizada com sucesso');

        connection.end();

        console.log('Requisição a página url/produtos efetuada com sucesso.');

    });
}

