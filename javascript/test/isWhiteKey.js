var assert = require('assert')

var isWhiteKey = require("../problems/isWhiteKey.js")

describe("Test", function() {
    describe("#isWhiteKey", function() {
        it("should determine if the note passed is represented by a white key on a piano", function() {
            assert.equal(isWhiteKey._test.isWhiteKey("a"), true)
            assert.equal(isWhiteKey._test.isWhiteKey("e"), true)
            assert.equal(isWhiteKey._test.isWhiteKey("c#"), false)
            assert.equal(isWhiteKey._test.isWhiteKey("f#"), false)
        })
    })
})