// free fake api for testing  https://jsonplaceholder.typicode.com/


const sendReq = (resource, callback) => {

    const request = new XMLHttpRequest ; // request object 
    var messagePrinted = false 
    request.addEventListener('readystatechange' , () => { // logs whenever the state of the request object changes 
        if ( request.readyState === 4 && request.status === 200 ) {
            console.log("RESPONSE RECEIVED!\nWait while it is printed") ;
            console.log(request.status)
            setTimeout(() => {
                console.clear()
                const data = JSON.parse(request.responseText)
                callback(undefined, data)
            },3000) ;
        }else if ( request.readyState === 4 ){
            callback( request  , undefined)
        } else {
            if ( !messagePrinted){
                console.log("WAITING FOR RESPONSE") ; 
                messagePrinted = true
            }
        }
    })
    request.open('GET', resource ) ; // setting up request
    
    request.send() ;
} ;



sendReq( "todos/1.json" , (err , data ) => { // setup callback function 
    console.log("CALLBACK FIRED") ;
    err && console.log( err.status, "ERROR !") ; // if error 
    data && console.log(data); data && sendReq( "todos/2.json" , (err, data) => 
    {
        err && console.log( err.status, "ERROR !") ; // if error 
            data && console.log(data) ; 
    }) ;
}) ; 