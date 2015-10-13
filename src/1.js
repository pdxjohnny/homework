var math = require('./lib/math.js');

var problems = {
  one: {
    a: function (intended) {
      var circum = math.mtokm(6.37E6);
      circum = math.circumference(circum);
      circum = math.round(circum, intended);
      return circum;
    },
    b: function (intended) {
      var circum = math.mtokm(6.37E6);
      circum = math.surfaceArea(circum);
      circum = math.round(circum, intended);
      return circum;
    }
  }
}

module.exports = problems;
