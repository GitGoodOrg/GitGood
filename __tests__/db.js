const fs = require('fs');
const path = require('path');
const db = require('../server/db/db');

/**
 * Like many testing frameworks, in Jest we use the "describe" function to
 * separate our tests into sections. They make your test outputs readable.
 *
 * You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
 * functions inside of "describe" blocks and they will only run for tests
 * inside that describe block. You can even nest describes within describes!
 */
describe('db unit tests', () => {
  /**
   * Jest runs the "beforeAll" function once, before any tests are executed.
   * Here, we write to the file and then reset our database model. Then, we
   * invoke the "done" callback to tell Jest our async operations have
   * completed. This way, the tests won't start until the "database" has been
   * reset to an empty Array!
   */
  
  // beforeAll((done) => {});

  // afterAll((done) => {});

  describe('#sync', () => {
    it('writes a valid marketList to the JSON file', () => {

    });

    // TODO: Finish unit testing the sync function

    it('overwrites previously existing markets', () => {

    });

    it('returns an error when location and/or cards fields are not provided', () => {

    });

  });
});
