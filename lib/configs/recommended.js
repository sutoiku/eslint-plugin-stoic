'use strict';

module.exports = {
  extends : 'eslint:recommended',
  rules   : {

    // CUSTOM RULES

    'stoic/no-done-without-error-class' : 2,
    'stoic/no-done-without-return'      : 1,
    'stoic/no-exclusive-test'           : 2,

    // BEST PRACTICES

    'accessor-pairs': 2,
    'array-callback-return'        : 2,
    'block-scoped-var'             : 2,
    // 'complexity'                : [2, { max: 12 }],
    // 'consistent-return'         : 2,
    'curly'                        : 2,
    // 'default-case'              : 2,
    'dot-location'                 : [2, 'property'],
    'dot-notation'                 : 2,
    'eqeqeq'                       : 2,
    // 'guard-for-in'              : 2,
    'no-alert'                     : 2,
    'no-caller'                    : 2,
    'no-div-regex'                 : 2,
    'no-else-return'               : 1,
    'no-empty-function'            : [2, { allow: ['arrowFunctions', 'constructors'] }],
    'no-empty-pattern'             : 2,
    'no-eq-null'                   : 2,
    'no-eval'                      : 2,
    'no-extend-native'             : 2,
    'no-extra-bind'                : 2,
    'no-fallthrough'               : 2,
    'no-floating-decimal'          : 2,
    // 'no-implicit-coercion'      : 2,
    'no-implicit-globals'          : 2,
    'no-implied-eval'              : 2,
    // 'no-invalid-this'           : 2,
    'no-iterator'                  : 2,
    'no-labels'                    : 2,
    'no-lone-blocks'               : 2,
    'no-loop-func'                 : 2,
    'no-unmodified-loop-condition' : 2,
    'no-multi-str'                 : 2,
    'no-native-reassign'           : 2,
    'no-new-func'                  : 2,
    'no-new-wrappers'              : 2,
    'no-new'                       : 2,
    'no-octal-escape'              : 2,
    'no-octal'                     : 2,
    'no-proto'                     : 2,
    'no-redeclare'                 : [2, { builtinGlobals: true }],
    'no-return-assign'             : [2, 'always'],
    'no-script-url'                : 2,
    'no-self-compare'              : 2,
    'no-sequences'                 : 2,
    'no-throw-literal'             : 2,
    'no-useless-call'              : 2,
    'no-useless-concat'            : 2,
    'no-with'                      : 2,
    'radix'                        : 2,
    'vars-on-top'                  : 2,
    'wrap-iife'                    : [2, 'inside'],
    'yoda'                         : [2, 'never', { exceptRange: true }],

    // CODE STYLE

    'comma-dangle'                 : 1,
    'linebreak-style'              : [2, 'unix'],
    'semi'                         : [2, 'always'],

    // ES6

    'arrow-spacing'                : 2,
    'no-confusing-arrow'           : [2, { allowParens: true }],
    'no-useless-computed-key'      : 2,
    'no-useless-constructor'       : 2,
    'no-template-curly-in-string'  : 2,
    'no-var'                       : 2,
    'prefer-const'                 : [2, { destructuring: 'any' }],
    'prefer-spread'                : 2,
    'prefer-rest-params'           : 2
  }
};
