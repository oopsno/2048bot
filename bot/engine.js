'use strict';

(function () {
  // detect weather Object.watch is implemented
  if (Object.prototype.watch === undefined) {
    throw Error('No available Object.watch');
  } else {
    console.log('Object.watch available');
  }
})();
