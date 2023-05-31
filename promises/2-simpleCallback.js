//sample callback

console.log('start')

function importantAction(message, cb) {
    setTimeout(() => {
        cb(message)
    }, 0)
}

const message = importantAction("Hello World", (message) => {
    console.log(message)
});


console.log("stopped")