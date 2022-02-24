const request = require('supertest');
const app = require('express')();
import regeneratorRuntime from 'regenerator-runtime';

const server = 'http://localhost:3000';

const fakeData = [{
  "id" : 2,
  "name": "algo"
}]


describe('Route integration', () => {

  describe('test / endpoint', () => {

    describe('GET', () => {
      
      it('should return 200 status and test/html', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      })
    })
  })

  describe('test api/topic endpoint', () => {

    describe('GET', () => {

      it('should return a 200 status code', () => {
        return request(server)
          .get('/api/topic/')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })

      it('response body is json', () => {
        const response = fakeData;
        return request(server).get('/api/topic').expect(response)
      })
    })

    describe('PUT', () => {
      it('responds with 200 status and application/json content type', () => {
        const topic = [
          { name: "algo"}
        ]
        return request(server)
        .put('/api/topic')
        .send(topic)
        .expect("Content-Type", /application\/json/)
        .expect(200)
      });

      it('responds with the updated topic', () => {
        const newTopic = [
          { name: "react"}
        ]
        return request(server)
        .put('/api/topic')
        .send(newTopic)
        .then((response) => {
          expect(response.body).toEqual(newTopic)
        })
      });

      it('responds to invalid request with 400 status and error message in body', () => {
        return request(server)
        .put('/api/topic')
        .send([{name: 5}])
        .expect(400)
        
      });
    });
  })

  describe('test api/subtopic/:topic_id endpoint', () => {

    describe('GET', () => {

      it('should return a 200 status code', () => {
        return request(server)
          .get('/api/subtopic/:topic_id')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })

      it('response body is json', () => {
        const response = fakeData;
        return request(server).get('/api/subtopic/:topic_id').expect(response)
      })
    })

    describe('PUT', () => {
      it('responds with 200 status and application/json content type', () => {
        const topic = [
          { name: "algo"}
        ]
        return request(server)
        .put('/api/subtopic')
        .send(topic)
        .expect("Content-Type", /application\/json/)
        .expect(200)
      });

      it('responds with the updated topic', () => {
        const newTopic = [
          { name: "react"}
        ]
        return request(server)
        .put('/api/subtopic')
        .send(newTopic)
        .then((response) => {
          expect(response.body).toEqual(newTopic)
        })
      });

      it('responds to invalid request with 400 status and error message in body', () => {
        return request(server)
        .put('/api/subtopic')
        .send([{name: 5}])
        .expect(400)
        
      });
    });
  })

  
})