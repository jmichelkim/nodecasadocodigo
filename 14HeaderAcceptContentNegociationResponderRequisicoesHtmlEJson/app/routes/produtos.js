// Para preparar o servidor node onde ele respona a requisições tanto em html como en json
// vamos alterar a função app.get('/produtos...)
// Este código será alterado
// ProdutosDAO.lista(function (err, results) {
// response.render('produtos/lista', { lista: results });



module.exports = function (app) {

    app.get('/produtos', function (request, response) {
        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        ProdutosDAO.lista(function (err, results) {
            response.format({                    // Parte do código alterada para preparar o servidor para responder tanto em html ou em json
                html: function(){   // Ou seja, a variável de resposta (response) possui um método chamado format com algumas chaves definidas, aqui utilizaremos a html e a json.
                    response.render("produtos/lista", {lista: results});
                },
                json: function(){
                    response.json(results);
                }
            });
    });

        console.log('Requisição ao banco de dados realizada com sucesso');
        connection.end();
        console.log('Requisição a página url/produtos efetuada com sucesso.');
    });

    app.get('/produtos/formulario', function(request, response){
        console.log('Requisição ao formulário efetuada com sucesso.');
        response.render('produtos/formulario');
        
    });
 
    // app.post('/produtos/salva', function (request, response) { // Código retirado pois não há necessidade devido ao verbo já indicar que se trata de um post.
    app.post('/produtos', function (request, response) {
        var produto = request.body;
        console.log(produto);
        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);

        ProdutosDAO.salva(produto, function(erros, resultado){
            console.log(erros); // Imprimir os erros no console
            // response.render("produtos/lista"); // Alterado para o código abaixo, para evirar o erro do F5 que reenvia o formulário e então duplica a inserção no banco.
            response.redirect("/produtos"); 
        });
        
        connection.end();
    });
};

