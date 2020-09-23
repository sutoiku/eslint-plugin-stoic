'use strict';

const message = "Property 'only' should be removed.";
module.exports = {
  meta: {
    docs: {
      description: 'no-only-property',
      category: 'properties',
      recommended: false,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    return {
      CallExpression(node) {
        const calleeType = node.callee.type;
        if (node.callee.type === 'MemberExpression' && node.callee.property.name === 'only') {
          context.report({ node: node.callee.property, message });
        }
      },
      Property(node) {
        if (node.key.type === 'Identifier' && node.key.name === 'only') {
          context.report({ node, message });
        }
      },
    };
  },
};
