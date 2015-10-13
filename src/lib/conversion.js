var Conversion = function () {
  return this;
}

Conversion.prototype.size = function (num, start, end) {
  var startNum = this.unitSize(start);
  var endNum = this.unitSize(end);
  var res = num * startNum / endNum;
  console.log(num, start, 'to', res, end);
  return res;
};

Conversion.prototype.unitSize = function (toNumber) {
  switch (toNumber) {
    case 'u':
      return 1E-6;
      break;
    case 'm':
      return 1;
      break;
    case 'km':
      return 1000;
      break;
  }
  return false;
};

module.exports = new Conversion();
