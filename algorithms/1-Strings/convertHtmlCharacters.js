/**
1. Read through the function and write comments to explain what is happening in the code.
2. What are the inputs for this function? 
3. What is the expected output?
4. How would we change this to add all of the numbers?
5. Change the function so that all lowercase a's turn to uppercase A's.
 */

// pass in a string that includes one of the following symbols: &, <, >, "", or '



function convertHTML(str) {
  let convertedString = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '&') {
      convertedString += '&amp;';
    } else if (char === '<') {
      convertedString += '&lt;';
    } else if (char === '>') {
      convertedString += '&gt;';
    } else if (char === '"') {
      convertedString += '&quot;';
    } else if (char === "'") {
      convertedString += '&apos;';
    } else {
      convertedString += char;
    }
  }

  return convertedString;
}