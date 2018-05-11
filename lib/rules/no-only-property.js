'use strict';

module.exports = {
  meta : {
    docs    : {
      description : 'no-only-property',
      category    : 'properties',
      recommended : false
    },
    fixable : null,
    schema  : []
  },

  create(context) {
    return {
      Property: node => {
        if (node.key.type !== 'Identifier') { return; }
        if (node.key.name !== 'only') { return; }

        context.report({ node, message: 'Property "only" should be removed.' });
      }
    };
  }
};
