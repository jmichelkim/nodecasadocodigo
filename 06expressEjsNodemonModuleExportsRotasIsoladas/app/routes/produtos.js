
module.exports = function(app){

app.get('/produtos', function (request, response) {
    console.log('Requisição efetuada com sucesso para a página /produtos.');
    response.render("produtos/lista");;
    
});
}