var math = require('./lib/math.js');
var conversion = require('./lib/conversion.js');

var problems = {
  one: {
    radius: 6.37E6,
    a: function (intended) {
      var circum = conversion.size(problems.one.radius, 'm', 'km');
      circum = math.circumference(circum);
      circum = math.round(circum, intended);
      return circum;
    },
    b: function (intended) {
      var circum = conversion.size(problems.one.radius, 'm', 'km');
      circum = math.surfaceArea(circum);
      circum = math.round(circum, intended);
      return circum;
    },
    c: function (intended) {
      var circum = conversion.size(problems.one.radius, 'm', 'km');
      circum = math.volume(circum);
      circum = math.round(circum, intended);
      return circum;
    }
  },
  two: {
    a: function (intended) {
      return conversion.size(1, 'u', 'km');
    // },
    // b: function (intended) {
    // },
    // c: function (intended) {
    }
  }
}

module.exports = problems;
