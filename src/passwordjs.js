//understood // testing phase //completed
'use strict'
const fs = require('fs'); //requires both fs and utility
const util = require('./utility')

function passwordjs() {
    if (process.argv.length != 5) return false;

    const filename = process.argv[2];
    const email = process.argv[3];
    const password = process.argv[4];

    const inputFromFile = util.readFile(`./${filename}`);
    const hashedPassword = util.hash(password);

    for (const line of inputFromFile) {
        const [storedEmail, passwordIn] = line.split(":");
        if (email === storedEmail && passwordIn === hashedPassword) {
            return true;
        }
    }

    return false;
}


if (require.main === module) {
    console.log(passwordjs()) // print out true or false //fixed
}

module.exports = {passwordjs};