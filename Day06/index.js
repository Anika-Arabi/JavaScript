console.log("Day 06");

//1. Write a Function to Convert Celsius to Fahrenheit
function ConvertCelsiusToFahrenheit(Celsius) {
  let fahrenheit;
  fahrenheit = (Celsius * 9) / 5 + 32;
  return fahrenheit;
}
FahrenheitValue = ConvertCelsiusToFahrenheit(30);
console.log(FahrenheitValue);
//console.log(ConvertCelsiusToFahrenheit(34));

//2. Create a Function to Find the Maximum of Two Numbers
function maxFind(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}
let result = maxFind(-10, -5);
console.log(result);

//3. Function to Check if a String is a Palindrome
function isPalindrome(name) {
  let output = "";
  for (i = name.length - 1; i >= 0; i--) {
    output += name.charAt(i);
  }
  console.log(output);
}
isPalindrome("anika");

//4. Write a Function to Find Factorial of a Number
function factorial(n) {
  let output = 1;
  for (i = n; i >= 1; i--) {
    output *= i;
  }
  console.log(`${n}! = ${output}`);
}
factorial(5);

//5.Write a function to Count Vowels in a String

function countVowels(str) {
  let len = str.length - 1;
  let count = 0;
  for (i = 0; i <= len; i++) {
    let ch = str[i].toLowerCase();
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      count++;
    }
  }
  console.log(count);
}
countVowels("Anika");

//6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
function capitalizeWords(sentence) {
  let separateWord = sentence.split(" ");
  let capitalizedWord = "";
  for (i = 0; i <= separateWord.length - 1; i++) {
    capitalizedWord += separateWord[i].toUpperCase() + " ";
  }
  console.log(capitalizedWord);
}
capitalizeWords("my name is anika");

//7. Use an IIFE to Print “Hello, JavaScript!”

// let JS = "JavaScript";
// (() => console.log("Hello", JS))();
((JS) => console.log("Hello", JS))("JavaScript");

//8. Create a Simple Callback Function
function greet(name, callback) {
  console.log(`Hello, my name is ${name}`);
  callback(name);
}

function Hello(name) {
  console.log(`hi ${name}`);
}
greet("Anika", Hello);
