'use strict';

module.exports = function(bundler) {
  bundler.on('bundled', bundle => {
    console.log('\n[parcel-plugin-bundle-log output]\n', bundle, '\n');
  });
};
