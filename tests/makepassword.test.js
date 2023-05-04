

const p = require('../src/makepassword');
const u = require('../src/utility');
const fs = require('fs');
const util = require("../src/utility");


describe("makepassword should create file", () => {
    const fileName = "./tests/passwordtest.txt";
    const encFileName = "./tests/passwordtest.enc.txt";
  
    test("create password.enc.txt", () => {
      // Make sure password.enc.txt does not exist before running the function
      expect(fs.existsSync(encFileName)).toBe(false);
  
      // Run makepassword to create password.enc.txt
      p.makepassword(fileName, encFileName);
  
      // Make sure password.enc.txt exists after running the function.
      expect(fs.existsSync(encFileName)).toBe(true);
  
      // Only returning false?
      const inputFromFile = util.readFile(`./${encFileName}`);
      const inputFromFileComp = util.readFile(`./${fileName}`);
      const [email, plainPassword] = inputFromFileComp[0].split(':');
      const hashedPassword = util.hash(plainPassword);
      const [emailIn, passwordIn] = inputFromFile[0].split(':');

        expect(emailIn).toBe(email);
        expect(passwordIn).toBe(hashedPassword);
    });
  });

