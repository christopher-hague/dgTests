var assert = require('assert')

var isEven = require("../problems/isEven.js")

describe("Test", function() {
    describe("#isEven", function() {
        it("should determine if the number is even", function() {
            assert.equal(isEven._test.isEven(2), true)
            assert.equal(isEven._test.isEven(3), false)
            assert.equal(isEven._test.isEven(12), true)
            assert.equal(isEven._test.isEven(31), false)
        })
    })
})