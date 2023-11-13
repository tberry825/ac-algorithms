/**
Take 30 minutes to work on this assignment. Make sure to ask for help if you get stuck. If you need more than 30 minutes, we will have time on Friday. 

Read through the function and write comments to explain what is happening in the code.

 1. How would we change this to find the shortest word?
 2. How would you display the actual word in the console?
 */

function findLongestWord(str) { //function to find out the longest word in a string after its inputed in the ()parentheses.
  let words = str.split(' ');  //.split() is used to split the string into an array or words after the word is inputted.
  let longestWordLength = 0;  //used to keep track of the longest word in the string

  
  for (let i = 0; i < words.length; i++) {  //for loop to loop through the string until it finds the longest word
    if (words[i].length > longestWordLength) {  //if the current word is longer than the current longest word update the variable until you get to the longest word 
      longestWordLength = words[i].length;
    }
  }
  
  return longestWordLength; // returns the value stored in the variable longestWordLngth
}

let longestLength = findLongestWord("My longest sentence goes here");
console.log(longestLength); 

//1. How would we change this to find the shortest word?
function findshortestWord(str) {
  let words = str.split(' ');
  let shortestWordLength = 0;
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > shortestWordLength) {
      shortestWordLength = words[i].length;
    }
  }
  
  return shortestWordLength;
}

let shortestLength = findshortestWord("My shortest sentence goes here");
console.log(shortestLength); 

//2. How would you display the actual word in the console? 
// Initialize variables to store shortest/longest word word (here I'll use the Shortest word code)
function findShortestWord(str) {
  var words = str.split(' ');
  var shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
  }, words[0]);
  return shortest;
}
console.log(findShortestWord("My shortest sentence goes here"));