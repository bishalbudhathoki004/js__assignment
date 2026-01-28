//synchronous code or flow
console.log("A")
console.log("B")
console.log("C")

//asking promise or asynchronous code or flow
console.log("D")
setTimeout(() => {
console.log("E")
},2000);
console.log("F")    

//promise example
let promise = new Promise((resolve, reject) => {
let iwillfinishthework=false;
if(iwillfinishthework){
    resolve("i finished the work")
}else{
    reject("sorry,i am too lazy")
}
}
)

//using promise
console.log("processing promise....")
//consuming promise
promise.then(
    (result) => {console.log(result)
    }

).catch(
    (error) => 
        {console.log(`error:${error}`)
        }
).finally(
    () => {console.log("finally")

    }
)
console.log("after promise")

