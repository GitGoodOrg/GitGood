const request = require('supertest');
const server = 'http://localhost:3000'

describe ('Route Integration', () => {
    describe('/api/topic', () => {
        describe('GET', () => {
            it ('responds with 200 status and json file', () => {
                return request(server)
                    .get('/api/topic')
                    .expect('Content-Type', /application\/json/)
                    .expect(200);
            })
        })
        describe('POST', () => {
            it ('responds with 200 status and json file', () => {
                return request(server)
                    .post('/api/topic')
                    //add.send
                    .expect('Content-Type', /application\/json/)
                    .expect(200);
            })
        })
    })
})
