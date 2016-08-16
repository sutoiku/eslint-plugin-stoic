/**
 * @fileoverview Stoic Lint plugin
 * @author Y
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

// import all configs in lib/configs
module.exports.configs = requireIndex(__dirname + "/configs");

