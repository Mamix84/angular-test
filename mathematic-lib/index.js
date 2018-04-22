/**
 * Export
 */
var exports = module.exports = {}

/**
 * Sum function
 * Sum num_a and num_b and return the result
 */
exports.sum = function(num_a, num_b) {
	return num_a + num_b;
}

/**
 * Subtract function
 * Subtract num_b from num_a and return the result
 */
exports.subtract = function(num_a, num_b) {
	return num_a - num_b;
}

/**
 * Multiplication function
 * Multiply num_a and num_b and return the result
 */
exports.multiply = function(num_a, num_b) {
	return num_a * num_b;
}

/**
 * Division function
 * Divide num_a with num_b and return the result
 */
exports.divide = function(num_a, num_b) {
	return num_a / num_b;
}

/**
 * Module function
 * Divide num_a with num_b and return the modulo division
 */
exports.module = function(num_a, num_b) {
	return num_a % num_b;
}

/**
 * Exponentiation function
 * Elevates the number num_a to the power of num_b
 */
exports.exp = function(num_a, num_b) {
	return num_a ** num_b;
}

/**
 * Sum array function
 * Get the summation of all item included in the array
 * If array is undefined the result is 0
 */
exports.sumArray = function(num_a) {
	var sum = 0;
	if (num_a && num_a.length > 0) {
		for (i = 0; i < num_a.length; i++) {
			sum = sum + num_a[i];
		}
	} else {
		sum = 0;
	}
	return sum;
}

/**
 * Multiplication array function
 * Execute the multiply of all item included in the array
 * If array is undefined the result is 0
 */
exports.multiplyArray = function(num_a) {
	var prod = 1;

	if (num_a && num_a.length > 0) {
		for (i = 0; i < num_a.length; i++) {
			prod = prod * num_a[i];
		}
	} else {
		prod = 0;
	}

	return prod;
}
