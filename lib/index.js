'use strict';

exports.rules = {
  'no-done-without-error-class': require('./rules/no-done-without-error-class.js'),
  'no-only-property': require('./rules/no-only-property.js'),
  'no-unused-expressions': require('./rules/no-unused-expressions.js'),
}

exports.configs = require('./configs/recommended.js');