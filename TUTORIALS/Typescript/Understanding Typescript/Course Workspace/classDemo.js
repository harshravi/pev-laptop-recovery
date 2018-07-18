"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
        // this.acceleration = 0
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
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
var baseObject = /** @class */ (function () {
    function baseObject(width, length) {
        this.width = width;
        this.length = length;
    }
    return baseObject;
}());
var Rectancgle = /** @class */ (function (_super) {
    __extends(Rectancgle, _super);
    function Rectancgle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectancgle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectancgle;
}(baseObject));
var rectangle = new Rectancgle(5, 2);
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
var Persion = /** @class */ (function () {
    function Persion() {
        this._firstName = "";
    }
    Object.defineProperty(Persion.prototype, "firstName", {
        //firstName here look like method but we access it like a property, this is used to get the value 
        get: function () {
            return this._firstName;
        },
        //firstName here look like method but we access it like a property this use to set a the value
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = 'less than the length 3';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Persion;
}());
var persion = new Persion();
console.log(persion.firstName);
persion.firstName = "ha";
console.log(persion.firstName);
persion.firstName = "harsh";
console.log(persion.firstName);
function SlowFunction() {
    console.log('hi');
}
function doAsyncWork() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, SlowFunction()];
                case 1:
                    result = _a.sent();
                    console.log('my new result: ' + result);
                    return [2 /*return*/];
            }
        });
    });
}
// async function() doAsyncWork(){
//     let result = await SlowFunction();
// }
