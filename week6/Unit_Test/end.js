// --- Q1 Reverse a string
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//DO NOT USE THE split() method


//using split
const reverse = function(str){
  //turn string into array
  const myArr = str.split('').reverse().join('')
  
  return myArr
  }
  
  
  
  const reverseNoSplit = function(str){
  //create placeholders for return string
  let placeHoder = ''
  
    //iterate over string
    for(let char of str){
      placeHoder = char + placeHoder
    }
  
      //return placeholder
    return  placeHoder
    }
    
  
  
  
  // --- Q2 Count vowels
  // Write a function that returns the number of vowels
  // used in a string.  Vowels are the characters 'a', 'e'
  // 'i', 'o', and 'u'.
  // --- Examples
  //   vowels('Hi There!') --> 3
  //   vowels('Why do you ask?') --> 4
  //   vowels('Why?') --> 0
  
  const returnVowels = (str) => {
    //create array of vowels
    const vowels = ['a','e', 'i', 'o', 'u']
  
    //create counter for return
    let counter = 0

    //create a for loop to iterate over str and increment counter
      for(let i = 0; i < str.length; i++){
        //check if char is in the vowels array and increment counter if so
        if(vowels.includes(str[i])) {
          counter++
        }
      }

      return counter
  }

  
  
  
  
  
  
  // --- Q3 Palidromes
  // Given a string, return true if the string is a palindrome
  // or false if it is not.  Palindromes are strings that
  // form the same word if it is reversed. *Do* include spaces
  // and punctuation in determining if the string is a palindrome.
  // --- Examples:
  //   palindrome("abba") === true
  //   palindrome("abcdefg") === false

  const isPalindrome  = (str) => {
    let backwards = reverse(str)
    if(backwards === str){
        return true
    } else {
      return false
    }
  }

  const isPalindrome2  = (str) => {
   return reverse(str) === str
  }

  
  
  module.exports = {reverse, returnVowels, isPalindrome}