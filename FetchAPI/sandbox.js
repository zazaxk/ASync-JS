const getSomething = (resource, resource2) => {
    
    
    console.log("WAITING FOR RESPONSE !") ; 
    fetch(resource).then(
        (response) => {
            console.log(response.status, "Response 1 arrived")
            return response.json()
            
        }
    ).then( (data) => {
        return new Promise((resolve, reject) => {
            
            setTimeout(() => {
                console.clear()
                console.log("Here is your requested data",data)
                
                resolve(resource2)
            },3000)
          }).then( data => fetch(data))
        
    } ).then(
        (response) => {
            console.log(response.status, "Response 2 arrived")
            return response.json()
            
        }
    ).then( (data) => {
        setTimeout(() => {
            console.clear()
            console.log("Here is your requested data",data)
        },3000)
        
    } )
.catch( err => {
        console.log("ERROR ! : ", err)
    })
}


getSomething("todos/1.json","todos/2.json")