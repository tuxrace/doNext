const { describe, it } = require('mocha');
const assert = require('assert');
describe('run app without errors', () => {
  it('should run without errors', () => {
    assert.equal(1, 1);
  });
});