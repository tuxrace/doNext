const { describe, it } = require('mocha');
const doNext = require('./src/doNext');

const someData = () => new Promise((resolve, reject) => resolve(1));

const assert = require('assert');
describe('run app without errors', function() {
  it('should not break', function(done) {
    doNext(function* (){
      const result = yield someData();      
      assert.equal(result,1);
      
      done();      
    });    
  });
});
