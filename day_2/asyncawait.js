let mylastpromise = new Promise(
    (resolve, reject) => {
        let volibatapadhxu=false;
        if(volibatapadhxu){
            resolve("ohomailepadhe")
        }else{
            reject("hetteriiikaaa")
        }
    }
)

//using async await for this promise
//async => function that returns a promise
//await => wait for a promise to be resolved or rejected
let myasuncfunction = async() => {
    return mylastpromise
}

try{
let result=await myasuncfunction()
console.log("result=",result)

}
catch(e){
console.log("error inside catch block= ",e)
}finally{
    console.log("finally block executed")
}
console.log("after async await")