//function corrected, fixed
'use strict'
const fs = require('fs');
const {readFile, writeFile, hash} = require('./utility')

function makepassword(passwordFileName, passwordEncFileName) {
    
  const inputFromFile = readFile(passwordFileName);
    const emailPasswordHashedPair = inputFromFile.map(line => {
      const [email, password] = line.split(":");
      return `${email}:${hash(password)}`;
    });
   
    writeFile(emailPasswordHashedPair, passwordEncFileName);
  }
  
if (require.main === module) {
    makepassword('./password.txt', './password.enc.txt')
}

module.exports = {makepassword};