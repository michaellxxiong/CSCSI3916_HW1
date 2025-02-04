const chai = require('chai');
const chaiHTTP = require('chai-http');
const { expect } = chai;
const server = require('../server');

chai.use(chaiHTTP);

describe('POST /', () => {
    it('should return a JSON object with the accept header', (done) => {
        const sampleBody = { message: "Hello, World!" };
        
        chai
            .request(server)
            .post('/')
            .set('accept', 'application/json')
            .send(sampleBody)
            .end((err, response) => {
                expect(err).to.be.null;
                expect(response).to.be.status(200);
                expect(response).to.be.json;
                expect(response.body).to.have.property('message', "Hello, World!");
                done();
            });
    });
});