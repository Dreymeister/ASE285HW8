# Assignment 8

## User Stories
Requirement 1:
    As a user, I want to create and implement the encryption between a plain text password file and be able to decyrpt the text file when needed. The file should be easily accessible when encryption and decyrption are needed.

Requirement 2:
    As a user, I want the password and name given to the system to match original input, so that I can use my credentials to login and access or restrict my account, I want to also store these files so that I can encrypt and decypt them locally.

## Integrated Design

This software consists of three main components: makepassword.js, passwordjs.js, and utility.js. These components work together to provide a secure way to manage passwords.

To use the software, the user first needs to prepare an unencrypted text file named "password.txt", containing usernames and passwords in the format "username:password", with each username and password on a separate line.

Next, the user runs makepassword.js using the terminal command "node src/makepassword". This executes the function called "makePassword", which takes the password file name (password.txt) and the desired name for the encrypted file (password.enc.txt by default) as arguments. The function reads through each line of the unencrypted file, hashes each password using the hash() function from utility.js, and then writes the email and hashed password into the new encrypted file specified in the arguments.

Once the encrypted file is generated, the user can authenticate email/password combinations using passwordjs.js by entering the command "node src/passwordJS". This executes the passwordjs() function within the file, which reads the arguments from the terminal and verifies that the inputted email/password combination exists in the specified encrypted password file. If the combination exists, the function returns true. If it does not exist, the function returns false.
