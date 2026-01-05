console.log("Day 04");

//1. What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
//Output ::It's a normal day.
//Because JavaScript is a case-sensitive language. That means the variable value day = "Monday" and "monday" two different value.

//2. Build an ATM Cash Withdrawal System

let WithdrawalAmount = prompt("Enter withdrawal amount");
if (WithdrawalAmount % 100 === 0) {
  console.log("Withdrawal successful");
} else if (WithdrawalAmount % 100 !== 0) {
  console.log("Invalid amount");
}

//3. Build a Calculator with switch-case
let firstNum = 100;
let secondNum = 20;
let operatorSymbol = prompt(
  `Which operator you will perform with ${firstNum} and ${secondNum}`
);

switch (operatorSymbol) {
  case "+":
    console.log(`${firstNum} + ${secondNum} = `, firstNum + secondNum);
    break;
  case "-":
    console.log(`${firstNum} - ${secondNum} = `, firstNum - secondNum);
    break;
  case "*":
    console.log(`${firstNum} * ${secondNum} = `, firstNum * secondNum);
    break;
  case "/":
    console.log(`${firstNum} / ${secondNum} = `, firstNum / secondNum);
    break;
  default:
    console.log("Invalid Operator");
}

//4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:

// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age

let YourAge = prompt("Enter your age here.");
if (YourAge > 60) {
  console.log("Ticket price is $8.");
} else if ((YourAge <= 60) & (YourAge >= 18)) {
  console.log("Ticket price is $10.");
} else if (YourAge < 18) {
  console.log("Ticket price is $3.");
}

//5. Horoscope Sign Checker
let month = prompt("Enter your birth month.");

switch (month) {
  case "January":
  case "February":
    console.log("Aries");
    break;
  case "March":
  case "April":
    console.log("Taurus");
    break;
  case "May":
  case "June":
    console.log("Gemini");
    break;
  default:
    console.log("Invalid Month");
}

//6. A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
let a = 20;
b = 10;
c = 30;

if (a === b && a === c && b === c) {
  console.log("Equilateral Triangle");
} else if (a === b || a === c || b === c) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
