module.exports = function(app){

    app.get("/promocoes/formulario", function(request, response){
        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        
        ProdutosDAO.lista(function(error, results){
            response.render("promocoes/formulario", {lista: results});
        });

        connection.end();
    })

    app.post("/promocoes", function(request, response){
        var promocao = request.body;
        // console.log("Promoção Relâmpago Cadastrada: " + promocao);
        console.log(promocao);
        app.get('io').emit("novaPromocao", promocao);
        response.redirect("/promocoes/formulario");
    })

}