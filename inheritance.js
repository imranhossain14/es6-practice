// class er name upper case diye start hoy
class Parent{
    constructor(){
        this.fatherName ="Schwerznegger";
        
    }
}
// parents er sathe connect korte extend korbo child class ta
class Child extends Parent{
    constructor(name){
        super(); // er mane jake inherit kortese tar constructor chole asbe
        this.name = name;  // create property
        
    }
    // class er vitor function create korte just name dite hoy .function lekha lage na
    getFullName(){
        return `${this.name} ${this.fatherName} `;
    }
}             
const baby = new Child("Chowa");
const baby2 = new Child("Moni");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());