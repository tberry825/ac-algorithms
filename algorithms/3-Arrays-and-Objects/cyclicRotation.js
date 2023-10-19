/**
1. Read through the function and write comments to explain what is happening in the code.
2. What are the inputs for this function? 
3. What is the expected output?
4. What is happening where rotations = rotations % arrayLength; ?
5. How would you refactor this to NOT use the variable arrayLength?
 */

// the first parameter is expecting an array and the second is expecting a number
function cyclicRotation(array, rotations) {
    var arrayLength = array.length;
    if (arrayLength === 0) {
        return array;
    }
    rotations = rotations % arrayLength; // To handle cases where rotations > arrayLength
    
    for (var i = 0; i < rotations; i++) {
        var lastElement = array.pop();
        array.unshift(lastElement);
    }
    
    return array;
}

// Example usage
var inputArray = [3, 8, 9, 7, 6];
var rotations = 3;
var rotatedArray = cyclicRotation(inputArray, rotations);
console.log(rotatedArray); // Output: [9, 7, 6, 3, 8]