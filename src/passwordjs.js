//understood // testing phase //completed
'use strict'
const fs = require('fs'); //requires both fs and utility
const util = require('./utility')

function passwordjs() {
    if (process.argv.length != 5) return 'false';

    var filename = process.argv[2]
    var email = process.argv[3]
    var password = process.argv[4] //only 4 // fixed

    const inputFromFile = util.readFile(`./${filename}`);
    const hashedPassword = util.hash(password);

    for (const line of inputFromFile) {
    const [email, passwordIn] = line.split(":"); //use split instead of +, includes too many spaces //fixed
        if (email === emailIn && passwordIn === hashedPassword) {
        return true;
        //return true if false fails here, possibly == or === can work //fixed
  }
}

return false;

}

if (require.main === module) {
    console.log(passwordjs()) // print out true or false //fixed
}

module.exports = {passwordjs};