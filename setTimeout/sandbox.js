console.log(1) ;
console.log(2) ;

setTimeout( () => {
    console.log("This callback function fires now !")
 }, 2000 ) ; // 2000 milliseconds 
console.log(3) ;
console.log(4) ;
console.log(5) ;