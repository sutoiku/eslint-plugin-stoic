'use strict';

const noUnusedExpression = require('eslint/lib/rules/no-unused-expressions');

module.exports = {
  meta : noUnusedExpression.meta,

  create(context) {
    const inherited = noUnusedExpression.create(context);
    return {
      ExpressionStatement(node) {
        const { type, operator, left } = node.expression;
        const { object, property     } = left || {};
        if (type          === 'LogicalExpression' &&
            operator      === '&&'                &&
            left.type     ===  'MemberExpression' &&
            object.name   === 'debug'             &&
            property.name === 'enabled'           ) {
          return;
        }

        return inherited.ExpressionStatement(node);
      }
    };
  }
};

