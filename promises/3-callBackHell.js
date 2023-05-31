console.log('start')

function importantAction(message, cb) {
    setTimeout(() => {
        cb(message)
    }, 0)
}

function action2(message, cb) {
    setTimeout(() => {
        cb(message)
    }, 0)
}

function action3(message, cb) {
    setTimeout(() => {
        cb(message)
    }, 0)
}

const message = importantAction("Hello World", (message) => {
    console.log(message);
    action2("This is action 2", (message) => {
        console.log(message)
        action3("This is action 3", (message) => {
            console.log(message)
        })
    })
});


console.log("stopped")


//callback hell - pyramid of doom 
//solution ? - promises

// const message = importantAction("Hello World", (message) => {
//     console.log(message);
//     action2("This is action 2", (message) => {
//         console.log(message)
//         action3("This is action 2", (message) => {
//             console.log(message)
//             action4("This is action 2", (message) => {
//                 console.log(message)
//                 action4("This is action 2", (message) => {
//                     console.log(message)
//                 })
//             })
//         })
//     })
// });