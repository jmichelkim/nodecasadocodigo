module.exports = function(app){

    app.get("/", function(request, response){
        var connection = app.infra.connectionFactory();
        var produtos = new app.infra.ProdutosDAO(connection);

        produtos.lista(function(error, results, fields){
            response.render('home/home', {livros: results});
        });
        connection.end();
    });

    app.get("/index", function (request, response) {
        var connection = app.infra.connectionFactory();
        var produtos = new app.infra.ProdutosDAO(connection);

        produtos.lista(function (error, results, fields) {
            response.render('home/index', { livros: results });
        });
        connection.end();
    });


}