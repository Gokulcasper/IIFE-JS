// Adding two numbers

let no1 = 42434;
let no2 = 42343;

// IIFE - Immediately Invoke Function Expression

// function sumNumber() {
//     let result=no1+no2;
//     console.log("Result : ", result);
//   };
//   sumNumber();

let result = no1 + no2;
(function displayNumber() {
  console.log("Result : ", result);
})();

// (function AddNo(num1, num2) {
//     let result = num1 + num2;
//     console.log(result);
//   })(no1, no2);

// ((num1, num2) => {
//   let result = num1 + num2;
//   console.log(result);
// })(no1, no2);
