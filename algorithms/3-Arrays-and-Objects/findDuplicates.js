/**
Take 45 minutes to complete this exercise. If you need more time, you can use Focus Friday.  
 
Write a JavaScript function that takes an array of integers as input and returns true if there are any duplicate elements in the array, and false otherwise.

Input:
    1. An array of integers.
Output:
    true if there are duplicates in the input array; false otherwise.
 */

/**
Steps:
1. Create an empty object to store encountered numbers.
2. Iterate through the input array.
3. For each number, check if it already exists in the object.
4. If the number is found, there is a duplicate, so return true.
5. If the number is not found, add it to the object.
6. After iterating through the entire array, if no duplicates are found, return false.
 */

/* Start of the Pseudo code...
--------------------------------------------------------------
input: need an array input into the object
output: return true or false according to the loop outcome
-------------------------------------------------------------
*Pseudo Code*
-create an empty object
 - -creact a variable that equals to an empty object
iterate means to do something over again or repeat. 
-create a for loop to iterate through the array
 - -create a condition, (if statement)  to determine the output
-return condition result
*/

function hasDuplicates(arr) {
    let numCount = {}; //1. Create an empty object to store encountered numbers.
    for (let i = 0; i < arr.length; i++) { //For loop #3-#5
        if (numCount[arr[i]] !== undefined) {
            return true;
        } else {
            numCount[arr[i]] = 1;
        }
    }
    return false; //#6
}

// Example usage
const numbers1 = [1, 2, 3, 4, 5, 6];  //we created two variables to store the array numbers1 to store an array of numbers to check for duplicates
const numbers2 = [1, 2, 3, 4, 2, 6];  //we created two variables to store the array numbers2 to store an array of numbers to check for duplicates
console.log(hasDuplicates(numbers1)); // Output: false
console.log(hasDuplicates(numbers2)); // Output: true
