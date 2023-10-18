/**
1. Read through the function and write comments to explain what is happening in the code.
2. What are the inputs for this function? 
3. What is the expected output?
4. Turn the output into a sentence: "a is not bigger than b", or "a is bigger"
 */


//pass in numbers for both a and b 

function isBigger(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return -1;
    } else if (a > b) {
        return true;
    } else if (a < b) {
        return false;
    } else {
        return 0;
    }
}

