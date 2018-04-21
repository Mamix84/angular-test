var test = require("tape")
var operations = require("./")

test("operations.sum", function(assert) {
    var a = 1
    var b = 2

    assert.equals(operations.sum(a, b), 3)
    assert.end()
})

test("operations.subtract", function(assert) {
    var a = 1
    var b = 3

    assert.equals(operations.subtract(a, b), -2)
    assert.end()
})

test("operations.multiply", function(assert) {
    var a = 5
    var b = 5

    assert.equals(operations.multiply(a, b), 25)
    assert.end()
})

test("operations.divide", function(assert) {
    var a = 25
    var b = 5

    assert.equals(operations.divide(a, b), 5)
    assert.end()
})