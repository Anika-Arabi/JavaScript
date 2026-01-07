console.log("Day 05");
//1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
// *
// * *
// * * *
// * * * *
// * * * * *

for (let row = 1; row <= 5; row++) {
  let starPrint = "";
  for (let star = 1; star <= row; star++) {
    starPrint += "* ";
  }
  console.log(starPrint);
}

// for (let row = 1; row <= 3; row++) {
//   let starPrint = "";
//   for (let col = 1; col <= row + 2; col++) {}
//   console.log(starPrint);
// }

//2. Craete Multiplication Table (Using for loop)
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30
let N = 2;
for (i = 1; i <= 10; i++) {
  console.log(`${N} X ${i} =`, N * i);
}

//3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
let ans = 0;
for (i = 1; i <= 500; i++) {
  if (i % 2 !== 0) ans += i;
}
console.log(ans);

//4. Skipping Multiples of 3
//Write a program to print numbers from 1 to 20, but skip multiples of 3.

for (i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

//5. Reverse Digits of a Number (Using while loop)
// Write a program to reverse the digits of a given number using a while loop.

// Example:

// Input: 6789
// Output: 9876

let input = "6789";
let counter = input.length - 1;
let reversed = "";

while (counter >= 0) {
  reversed += input.charAt(counter);
  counter--;
}

console.log(reversed);
