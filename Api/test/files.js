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
                done()
                })
        })
    })

})