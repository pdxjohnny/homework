var math = function () {
  return this;
}

math.prototype.circumference = function (radius) {
  console.log('c = 2 * PI * r');
  radius *= 2;
  console.log('radius * 2\t=', radius);
  radius *= Math.PI;
  console.log('radius * PI\t=', radius);
  return radius;
};

math.prototype.surfaceArea = function (radius) {
  console.log('sa = 4 * PI * r ^ 2');
  radius = Math.pow(radius, 2);
  console.log('radius ^ 2\t=', radius);
  radius *= 4;
  console.log('radius * 4\t=', radius);
  radius *= Math.PI;
  console.log('radius * PI\t=', radius);
  return radius;
};

math.prototype.volume = function (radius) {
  console.log('v = 4 / 3 * PI * r ^ 3');
  radius = Math.pow(radius, 3);
  console.log('radius ^ 3\t=', radius);
  radius *= (4 / 3);
  console.log('radius * (4 / 3)\t=', radius);
  radius *= Math.PI;
  console.log('radius * PI\t=', radius);
  return radius;
};

math.prototype.mtokm = function (num) {
  console.log(num, 'm to', num / 1000, 'km');
  num /= 1000;
  return num;
};

math.prototype.round = function (num, intended) {
  var roundTo = Math.pow(10, this.countZeros(intended));
  var rounded = Math.round(num / roundTo) * roundTo;
  console.log('round', num, 'to', rounded);
  return rounded;
};

math.prototype.countZeros = function (intended) {
  var numZeros = 0;
  var asString = String(intended).split("").reverse().join("");
  for (var i = 0; i < asString.length && asString[i] == '0'; i++) {
    numZeros++;
  }
  return numZeros;
};

module.exports = new math();
