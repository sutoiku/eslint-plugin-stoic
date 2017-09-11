'use strict';

const noUnusedExpression = require('eslint/lib/rules/no-unused-expressions');

module.exports = {
  meta : noUnusedExpression.meta,

  create(context) {
    const inherited = noUnusedExpression.create(context);

    function isDebugEnabledShortHand(node) {
      const { type, operator, left } = node.expression;
      const { object, property     } = left || {};
      return (type          === 'LogicalExpression' &&
              operator      === '&&'                &&
              left.type     ===  'MemberExpression' &&
              object.name   === 'debug'             &&
              property.name === 'enabled'           );
    }

    return {
      ExpressionStatement(node) {
        if (isDebugEnabledShortHand(node)) {
          return;
        }

        return inherited.ExpressionStatement(node);
      }
    };
  }
};

