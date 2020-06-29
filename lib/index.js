'use strict';

const requireIndex = require('requireindex');

exports.rules = requireIndex(`${__dirname}/rules`);
exports.configs = requireIndex(`${__dirname}/configs`);
