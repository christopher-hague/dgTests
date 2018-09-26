var assert = require('assert')

var length = require("../problems/length.js")

describe("Test", function() {
    describe("#length", function() {
        it("should return the length of the passed array", function() {
            assert.equal(length._test.length([1,2,3,4,5]), 5)
            assert.equal(length._test.length([1,2,3,4]), 4)
            assert.equal(length._test.length([1,2]), 2)
        })
    })
})