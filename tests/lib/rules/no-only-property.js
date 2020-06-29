'use strict';

const rule = require('../../../lib/rules/no-only-property');
const RuleTester = require('eslint').RuleTester;

new RuleTester().run('no-only-property', rule, {
  valid: [{ code: '({ foo: 1 })' }],
  invalid: [
    {
      code: '({ only: true })',
      errors: [{ message: `Property 'only' should be removed.`, type: 'Property' }],
    },
  ],
});
