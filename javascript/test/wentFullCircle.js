var assert = require('assert')

var wentFullCircle = require("../problems/wentFullCircle.js")

describe("Test", function() {
    describe("#wentFullCircle", function() {
        it("should, when given a set of coordinates, determine if you end in the same position you began", function() {
            assert.equal(wentFullCircle._test.wentFullCircle(["n", "n"]), false)
            assert.equal(wentFullCircle._test.wentFullCircle(["n", "s", "s", "n"]), true)
            assert.equal(wentFullCircle._test.wentFullCircle(["n", "s", "e", "w", "s", "s", "e", "n", "w", "n"]), true)
        })
    })
})