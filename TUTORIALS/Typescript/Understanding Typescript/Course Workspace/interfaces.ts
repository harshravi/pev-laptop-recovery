interface NamedSpace {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greets(lastName: string): void;
}

function greets(person: NamedSpace) {
    console.log("Hello, " + person.firstName)
}

function changeName(person: NamedSpace) {
    console.log("Hello, " + person.firstName)
}

const person = {
    firstName: "Max",
    hobbies: ['cooking', 'sport'],
    greets(lastName: string) {
        console.log("Hi" + this.firstMyName + " " + lastName)
    }
};

changeName(person)
greets(person)

class Person implements NamedSpace {
    firstName: string;
    greets(lastName: string) {
        console.log("Hi,I am " + this.firstName + " " + lastName)
    }
}

const myPerson = new Person()
myPerson.firstName = "maxmilian";
greets(myPerson);
myPerson.greets("harsh");






/// function type

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;

myDoubleFunction = function(value1:number, value2: number){
    return (value1+value2)*2
}
console.log(myDoubleFunction(10,20));



///interface Inheritance

interface AgedPerson extends NamedSpace{
        age:number
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Sonu",
    greets(lastName: string){    
        console.log("hello")
    }
}
console.log(oldPerson);