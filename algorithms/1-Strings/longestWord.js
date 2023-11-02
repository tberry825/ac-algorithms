/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

function findLongestWord() { //function to find out the longest word in a string after its inputed in the ()parentheses.
  var words = str.split(' ');  //.split() is used to split the string into an array or words after the word is inputted.
  var longestWordLength = 0;  //used to keep track of the longest word in the string

  
  for (var i = 0; i < words.length; i++) {  //for loop to loop through the string until it finds the longest word
    if (words[i].length > longestWordLength) {  //if the current word is longer than the current longest word update the variable until you get to the longest word 
      longestWordLength = words[i].length;
    }
  }
  
  return longestWordLength; // returns the value stored in the variable longestWordLngth
}

var longestLength = findLongestWord("I hope this sentence works");
console.log(longestLength); 

// // 1. How would we change this to find the shortest word?
// function findShortestWord(str) { 
//   var words = str.split(' ');  //.split() is used to split the string into an array or words after the word is inputted.
//   var shortestWordLength = 0;  //used to keep track of the shortest word in the string
  
//   for (var i = 0; i < words.length; i++) {  //for loop to loop through the string until it finds the shortest word
//     if (words[i].length > shortestWordLengthh) {  //if the current word is shorter than the current shorter word update the variable until you get to the shortest word 
//       shortestWordLength = words[i].length;
//     }
//   }
  
//   return shortestWordLength; 

// }
// console.log(shortestWordLength, longestWordLength)