let noOfStones=[34,56,78,21]
let stones=["limestone","marble","granite","sandstone"]
let ratios=[1.6,1.999,2.3,4.5]
let mergedArray=[...noOfStones,...stones,...ratios]
console.log("merged array:", mergedArray)
//for loop to print each element of mergedArray
for(let i=0;i<mergedArray.length;i++){
    console.log(`Index of ${i} is :${mergedArray[i]}`)
}
//foreach example
mergedArray.forEach((element,index)=>{
console.log("element:",element)
console.log("index:",index)
}
)


