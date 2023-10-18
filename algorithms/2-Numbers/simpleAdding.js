/**
1. Read through the function and write comments to explain what is happening in the code.
2. What are the inputs for this function? 
3. What is the expected output?
4. Change the function so that the console reads "Please try again with a number"
 */

//pass in a number when calling the function

function simpleAdding(a) {
	if (a < 0) {
	  return 0;
	}
  
	let sum = 0;
	for (let i = 0; i <= a; i++) {
	  sum += i;
	}

	if (typeof a === 'undefined' || typeof a !== 'number' || isNaN(a)) {
		return 0;
	  }

	if (!Number.isInteger(a)) {
		a = Math.floor(a);
	  }  
  
	return sum;
  }
  
  