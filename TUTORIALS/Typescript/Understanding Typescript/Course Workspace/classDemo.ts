// class Persion {
//     name: string;
//     private type: string;
//     protected age: number = 27;
//     constructor(name: string, public username: string) {
//         this.name = name;
//     }
//     printAge() {
//         console.log(this.age);
//     }
//     private setType(type: string) {
//         this.type = type;
//         console.log(this.type);
//     }
// }
// // const persion = new Persion("Max","max")
// // console.log(persion.name, persion.username);
// // persion.printAge();
// // persion.printAge("cool guy"); //won't work because it is a private method

// //Inheritance

// // class Max extends Persion{
// //     name = "Harsh"
// // }

// // const max = new Max('saurav','sujata');
// // console.log(max);


// class Max extends Persion {
//     constructor(usename: string) {
//         super('SANJAY', usename);
//         this.age = 31;
//         console.log(this.type);
//         this.printAge();
//     }

// }

// const max = new Max('saurav');
// console.log(max);



// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;

//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };

//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }

class Car {
    name: string;
    acceleration: number = 0;
    constructor(name: string) {
        this.name = name;
        // this.acceleration = 0
    }
    honk() {
        console.log("Toooooooooot!");
    }
    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());


class baseObject {
    width: number;
    length: number;
    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }
}

class Rectancgle extends baseObject {
    calcSize() {
        return this.width * this.length;
    }
}

let rectangle = new Rectancgle(5, 2);
console.log('rectangle size :', rectangle.calcSize());



// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// Exercise based on getter and setter
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);


class Persion {
    private _firstName: string = "";
    //firstName here look like method but we access it like a property, this is used to get the value 
    get firstName() {
        return this._firstName;
    }
    //firstName here look like method but we access it like a property this use to set a the value
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = 'less than the length 3';
        }
    }
}

const persion = new Persion();
console.log(persion.firstName);
persion.firstName = "ha";
console.log(persion.firstName);
persion.firstName = "harsh";
console.log(persion.firstName);

function SlowFunction(){
    console.log('hi');
}


async function doAsyncWork() {
  let result = await SlowFunction();
  console.log('my new result: ' + result);
}







// async function() doAsyncWork(){
//     let result = await SlowFunction();
// }