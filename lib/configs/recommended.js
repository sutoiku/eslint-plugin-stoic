'use strict';

/**
 * TO BE DISCUSSED
 * --------------------------------------------
 * 'complexity'
 * 'consistent-return'
 * 'default-case'
 * 'guard-for-in'
 * 'no-implicit-coercion'
 * 'no-invalid-this'
 */

module.exports = {
  extends : 'eslint:recommended',
  rules   : {
    // CUSTOM RULES
    'stoic/no-done-without-error-class' : 2,

    // POSSIBLE ERRORS
    'no-await-in-loop'                  : 2,

    // BEST PRACTICES
    'accessor-pairs'                    : 2,
    'array-callback-return'             : 2,
    'block-scoped-var'                  : 2,
    'curly'                             : 2,
    'dot-location'                      : [2, 'property'],
    'dot-notation'                      : 2,
    'eqeqeq'                            : 2,
    'no-alert'                          : 2,
    'no-caller'                         : 2,
    'no-else-return'                    : 1,
    'no-empty-function'                 : [2, { allow: ['arrowFunctions', 'constructors'] }],
    'no-empty-pattern'                  : 2,
    'no-eq-null'                        : 2,
    'no-eval'                           : 2,
    'no-extend-native'                  : 2,
    'no-extra-bind'                     : 2,
    'no-fallthrough'                    : 2,
    'no-floating-decimal'               : 2,
    'no-implicit-globals'               : 2,
    'no-implied-eval'                   : 2,
    'no-iterator'                       : 2,
    'no-labels'                         : 2,
    'no-lone-blocks'                    : 2,
    'no-loop-func'                      : 2,
    'no-unmodified-loop-condition'      : 2,
    'no-multi-str'                      : 2,
    'no-native-reassign'                : 2,
    'no-new-func'                       : 2,
    'no-new-wrappers'                   : 2,
    'no-new'                            : 2,
    'no-octal-escape'                   : 2,
    'no-octal'                          : 2,
    'no-proto'                          : 2,
    'no-redeclare'                      : [2, { builtinGlobals: true }],
    'no-return-assign'                  : [2, 'always'],
    'no-script-url'                     : 2,
    'no-self-compare'                   : 2,
    'no-sequences'                      : 2,
    'no-throw-literal'                  : 2,
    'no-useless-call'                   : 2,
    'no-useless-concat'                 : 2,
    'no-with'                           : 2,
    'radix'                             : 2,
    'vars-on-top'                       : 2,
    'wrap-iife'                         : [2, 'inside'],
    'yoda'                              : [2, 'never', { exceptRange: true }],
    'no-magic-numbers'                  : [1, { ignoreArrayIndexes: true }],
    'no-restricted-properties'          : [2, { object: 'describe', property: 'only' }, { object: 'it', property: 'only' }],
    'no-return-await'                   : 2,
    'no-unused-expressions'             : 1,
    'prefer-promise-reject-errors'      : 2,
    'require-await'                     : 2,

    // STRICT
    'strict'                            : [2, 'global'],

    // VARIABLES
    'no-undef-init'                     : 2,

    // NODE.JS AND COMMONJS
    'callback-return'                   : [2, ['done', 'callback']],
    'handle-callback-err'               : [2, '^(err|error)$'],
    'no-buffer-constructor'             : 2,
    'no-mixed-requires'                 : [2, { grouping: true, allowCall: true }],
    'no-new-require'                    : 2,
    'no-path-concat'                    : 1,
    'no-process-exit'                   : 1,

    // CODE STYLE
    'comma-dangle'                      : 1,
    'linebreak-style'                   : [2, 'unix'],
    'semi'                              : [2, 'always'],
    'no-restricted-syntax'              : [2, 'ForInStatement'],
    'camelcase'                         : 1,
    'consistent-this'                   : [2, 'self'],
    'max-nested-callbacks'              : [1, 3],
    'max-statements-per-line'           : ['error', { max: 1 }],
    'max-depth'                         : [1, 4],
    'no-array-constructor'              : 2,
    'no-lonely-if'                      : 2,

    // ES6
    'arrow-parens'                      : ['error', 'always'],
    'arrow-spacing'                     : 2,
    'no-confusing-arrow'                : [2, { allowParens: true }],
    'no-use-before-define'              : [1, { functions: false, classes: false }],
    'no-useless-computed-key'           : 2,
    'no-useless-constructor'            : 2,
    'no-template-curly-in-string'       : 2,
    'no-var'                            : 2,
    'prefer-const'                      : [2, { destructuring: 'any' }],
    'prefer-spread'                     : 2,
    'prefer-rest-params'                : 2
  }
};
