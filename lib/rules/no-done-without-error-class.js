/**
 * @fileoverview no-done-without-error-class
 * @author Y
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "no-done-without-error-class",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create(context) {
    return {
      CallExpression: node => {
        if (node.callee.type !== 'Identifier' ||
            node.callee.name !== 'done'       ) { return; }

        const firstArg = node.arguments[0];
        if (!firstArg) { return; }
        if (firstArg.type !== 'Literal' && firstArg.type !== 'TemplateLiteral') { return; }
        if (firstArg.value === null) { return; }

        context.report({ node, message: '"done" called without error class' });
      }
    };
  }
};
