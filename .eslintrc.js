'use strict';

const fs       = require('fs');
const jshintrc = JSON.parse(fs.readFileSync(`${__dirname}/.jshintrc`, 'utf8'));
const globals  = jshintrc.predef.reduce((acc, v) => { acc[v] = true; return acc; }, {});

require('./test/kyu-linter');

module.exports = {
  globals,
  extends : './node_modules/eslint-config-bestpractices/index.js',
  env     : { es6: true, node: true, browser: true },
  plugins : [ 'kyu-linter' ],
  rules   : {
    'kyu-linter/no-undefined-fermat-functions' : ['error'],
    'kyu-linter/no-done-without-error-class'   : ['error']
  }
};
