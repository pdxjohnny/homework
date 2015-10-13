var assert = require("assert");

var recurse = require('./recurse.js');
var results = require('../results.json');
var problems = require('../src/1.js');

describe('Chapter 1', function() {
  recurse(results, problems, function (index, shouldBe, toCall) {
    describe(index, function () {
      it('should be ' + shouldBe, function () {
        var res = toCall(shouldBe);
        console.log('result\t', shouldBe, res);
        assert.equal(shouldBe, res)
      });
    });
  });
});
