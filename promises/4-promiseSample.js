//Promises in Js

console.log ("start")

const func = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = false;
        if(result) resolve("Promise resolved")
        else reject ("Promise rejected")
    }, 2000)
})

func.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

console.log ("stop")
