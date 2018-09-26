var assert = require('assert')

var allVowels = require("../problems/allVowels.js")

describe("Test", function() {
    describe("#allVowels", function() {
        it("should return all vowels from a string in an array", function() {
            assert.equal(allVowels._test.allVowels("Hello World!"), ["e", "o", "o"])
            assert.equal(allVowels._test.allVowels("David?"), ["a", "i"])
            assert.equal(allVowels._test.allVowels("Hello World!"), ["e", "o", "o"])
            assert.equal(allVowels._test.allVowels("Veni, vidi, vici"), ["e", "i", "i", "i", "i", "i"])
            assert.equal(allVowels._test.allVowels("Always forgive your enemies; nothing annoys them so much.", ["A", "a", "o", "i", "e", "o", "u", "e", "e", "i", "e", "o", "i", "a", "o", "e", "o", "u"]))
        })
    })
})