class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Rajuk College";
    }

}

// create object by class
const student1 = new Student(12, "Imran");
const student2 = new Student(22, "Eshan");
console.log(student1, student2);

// access class property 

console.log(student1.name, student2.id);
console.log(student1);