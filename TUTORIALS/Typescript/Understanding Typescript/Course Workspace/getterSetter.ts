class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }
    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "default"
        }
    }
}

let plant = new Plant();
console.log(plant.species);

plant.species = "Tulshi"
console.log(plant.species);



// Abstract Class
abstract class Project{
    projectName: string = "Default";
    budget: number;

    abstract changeName(name: string): void;

    calcBudget(){
        return this.budget*2;
    }
}

class ITProject extends Project{
    changeName(name:string):void{
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("support IT Project");
// console.log(newProject);






//Private constructor
class OnlyOne{
    private static instance: OnlyOne;
    private constructor(public name: string){}

    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance =  new OnlyOne('The Only One')
        } 
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne("the only one");
let right = OnlyOne.getInstance();
console.log(right);