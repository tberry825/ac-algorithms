/**
 Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 3. How would we change this to put the dash between even numbers?
 */


// pass in a string of numbers for str, eg: "13598347" or "873" or "4"
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
