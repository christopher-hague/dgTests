var assert = require('assert')

var firstTest = require("../problems/myFirstTest.js")

describe("Test", function() {
  describe("#myFirstTest", function() {
    it("should return string 'Initial test passing'", function() {
      assert.equal(firstTest._test.myFirstTest(), "Initial test passing")
    })
  })
})