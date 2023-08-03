const getSomething = (resource) => {
    return new Promise( (resolve, reject)=> {
        // fetch something 
        const request = new XMLHttpRequest ; // request object 
    var messagePrinted = false 
    request.addEventListener('readystatechange' , () => { // logs whenever the state of the request object changes 
        if ( request.readyState === 4 && request.status === 200 ) {
            console.log("RESPONSE RECEIVED!\nWait while it is printed") ;
            console.log(request.status)
            setTimeout(() => {
                console.clear()
                const data = JSON.parse(request.responseText)
                resolve(data)
            },3000) ;
        }else if ( request.readyState === 4 ){
            reject(request)
        } else {
            if ( !messagePrinted){
                console.log("WAITING FOR RESPONSE") ; 
                messagePrinted = true
            }
        }
    })
    request.open('GET', resource ) ; // setting up request
    
    request.send() ;
    })  
}

// getSomething("todos/3.json").then( (data) => { console.log("THIS IS YOUR DATA",data) },
//                                     (err) => { console.log("Something went wrong", err.status)} )

// the above function is the same as the one below 

// getSomething("todos/1.json").then( data => { console.log("HERE IS YOUR REQUESTED DATA",data)})
// .catch( err => { console.log("Something went wrong", err.status)})

getSomething("todos/1.json").then( data => { console.log("HERE IS YOUR 1st REQUESTED DATA",data)
return getSomething("todos/2.json")
}).then( data => { console.log("HERE IS YOUR 2nd REQUESTED DATA",data)})
.catch( err => { console.log("Something went wrong", err.status)})
