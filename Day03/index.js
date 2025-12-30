console.log("Day 03");

//1. Odd or Even
let number = 10;
if (number % 2 === 0) {
  console.log("Even Number.");
} else {
  console.log("Odd Number.");
}

//2. Do you have a Driving License?
let age = 20;
if (age >= 18) {
  console.log("Eligible to get driving license");
} else {
  console.log("Not Eligible to get driving license");
}

//3. Calculate CTC with a Bonus
let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;
let bonus = (annualSalary * 20) / 100;
let CTC = annualSalary + bonus;
console.log(CTC);

//4. Write a program for the Traffic Light Simulation.
let color = "Red";

if (color === "Red") {
  console.log("STOP");
} else if (color === "Green") {
  console.log("GO");
} else {
  console.log("Invalid color");
}

//5. Create an Electricity Bill Calculator
let unit = 150;
let unitConsumePerDay = 15;
let unitConsumePerMonth = unitConsumePerDay * 30;
let totalBillPerMonth = unitConsumePerMonth * unit;
let discount = (totalBillPerMonth * 20) / 100;
let annualPayment = totalBillPerMonth - discount;
console.log(annualPayment);

//6. Leap Year Checker
let year = 2025;
if (year % 4 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}
//ternary operator
let result = year % 4 === 0 ? "Yes Leap Year" : "Not Leap Year";
console.log(result);

//7. Max of Three Numbers
let x = 10,
  y = 5,
  z = 70;
if (x > y && x > z) {
  console.log("Max number is X");
} else if (y > x && y > z) {
  console.log("Max number is y");
} else console.log("Max number is z");

//8.Bitwise Doubling
let count = 5;
console.log(count << 1);
