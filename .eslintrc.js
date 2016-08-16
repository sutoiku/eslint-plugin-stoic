'use strict';

const fs       = require('fs');
const jshintrc = JSON.parse(fs.readFileSync(`${__dirname}/.jshintrc`, 'utf8'));
const globals  = jshintrc.predef.reduce((acc, v) => { acc[v] = true; return acc; }, {});

module.exports = {
  globals,
  extends : './node_modules/eslint-config-bestpractices/index.js',
  env     : { es6: true, node: true, browser: true }
};
