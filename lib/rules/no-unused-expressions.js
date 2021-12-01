'use strict';

const { builtinRules } = require("eslint/use-at-your-own-risk");

const noUnusedExpression = builtinRules.get("no-unused-expressions");
const validPrefixes = ['debug', 'warn', 'info'];

module.exports = {
  meta: noUnusedExpression.meta,

  create(context) {
    const inherited = noUnusedExpression.create(context);

    return {
      ExpressionStatement(node) {
        if (isDebugConditionalCall(node) || isExpectCall(node)) {
          return;
        }

        return inherited.ExpressionStatement(node);
      },
    };
  },
};

// -----------------------------------------------------------------------------
// HELPERS
// -----------------------------------------------------------------------------

/**
 * Checks for `expect(...).to.xxx`
 */
function isExpectCall(node) {
  let currentNode = node.expression;
  let lastNode = null;

  while (currentNode.type === 'MemberExpression') {
    lastNode = currentNode;
    currentNode = currentNode.object;
    if (currentNode.type === 'CallExpression' && currentNode.callee.type === 'MemberExpression') {
      currentNode = currentNode.callee;
    }
  }

  return (
    lastNode &&
    lastNode.type === 'MemberExpression' &&
    lastNode.property.name === 'to' &&
    currentNode.type === 'CallExpression' &&
    currentNode.callee.name === 'expect'
  );
}

/**
 * Checks for `debug.enabled && debug(...)`
 */
function isDebugConditionalCall(node) {
  const { type, operator, left } = node.expression;
  const { object, property } = left || {};

  return (
    type === 'LogicalExpression' &&
    operator === '&&' &&
    left.type === 'MemberExpression' &&
    property.name === 'enabled' &&
    isValidProp(object.name)
  );
}

function isValidProp(property) {
  if (!property) {
    return false;
  }

  for (const validPrefix of validPrefixes) {
    if (property.startsWith(validPrefix)) {
      return true;
    }
  }

  return false;
}
