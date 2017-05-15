import buble from 'rollup-plugin-buble';

const pkg = require('./package.json');

export default {
  entry: 'src/index.js',
  plugins: [buble()],
  targets: [{
    format: 'cjs',
    dest: pkg['main']
  }, {
    format: 'es',
    dest: pkg['jsnext:main']
  }],
  external: [ 'child_process', 'fs', 'path' ]
};
