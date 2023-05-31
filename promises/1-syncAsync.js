//Promises in JS
//Sync vs Async code 

//Sync - in sequence 
console.log("start")
console.log("Hello world");
console.log("stop")

//Async 
console.log('start')

setTimeout(() => {
    console.log("timer expired")
}, 0)

console.log("stop")

//in the above even if its 0 secs its asyncronous so logs only after
//it logged stop (consider web api , eventloop )

