// async keyword tells that this function is async
// await makes it wait untill the promise is resolved 


// async functions return promises 
const getSomething = async (resource) => {
    
    
    console.log("WAITING FOR RESPONSE !") ; 
    const response = await fetch(resource) ;
    if (response.status !== 200) {
        throw new Error("Error fetching data") ;
    }
    const data = await response.json()
    return { "data" : data , "status" : response.status} 
}


getSomething("todos/1.json")
    .then( (data) => {
        console.log(data.status, "Response 1 arrived") ;
        setTimeout( ()=> {
            console.clear() ;
            console.log("Here is your requested data \n", data.data)
            getSomething("todos/2.json")
                .then( (data) => {
                    console.log(data.status, "Response 2 arrived") ;
                    setTimeout( ()=> {
                        console.clear() ;
                        console.log("Here is your requested data \n", data.data)
                        
                    },3000)

         
    }).catch( err => console.log("ERROR IN 2", err.message))      
        },3000)

         
    }).catch( err => console.log("ERROR IN 1", err.message && err))