/**
 Write a JavaScript function that takes an array of objects and a property name as input and returns a new array of objects sorted in ascending order based on the specified property's values.

Input:
    An array of objects.
    A property name by which the objects should be sorted.
Output:
    A new array of objects sorted in ascending order based on the specified property's values.
 */

    function sortObjectsByProperty(arr, propName) {
        
    }
    
    // Example usage
    const students = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 22 },
        { name: "Eva", age: 28 },
        { name: "David", age: 20 }
    ];
    const sortedStudents = sortObjectsByProperty(students, "age");
    console.log(sortedStudents);
    // Output: [{ name: "David", age: 20 }, { name: "Bob", age: 22 }, { name: "Alice", age: 25 }, { name: "Eva", age: 28 }]
    