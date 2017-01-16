'use strict';

const rule       = require('../../../lib/rules/no-exclusive-test');
const RuleTester = require('eslint').RuleTester;

new RuleTester().run('no-exclusive-test', rule, {
  valid   : [{ code: 'it()' },
             { code: 'it.skip()' },
             { code: 'describe()' },
             { code: 'describe.skip()' },
             { code: 'foo.only()' }],
  invalid : [
    { code   : 'it.only()',
      errors : [{ message: `".only()" call in mocha tests should never be committed`, type: 'Identifier' }]
    },
    { code   : 'describe.only()',
      errors : [{ message: `".only()" call in mocha tests should never be committed`, type: 'Identifier' }]
    }
  ]
});
