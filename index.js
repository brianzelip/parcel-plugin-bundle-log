'use strict';

module.exports = function(bundler) {
  bundler.on('bundled', bundle => {
    console.log('[parcel-plugin-bundle-log output]\n\n', bundle, '\n\n');
  });
};
