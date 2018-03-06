'use strict';

const noUnusedExpression = require('eslint/lib/rules/no-unused-expressions');
const validPrefixes = ['debug', 'warn', 'info'];

module.exports = {
  meta : noUnusedExpression.meta,

  create(context) {
    const inherited = noUnusedExpression.create(context);

    function isValidProp(p) {
      if (!p) {
        return false;
      }

      for (const validPrefix of validPrefixes) {
        if (p.startsWith(validPrefix)) {
          return true;
        }
      }
      return false;
    }

    function isDebugEnabledShortHand(node) {
      // Allows debug.enabled && debug(...); expressions
      const { type, operator, left } = node.expression;
      const { object, property     } = left || {};

      return (type          === 'LogicalExpression' &&
              operator      === '&&'                &&
              left.type     ===  'MemberExpression' &&
              isValidProp(object.name)              &&
              property.name === 'enabled'           );
    }

    function isExpectCallExpression(node) {
      // Allows expect(...).to.xxx.xxx expressions;
      let currentNode = node.expression;
      let lastNode    = null;
      while (currentNode.type === 'MemberExpression') {
        lastNode    = currentNode;
        currentNode = currentNode.object;
        if (currentNode.type === 'CallExpression' && currentNode.callee.type === 'MemberExpression') {
          currentNode = currentNode.callee;
        }
      }

      return lastNode &&
             lastNode.type           === 'MemberExpression' &&
             lastNode.property.name  === 'to'               &&
             currentNode.type        === 'CallExpression'   &&
             currentNode.callee.name === 'expect';
    }

    return {
      ExpressionStatement(node) {
        if (isDebugEnabledShortHand(node) || isExpectCallExpression(node)) {
          return;
        }

        return inherited.ExpressionStatement(node);
      }
    };
  }
};

