console.log('Welcome to the Password validator tool.')
console.log('What Password would you like me to validate?')

function passWord(password) {
    let vpw = password.split('')
    for (let i in vpw)
    console.log(vpw)
    if (vpw[i] < 10) {
        console.log('success')
    }
}
passWord('peach')