const request = require('supertest');

const server = 'http://localhost:3000';

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });

  });

  describe('/github', () => {
    describe('/auth', () => {

      it('GET: responds with a redirect to github sign in', () => request(server)
        .get('/github/auth')
        .expect('Location', 'https://github.com/login/oauth/authorize?scope=user,repo&redirect_uri=http://localhost:3000/github/callback&client_id=27337f49cf34f7d2d21b')
        .expect(302));
    });
  });

  describe('/api', () => {
    describe('/topic', () => {
      describe('GET', () => {
        it('responds with json', () => {
          return request(server)
          .get('/api/topic')
          .set('Cookie', ['ssid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyaXNob2hhbSIsImlhdCI6MTY0NTM3OTIzNn0.B4yB2wVJL7quFTHATAUPcOD3Gpb_t5hn-R-XvGnk6YY'])
          .expect('Content-Type', /application\/json/)
          .expect(200)
        });
        
        it('responds with an array of objects', () => {
          return request(server)
            .get('/api/topic')
            .set('Cookie', ['ssid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyaXNob2hhbSIsImlhdCI6MTY0NTM3OTIzNn0.B4yB2wVJL7quFTHATAUPcOD3Gpb_t5hn-R-XvGnk6YY'])
            .then((response) => {
              expect(Array.isArray(response.body)).toBe(true);
              expect(typeof request.body[0]).toBe('object');
            })
        })
      });

      describe('POST', () => {
        it('Creating a new topic responds with an id number', () => {
          const body = {name: 'topic_test'}
          return request(server)
            .put('/markets')
            .set('Cookie', ['ssid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFyaXNob2hhbSIsImlhdCI6MTY0NTM3OTIzNn0.B4yB2wVJL7quFTHATAUPcOD3Gpb_t5hn-R-XvGnk6YY'])
            .send(body)
            .then(response => {
              expect(typeof response.body).toEqual('number');
            });
        })
      })
    });

  });

});