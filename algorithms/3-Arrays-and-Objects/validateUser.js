/**
Please take 45 minutes to complete this exercise. If you still need more time, you can use Focus Friday.

Write a JavaScript function that takes a list of registered users (an array of objects containing usernames and passwords) and a username and password as input. The function should return true if the provided username and password match any of the registered users, and false otherwise.

Input:
    1. An array of objects containing registered users' information (username and password).
    2. A username and password to validate.
Output:
    true if the provided username and password match any registered user; false otherwise.
 */

/**
Steps
1. Use the Array.prototype.some() method to check if any object in the registered users list has a matching username and password.
2. The some() method takes a function that checks if the given username and password match any object in the array.
3. Return true if a matching user is found; false otherwise.
 */

/* Pseudo Code
--The Javascript arr.some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument method.
--syntax for .some():
--arr.some(callback(element,index,array),thisArg)

--you have an array registeredUsers containing user objects. The username variable is set to "user1" and the password variable is set to "password123". When you call validateUserCredentials(registeredUsers, username, password), it checks if there is a user in the registeredUsers array with the username "user1" and password "password123". Since there is a match, the function returns true.
*/


function validateUserCredentials(users, inputUsername, inputPassword) {
    // Use the Array.prototype.some() method to check if any object in the registered users list matches the provided username and password.
    return users.some(function(user) {
        return user.username === inputUsername && user.password === inputPassword;
    });
}

// Example usage
const registeredUsers = [
    { username: "user1", password: "password123" },
    { username: "user2", password: "secretword" },
    { username: "admin", password: "admin123" }
];
const username = "user1";
const password = "password123";
console.log(validateUserCredentials(registeredUsers, username, password)); // Output: true
