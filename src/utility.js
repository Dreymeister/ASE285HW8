//Done
'use strict'

const fs = require('fs');
const {createHash} = require('crypto')

function readFile(fileName) {
    if (!fs.existsSync(fileName)) {
        throw `${fileName} does not exist!`
    }
    try {
        var text = fs.readFileSync(fileName).toString('utf-8');
        var textByLine = text.split("\r\n"); //added /r here
        return textByLine;
    } catch (err) {
        console.log(err)
    }
}

function writeFile(ar, fileName) {
    try {
        var res = ar.join("\r\n") //implemented /r here has well, /n 
        fs.writeFileSync(fileName, res)
    } catch (err) {
        console.log(err)
    }
}

function hash(input) {
    return createHash('sha256').update(input).digest('hex'); // never use md5 //md5 not used
}

module.exports = {readFile, writeFile, hash};