/**
Write a JavaScript function that takes an array of objects and a property name as input, along with a condition, and returns a new array of objects that satisfy the specified condition based on the property's values.

Input:
    1. An array of objects.
    2. A property name by which the objects should be filtered.
    3. A condition to filter the objects (for example, greater than, less than, equal to, etc.).
Output:
    A new array of objects that satisfy the specified condition based on the property's values.

 */

/**
Steps:
1. Use the Array.prototype.filter() method to filter the array of objects.
2. Pass a filtering function to filter() that checks the specified property values against the given condition.
3. The filtering function takes an object as a parameter, accesses the specified property, and evaluates the condition.
4. Return the filtered array of objects.
 */

function filterObjectsByProperty(arr, propName, condition) {
    // Step 1: Use the filter() method with a filtering function
    return arr.filter(function(obj) {
        // Step 2 and 3: Evaluate the specified property based on the given condition
        return condition(obj[propName]);
    });
}

// Example usage
const employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Eva", salary: 48000 },
    { name: "David", salary: 55000 }
];
const filteredEmployees = filterObjectsByProperty(employees, "salary", salary => salary > 50000);
console.log(filteredEmployees);
// Output: [{ name: "Bob", salary: 60000 }, { name: "David", salary: 55000 }]
