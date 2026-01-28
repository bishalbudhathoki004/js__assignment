// task of day 1

//task 1:
const arr=[1,2,3,4]

function sum(...arr){
  return arr.reduce((total,currentN)=>total+currentN,0)
}

const result=sum(...arr)

console.log("Sum result: ",result)

//task2:

const student={
  name:"Hari",
  age:20,
  address:"KTM",
}

const resultObj={
  isPass:true,
  gpa:3.72
}

//merging two objects using spread operator
const studentProfileObj={
  ...student,
  ...resultObj
}

const {name,age,address,isPass,gpa}=studentProfileObj

console.log("\nStudent details: ")
console.log("Name: ",name)
console.log("Age: ",age)
console.log("Address: ",address)

console.log("Status: ",isPass)
console.log("GPA: ",gpa)











