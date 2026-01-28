//1.create object with name and object using this
const user = {
    name: "Matina",
greet(){
    console.log("Hello, " + this.name);
}
};
user.greet(); // Output: Hello, Matina

//2.call method from another variable and see undefined
const obj = {
  name: "Alina",
  sayName() {
    console.log(this.name);
  }
};
//const fn = obj.sayName;
//fn(); //  undefined

//3.fix with bind
const fn= obj.sayName.bind(obj);
fn(); //  Alina

//4.create two object and use same method with bind()
const person = {
  sayName() {
    console.log(this.name);
  }
};

const p1 = { name: "Alina" };
const p2 = { name: "shyam" };

const p1Say = person.sayName.bind(p1);
const p2Say = person.sayName.bind(p2);

p1Say(); // Alina
p2Say(); // shyam

//5.use this inside a click handler
const person1 = {
  name: "Alisha",
  handleClick() {
    alert(this.name);
  }
};
button.addEventListener("click", person1.handleClick.bind(person1));

