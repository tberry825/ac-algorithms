/**
 Problem Statement:
Write a JavaScript function that takes an array of objects and a property value as input, and returns the first object in the array that has a property matching the given value.

Input:
    An array of objects.
    A property value to search for.
Output:
    The first object in the input array that has a property matching the given value, or null if no such object is found.
 */

/**
Steps:
1. Iterate through the array of objects using a     loop.
2. For each object in the array, check if the object's property (specified by the input property name) matches the given property value.
3. If a matching object is found, return that object.
4. If no matching object is found after iterating through the entire array, return null.
 */

function findObjectById(arr, propName, targetValue) {
    // Step 1: Iterate through the array of objects
    for (let i = 0; i < arr.length; i++) {
        // Step 2: Check if the object's property matches the targetValue
        if (arr[i][propName] === targetValue) {
            // Step 3: If a match is found, return the object
            return arr[i];
        }
    }

    // Step 4: If no matching object is found, return null
    return null;
}

// Example usage
const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
];
const productId = 2;
console.log(findObjectById(products, "id", productId)); 
// Output: { id: 2, name: "Smartphone", price: 500 }

    