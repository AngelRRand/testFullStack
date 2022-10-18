let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../src/app.js')


chai.should()
chai.use(chaiHttp)


describe('Files', () => {
    /* 
    Test GET route
    */
    describe('GET /', () => {
        it("it should get all files", (done) =>{
            chai.request(server)
                .get('/')
                .end((err, response) =>{
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(7);
                done();
                });
        });
    });



    describe('GET /:test', () => {
        it("should reply status 404", (done) =>{
            chai.request(server)
                .get('/test1.csv')
                .end((err, response) =>{
                    response.should.have.status(404);
                done();
                });
        });
        it("should reply status 404", (done) =>{
            chai.request(server)
                .get('/test5.csv')
                .end((err, response) =>{
                    response.should.have.status(404);
                done();
                });
        });
        it("it should get a file", (done) =>{
            chai.request(server)
                .get('/test3.csv')
                .end((err, response) =>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('file');
                    response.body.should.have.property('lines');
                done();
                });
        });
        it("it should get a file", (done) =>{
            chai.request(server)
                .get('/test9.csv')
                .end((err, response) =>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('file');
                    response.body.should.have.property('lines');
                done();
                });
        });
    });

});