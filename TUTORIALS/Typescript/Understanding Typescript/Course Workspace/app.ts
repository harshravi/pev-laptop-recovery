// function multiply(val1: number, val2: number): number {
//     return val1 * val2;
// }

// function sayHellow(): void {
//     console.log()
// }

// let myMultiply: (val1: number, val2: number) => number;
// // myMultiply = sayHellow
// myMultiply = multiply;
// console.log(myMultiply);

// type Complex = { data: number[], output: (all: boolean) => number[] };


// let complex: Complex = {
//     data: [100, 11, 22],
//     output: function (all: boolean): number[] {
//         return this.data;
//     }
// }
// console.log(complex);

// // function neverReturns(): never {
// //     throw new Error('An error');
// // }
// // neverReturns();

// // let canBeNull = 12;
// // canBeNull = null;


// type backAccountType = { money: number, deposit: (value: number) => void }
// type myself = { name: string, bankAccount: backAccountType, hobbies: string[] }

// let bankAccount: backAccountType = {
//     money: 2000,
//     deposit(value: number): void {
//         this.money += value
//     }
// };

// let myself: myself = {
//     name: "max",
//     bankAccount: bankAccount,
//     hobbies: ["Sports", "cooking"]
// }

// myself.bankAccount.deposit(3000);

// console.log(myself)


// let a = "harsh";
// function reset() {
//     console.log(a)
//     let a = null;
//     console.log(a)
// }
// reset();
// console.log(a);


// Exercise 1 - Maybe use an Arrow Function?
// var double = function (value) {
//     return value * 2;
// };

var double = (value: number) => value * 2
console.log(double(10));




// Exercise 2 - If only we could provide some default values...
var greet = function (name:string = 'harsh') {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
console.log(greet('ani'));



// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
console.log(Math.max(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
newArray.push(...numbers);
console.log(newArray);


// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var [result1,result2,result3] = testResults;
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
console.log(result1, result2, result3);


// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var {firstName,experience} = scientist
// var firstName = scientist.firstName;
// var experience = scientist.experience;
console.log(firstName, experience);


