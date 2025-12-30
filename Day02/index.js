console.log("Day 02");

// Variables: Variables are used to store data in javaScript.

//✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.

let personName = "Anika";
let age = 28;
let isStudent = false;
let favProgLang = "JavaScript";

//✅ Task 2: Print the values to the console.
console.log(personName);
console.log(age);
console.log(isStudent);
console.log(favProgLang);

//Task 3: Try reassigning values to let and const variables and observe errors.
//var
var fruit = "Banana";

function writeFruitName() {
  var fruit = "Mango";
  // console.log(fruit);
}
writeFruitName();
console.log(fruit);

//let
let fruit2 = "Lichi";
fruit2 = "Apple";
function writeFruitName2() {
  let fruit2 = "Orange";
  console.log(fruit2);
}
writeFruitName2();
console.log(fruit2);

//const
const PI = 3.1416;
console.log(PI);

//Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
//Object
let Person = {
  name: "Eshita",
  age: 22,
  isStudent: false,
  favProgLang: "JS",
};
console.log(Person.name);
console.log(Person.age);
console.log(Person.isStudent);
console.log(Person.favProgLang);

Person.hobby = "Coding";
console.log(Person.hobby);

delete Person.age;
console.log(Person);

if ("name" in Person) {
  delete Person.name;
}
console.log(Person);

//Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

cars[5] = "Toyota";
console.log(cars);

let size = cars.length;
console.log(size);

let CarList = cars.toString();
console.log(CarList);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let myList = fruits.toString();
console.log(myList);

let fruitAt = fruits.at(2);
console.log(fruitAt);
console.log(fruits.join(" * "));
console.log(fruits.pop());
fruits.push("Lichi");
console.log(fruits);
