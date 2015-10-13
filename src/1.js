var math = require('./lib/math.js');

var problems = {
  one: {
    radius: 6.37E6,
    a: function (intended) {
      var circum = math.mtokm(problems.one.radius);
      circum = math.circumference(circum);
      circum = math.round(circum, intended);
      return circum;
    },
    b: function (intended) {
      var circum = math.mtokm(problems.one.radius);
      circum = math.surfaceArea(circum);
      circum = math.round(circum, intended);
      return circum;
    },
    c: function (intended) {
      var circum = math.mtokm(problems.one.radius);
      circum = math.volume(circum);
      circum = math.round(circum, intended);
      return circum;
    }
  }
}

module.exports = problems;
