'use strict';

const rule = require('../../../lib/rules/no-done-without-error-class');
const RuleTester = require('eslint').RuleTester;

new RuleTester().run('no-done-without-error-class', rule, {
  valid: [{ code: 'done(new Error("error"))' }, { code: 'done(null, res)' }, { code: 'done()' }],
  invalid: [
    {
      code: 'done("error")',
      errors: [{ message: `"done" called without error class`, type: 'CallExpression' }],
    },
  ],
});
