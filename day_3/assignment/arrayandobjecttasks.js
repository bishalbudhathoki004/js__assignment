//1
let noofcolors=["1","2","3","4","5"]
let nameofcolors=["red","green","blue","yellow","purple"]

console.log("3rd color:",nameofcolors[2])
//2
const book={
    title:"JavaScript Basics",
    author:"John Doe",
    pages:"350",
    publishedyear:"2020"
}
console.log("Book Title:",book.title)
console.log("Book Author:",book["author"])  
//3
const updatedBook={...book,isRead:true}
console.log("Updated Book:",updatedBook)
//4
const Students=[
    {name:"Alice",grade:"4"},
    {name:"Bob",grade:"3"},
    {name:"Charlie",grade:"5"}
]
console.log("First Student Name:",Students[0].name)
//5
const Company={
    name:"Tech Solutions",
    location:"New York",
    employees:150
}
console.log("Company Name:",Company.name)
//6
const numbersArray=[10,20,30]
const increaseNumbers=numbersArray.map((num)=>num+5)
console.log("Increased Numbers:",increaseNumbers)
//7
const Car={
    make:"Toyota",
    model:"Camry",
    year:2021
};
const updatedCar={...Car,color:"Blue"}
console.log("Updated Car:",updatedCar)
//8
const updatedShoppingList=[...noofcolors,...nameofcolors];
console.log("Updated Shopping List:",updatedShoppingList)
//9
const Profile={
name:"David",
age:28,
address:{
city:"San Francisco",
country:"USA"
},
}
console.log("Profile City:",Profile.address.city)
//10
const Products=[
    {productName:"Laptop",price:1000},
    {productName:"Phone",price:500},
    {productName:"Tablet",price:300}
]
const expensiveProducts=Products.filter((product)=>product.price>400)
console.log("Expensive Products:",expensiveProducts)