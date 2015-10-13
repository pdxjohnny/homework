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

math.prototype.mtokm = function (num) {
  console.log(num, 'm to', num / 1000, 'km');
  num /= 1000;
  return num;
};

math.prototype.round = function (num, intended) {
  var roundTo = Math.pow(10, String(intended).match(/0/g || []).length);
  var rounded = Math.round(num / roundTo) * roundTo;
  console.log('round', num, 'to', rounded);
  return rounded;
};

module.exports = new math();
