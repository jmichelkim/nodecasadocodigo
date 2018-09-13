// Para preparar o servidor node onde ele respona a requisições tanto em html como en json
// vamos alterar a função app.get('/produtos...)
// Este código será alterado
// ProdutosDAO.lista(function (err, results) {
// response.render('produtos/lista', { lista: results });



module.exports = function (app) {

    app.get('/produtos', function (request, response, next) {
        
        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        
        ProdutosDAO.lista(function (err, results) {

            if(err){
                return next(err);
            }

            response.format({ // Parte do código alterada para preparar o servidor para responder tanto em html ou em json
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
        response.render('produtos/formulario', {errosValidacao: {}, produto: {}}); // Incluidos os errosValidacao para poder renderizar o formulário e atender ao if do erro.
        
    });
 
    // app.post('/produtos/salva', function (request, response) { // Código retirado pois não há necessidade devido ao verbo já indicar que se trata de um post.
    app.post('/produtos', function (request, response) {

        var produto = request.body;

        var validatorTitulo = request.assert('titulo', 'Título deve ser preenchido.'); //identifica o campo e informa a mensagem em caso de erro.
        validatorTitulo.notEmpty(); // notEmpty() é uma função do express-validator que verifica se o campo está vazio.

        request.assert('preco', 'Formato inválido').isFloat(); // Exemplo que não utliza a variável temporária como no exemplo acima.

        var erros = request.validationErrors(); // validationErrors é uma função do express-validator que verifica se existe erro e retorna um JSON com as informações desse erro.
        console.log(erros);

        // Tratamento de erros de validação do formulário sem tratamento de json e html
        // if(erros){
        //     console.log('Pegaram os erros');
        //     response.render('produtos/formulario', {errosValidacao: erros, produto: produto});
        //     return;
        // }

        if(erros){
            response.status(400);
                response.format({
                    html: function(){
                        response.render('produtos/formulario', {errosValidacao: erros, produto: produto})
                    },
                    json: function(){
                        response.send(erros);
                    }
                });
                return;
       }


        console.log(produto);
        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);

        ProdutosDAO.salva(produto, function(erros, resultado){
            console.log(erros); // Imprimir os erros no console
            response.redirect("/produtos");  // Redirect utilizado: After post Always redirect
        });
        
        connection.end();
    });
};

