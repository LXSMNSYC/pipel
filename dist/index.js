var pipel = (function () {
  'use strict';

  var index = context => (...funcs) => {
    let result = context;

    // eslint-disable-next-line no-restricted-syntax
    for (const f of funcs) {
      if (typeof f === 'function') result = f(result);
    }

    return result;
  };

  return index;

}());
