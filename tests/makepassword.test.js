// To unit-test the function that generates 'password.enc.txt', you should
//  make sure the unit test does the following check.
// 1. Make sure password.enc.txt does not exist before running the function.
// 2. Make sure password.enc.txt does exist after running the function.
// 3. Make sure the contents of password.enc.txt has correct contents.
// For unit tests, you don't have to have a large input in the beginning.
// Start with smallest input, and add more contents in the input

/*
// Let's say you have a toHash() function in this module

test('Check toHash(): if the email:password is converted into email:hashPassword', () => {
    const input = ???
    const output = ???
    expect(p.toHash(input)).toBe(output);
});
*/


const p = require('../src/makepassword');
const u = require('../src/utility');
const fs = require('fs');
const util = require('../src/utility');

describe("makepassword should create file", () => {
    const fileName = './tests/passwordtest.txt'
    const encFileName = './tests/passwordtest.enc.txt'

    // 1. Check if password.enc.txt does not exist before running the function.
    test('Check if password.enc.txt does not exist', () => {
        if (fs.existsSync(encFileName)) {
            fs.unlinkSync(encFileName);
        }
        expect(fs.existsSync(encFileName)).toBe(false);

        // 2. Run makepassword to create the encrypted file.
        p.makepassword(fileName, encFileName);

        // 3. Make sure password.enc.txt does exist after running the function.
        expect(fs.existsSync(encFileName)).toBe(true);

        // 4. Make sure the contents of password.enc.txt has correct contents.
        const [emailFromFile, hashedPasswordFromFile] = util
            .readFile(encFileName)[0]
            .split(':');
        const [emailAndPasswordFromFile] = util
            .readFile(fileName)
            .split('\n')
            .filter((line) => line.includes(emailFromFile));
        const [emailIn, passwordIn] = emailAndPasswordFromFile.split(':');
        const passwordInHashed = util.hash(passwordIn);
          
        expect(emailIn).toBe(emailFromFile);
        expect(passwordInHashed).toBe(hashedPasswordFromFile);
    });
});
