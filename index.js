function isPalindrome(word) {
  // Write your algorithm here

  let letterOfWords = word.split('') // ['k','u','d']
  let letterOfWordsReversed = [...letterOfWords].reverse() // ['d','u','k']

let isItPalindrome = true

  for(let i = 0; i < letterOfWords.length; i++){
    if(letterOfWords[i] !== letterOfWordsReversed[i]){
      isItPalindrome = false
    }
  }
  return isItPalindrome
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
