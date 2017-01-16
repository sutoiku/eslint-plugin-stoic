'use strict';

module.exports = {
  meta : {
    docs    : {
      description : 'no-exclusive-test',
      category    : 'test',
      recommended : false
    },
    fixable : null,
    schema  : []
  },

  create(context) {
    return {
      Identifier: node => {
        if (node.name !== 'only')                                                       { return; }
        if (!node.parent || node.parent.type !== 'MemberExpression')                    { return; }
        if (node.parent.object.type !== 'Identifier')                                   { return; }
        if (node.parent.object.name !== 'it' && node.parent.object.name !== 'describe') { return; }
        if (!node.parent.parent || node.parent.parent.type !== 'CallExpression')        { return; }

        context.report({ node, message: '".only()" call in mocha tests should never be committed' });
      }
    };
  }
};
