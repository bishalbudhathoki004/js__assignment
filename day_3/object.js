//object key-value pair example
const person={
    name:"John",
    age:30,
    ismarried:true
}
//extracting values from object
//1.bracket notation
let name=person["name"]
console.log(`name:${name}`)

//2.dot notation[recommended]
let n1=person.name
console.log(`name1:${n1}`)

//3.adding new key property
person.gender="male"
console.log(person)

//4.updating existing key property
person.age=31
console.log(person)

//5.deleting key property
delete person.ismarried
console.log(person)

//6.merging two objects
let obj1={
    name:"john",
    age:30
}
let obj2={
    ismarried:true,
    gender:"male"
}
let obj3={...obj1,...obj2}
console.log(obj3)
let obj4={
    address:"ktm",...obj2
}
console.log(obj4)

//7.converting object to array
//key:value pair or entry array
let entries=Object.entries(obj4)
console.log(`entries:${entries}`)
//keys array
let keys=Object.keys(obj4)
console.log(`keys:${keys}`)
//values array
let values=Object.values(obj4)
console.log(`values:${values}`)

//8.for loop to print each key-value pair
for(let i=0;i<keys.length;i++){
    console.log(`key is:${keys[i]} and value is:${obj4[keys[i]]}`)
}
//9.foreach to print each key-value pair
keys.forEach((key)=>{
    console.log(`key is:${key} and value is:${obj4[key]}`)
})

//foreach in entries 
entries.forEach((entry,index)=>{
    console.log(`entry:${entry},index:${index}`)
})
values.forEach((ele,i)=>{
    console.log(`element:${ele},index:${i}`)
})
//[kathmandu,true,male]
let uppercasedValues=values.map((element,index)=>{
   
        return element.toString().toUpperCase()
    }
)
//converting array:["KATHMANDU","TRUE","MALE"]
console.log(`uppercased values:${uppercasedValues}`)

