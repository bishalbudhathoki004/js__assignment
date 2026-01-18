let myobj = {
    fullname: "matina shrestha",
    address:"bhaktapur",
    phonenumber: 9876543210,
    age: 20,
    gender:"female"
}

//converting keysvalue pair to array of keys
let keys=Object.keys(myobj)
console.log(`keys:${keys}`)
//to array of values
let values=Object.values(myobj)
console.log(`values:${values}`)
//array of entries
let entries=Object.entries(myobj)
console.log(entries)

//for each in entries
//let [a,b]=[`fullname`,`matina shrestha`]
entries.forEach(
    ([key,value],index)=>{
    console.log("index:",index)
    console.log(`key:${key}`,`value:${value}`)
})

//filter
let numbers=[1,2,3,4,5]
//filter example
let filterArray=numbers.filter(
    (ele,index)=>{ 
        console.log("ele:",ele)
        console.log("index:",index)
        return ele>3;
})
console.log("filterArray:",filterArray)

//reduce example:reduce accumulated the all elements to one value
let sum=numbers.reduce(
(accumulated,currentvalue)=>{
    return accumulated+currentvalue
},0
//initial value of accumulated is 0
)
console.log("totalsum:",sum)

//find example:find first element matching the condition
let findElement=numbers.find(
    (ele)=>{
        return ele%2==0
    }
)
console.log("even number:",findElement)

let mydata=[
    {day:34,price:100,task:"sabji kinne",area:"ktm"},
    {day:45,price:600,task:"tarkari kinne",area:"tarkari bajar"},
    {day:66,price:350,task:"film herne",area:"bhatbhateni"},
    {day:1,price:0,task:"sutne",area:"niji niwas"},
]
//using find
let findElements=mydata.find(
    (Element)=>{
        return Element.price==0
    }
)
console.log(" price equals to 0:",findElements)

//using filter
let filteredtask= mydata.filter(
    (ele,index)=>{
        return ele.day<60
    }
)
console.log("filteredtask less than 60 days:",filteredtask)

//using reduce
let totalprice=mydata.reduce(
    (accumulated,currentvalue)=>{
    return accumulated+currentvalue.price
},0
)
console.log("totalprice:",totalprice)