class Vehicle {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    move() {
        console.log(this.name + "is moving");
    }
}
let car = new Vehicle("Toyota", "Corolla", 2020);
car.move(); // Output: Toyota is moving
console.log("name=", car.name);
console.log("model=", car.model);
console.log("year=", car.year);

class Bike extends Vehicle {
    constructor(Bikename) {
        super(Bikename);
    }
   //this move function overrides the move function in Vehicle class
    move() {
        console.log(this.name + " is ridiing");
    }
}
let bike = new Bike("Yamaha");
bike.move(); // Output: Yamaha is moving

class Student {
    constructor(name, age, grade,marks) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.marks=marks;
    }
}
let student1 = new Student("Alish", 20, "A",60);
console.log("Student Name:", student1.name);
console.log("Student Age:", student1.age);
console.log("Student Grade:", student1.grade);
console.log("Student Marks:", student1.marks); // Output: undefined

