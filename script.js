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
    // Ask user for 
}
