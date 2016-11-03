'use strict';

const rule       = require('../../../lib/rules/no-done-without-return');
const RuleTester = require('eslint').RuleTester;

new RuleTester().run('no-done-without-return', rule, {
  valid   : [{ code: 'function f() { return done() }' },
             { code: 'function f() { return done && done() }' },
             { code: 'function f() { return done ? done() : null }' },
             { code: '() => done()', parserOptions: { ecmaVersion: 6 } }],
  invalid : [
    { code   : 'function f() { done() }',
      errors : [{ message: `"done" called outside of a return statement`, type: 'CallExpression' }]
    },
    { code   : '() => { done() }',
      errors : [{ message: `"done" called outside of a return statement`, type: 'CallExpression' }],
      parserOptions: { ecmaVersion: 6 }
    }
  ]
});
