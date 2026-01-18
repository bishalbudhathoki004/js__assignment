let fetchAllPosts=async()=>{
try{
    console.log("fetching..")
    let response=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await response.json()
    console.log("data:",data)
}catch(err){
console.log("err:", err)
}finally{
    console.log("Done")
}
}
fetchAllPosts()