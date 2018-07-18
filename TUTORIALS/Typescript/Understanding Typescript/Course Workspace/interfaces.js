"use strict";
function greets(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    console.log("Hello, " + person.firstName);
}
var person = {
    firstName: "Max",
    hobbies: ['cooking', 'sport'],
    greets: function (lastName) {
        console.log("Hi" + this.firstMyName + " " + lastName);
    }
};
changeName(person);
greets(person);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greets = function (lastName) {
        console.log("Hi,I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "maxmilian";
greets(myPerson);
myPerson.greets("harsh");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Sonu",
    greets: function (lastName) {
        console.log("hello");
    }
};
console.log(oldPerson);
