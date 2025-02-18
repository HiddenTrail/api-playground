'use strict';

const assert = require('assert');
const request = require('request');
const app = require('../src/app');

describe('Feathers application tests', function () {
  const port = 3030;
  // Mock window.location.origin for Node environment
  global.window = {
    location: {
      origin: 'http://localhost'
    }
  };

  before(function (done) {
    this.server = app.listen(port);
    this.server.once('listening', () => done());
  });

  after(function (done) {
    this.server.close(done);
  });

  it('starts and shows the index page', function (done) {
    request(`${window.location.origin}:${port}`, function (err, res, body) {
      assert.ok(body.indexOf('<title>') !== -1);
      done(err);
    });
  });

  describe('404', function () {
    it('shows a 404 HTML page', function (done) {
      request({
        url: `${window.location.origin}:${port}/path/to/nowhere`,
        headers: {
          'Accept': 'text/html'
        }
      }, function (err, res, body) {
        assert.equal(res.statusCode, 404);
        assert.ok(body.indexOf('<html>') !== -1);
        done(err);
      });
    });

    it('shows a 404 JSON error without stack trace', function (done) {
      request({
        url: `${window.location.origin}:${port}/path/to/nowhere`,
        json: true
      }, function (err, res, body) {
        assert.equal(res.statusCode, 404);
        assert.equal(body.code, 404);
        assert.equal(body.message, 'Page not found');
        assert.equal(body.name, 'NotFound');
        done(err);
      });
    });
  });
});
