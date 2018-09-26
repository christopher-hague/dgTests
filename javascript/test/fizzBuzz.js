var assert = require('assert')

var fizzBuzz = require("../problems/fizzBuzz.js")

describe("Test", function() {
    describe("#FizzBuzz", function() {
        it("Should return 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, and 'FizzBuzz' if divisible by both 3 and 5", function() {
            assert.equal(fizzBuzz._test.fizzBuzz(3), "Fizz")
            assert.equal(fizzBuzz._test.fizzBuzz(5), "Buzz")
            assert.equal(fizzBuzz._test.fizzBuzz(15), "FizzBuzz")
            assert.equal(fizzBuzz._test.fizzBuzz(20), "Buzz")
            assert.equal(fizzBuzz._test.fizzBuzz(17), false)
        })
    })
})