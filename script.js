// Assignment code here

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumbers;
var confirmSpecial;
var userChoices;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lower = ["abcdefghijklmnopqrstuvwxyz"];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var special = ["!@#$%^&*()-_=+;:',<.>/?"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start pw generator 
function generatePassword() {
    // Ask user for desired length of password 
    passwordLength = prompt ("How many characters would you like your password? Please choose between 8-12 characters");

    if(!passwordLength) {
        alert("Required Value");

    }else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt ("You must choose between 8-128 characters")
        console.log("Password Length " + passwordLength);
    }

}
