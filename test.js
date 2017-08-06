const { describe, it } = require('mocha');
const doNext = require('./src/doNext');
const fetch = require('isomorphic-fetch');

const assert = require('assert');
describe('run app without errors', () => {
  it('should run without errors', () => {
    assert.equal(1,2)
    
  });
});