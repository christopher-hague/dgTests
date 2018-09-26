var assert = require('assert')

var isOdd = require("../problems/isOdd.js")

describe("Test", function() {
    describe("#isOdd", function() {
        it("should determine if the number is odd", function() {
            assert.equal(isOdd._test.isOdd(21), true)
            assert.equal(isOdd._test.isOdd(30), false)
            assert.equal(isOdd._test.isOdd(121), true)
            assert.equal(isOdd._test.isOdd(312), false)
        })
    })
})