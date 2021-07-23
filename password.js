const { read } = require('fs')
const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('Welcome to the Password validator tool.')

read.question("Can you enter a new password?", (answer) => {
    if(answer.length >= 10) {
        console.log('Successfully created your new password');
    } else {
        console.log('Your password needs to be at least 10 chacaters long');
    }
});

