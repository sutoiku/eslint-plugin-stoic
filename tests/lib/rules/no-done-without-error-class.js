/**
 * @fileoverview no-done-without-error-class
 * @author Y
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule       = require("../../../lib/rules/no-done-without-error-class");
const RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-done-without-error-class", rule, {

  valid: [{
    code   : "done(new Error('error'))"
  }],

  invalid: [{
    code   : "done('error')",
    errors : [{
      message : `"done" called without error class`,
      type    : "CallExpression"
    }]
  }]
});
