'use strict'

const fs = require('fs');
const {readFile, hash} = require('./utility');

function makepassword(passwordFileName, passwordEncFileName) {
  const inputFromFile = readFile(passwordFileName);
  const emailPasswordHashedPair = inputFromFile.map(line => {
    const [email, password] = line.split(":");
    return `${email}:${hash(password)}`;
  });

  fs.unlinkSync(passwordEncFileName); // remove the file if it exists
  emailPasswordHashedPair.forEach(pair => {
    fs.appendFileSync(passwordEncFileName, pair + '\n');
  });
}

module.exports = { makepassword };


// This section of code is causing the error, after debbuging and testing constantly, the file will not create. This is the portion that is
// failing my acceptence tests. Please help! I dont want to make it too complex, keep it dumb and simple is what I want to do!
