/*

READ THROUGH ALL COMMENTS CAREFULLY

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

let result = dashInsert("454793");
console.log(result) // "4547-9-3"

let result = dashInsert("44");
console.log(result) // "44"

let result = dashInsert("0");
console.log(result) // "0"

let result = isBigger("13");
console.log(result) // "1-3"

**/

/**
 Read through the function and write comments to explain what is happening in the code.

 How would we change this to put the dash between even numbers?
 */

function dashInsert(str) {
    var output = '';
    for (var i = 0; i < str.length - 1; i++) {
        var currentDigit = parseInt(str[i]);
        var nextDigit = parseInt(str[i + 1]);
		output += currentDigit;
        if (currentDigit % 2 !== 0 && nextDigit % 2 !== 0) {
            output += '-';
        }
    }
    output += str[str.length - 1];
    return output;
}

// Example usage
var result1 = dashInsert("454793");
console.log(result1); // Output: "4547-9-3"

var result2 = dashInsert("44");
console.log(result2); // Output: "44"

var result3 = dashInsert("0");
console.log(result3); // Output: "0"

var result4 = dashInsert("13");
console.log(result4); // Output: "1-3"
