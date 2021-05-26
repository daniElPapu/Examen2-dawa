const  supertest = require( 'supertest')
const { app } = require('../src/server')


test('Probando supertest',()=>{
    supertest(app)
    .get('/api/persons')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
    });
})