function recurse(results, toCall, callback) {
  for (var index in results) {
    if (typeof results[index] === 'object' &&
        typeof toCall[index] === 'object') {
      describe(index, function () {
        recurse(results[index], toCall[index], callback);
      });
    } else {
      if (typeof toCall[index] === 'function') {
        callback(index, results[index], toCall[index]);
      }
    }
  }
}

module.exports = recurse;
