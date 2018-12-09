const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/avatar-lib/runtime.js',
    './dist/avatar-lib/polyfills.js',
    './dist/avatar-lib/scripts.js',
    './dist/avatar-lib/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/avatar-lib.js');
})();