'use strict';

const toleratedTypes = new Set(['LogicalExpression', 'ConditionalExpression']);

module.exports = {
  meta : {
    docs    : {
      description : 'no-done-without-return',
      category    : 'callbacks',
      recommended : false
    },
    fixable : null,
    schema  : []
  },

  create(context) {
    return {
      CallExpression: node => {
        if (node.callee.type !== 'Identifier' || node.callee.name !== 'done') { return; }

        let parent = node.parent;

        while (toleratedTypes.has(parent.type)) {
          parent = parent.parent;
        }

        if (parent.type === 'ArrowFunctionExpression' && parent.expression) {
          return;
        }

        if (parent.type !== 'ReturnStatement') {
          context.report({ node, message: '"done" called outside of a return statement' });
        }
      }
    };
  }
};
