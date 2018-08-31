// Teste utilizando o mocha

// var http = require('http');
// var assert = require('assert');

// describe('#ProdutosController', function(){
//     it('#listagem de produtos json', function(done){

//         var configuracoes = {
//             hostname: 'localhost',
//             port: 3000,
//             path: '/produtos',
//             headers: {
//                 'Accept': 'application/json'
//             }
//         };

//         http.get(configuracoes, function(res){
//             assert.equal(res.statusCode, 200);
//             assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
//             done();
//         });
//     });
// });


// Teste utilizando o Supertest - Economiza bastante código.

var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){
    it('#listagem de produtos json', function(done){
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200, done)
    });

    it('#Cadastro de produtos inválidos', function(done){
        request.post('/produtos')
            .send({titulo: "", descricao: "descricao do livro", preco: "45.90"})
            .expect(400, done)
    });

    it('#Cadastro de produtos válidos', function(done){
        request.post('/produtos')
            .send({titulo: "titulo do livro", descricao: "descricao do livro", preco: "67.99"})
            .expect(302, done)
    });

});














