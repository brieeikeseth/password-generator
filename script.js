
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumbers;
var confirmSpecial;
var userChoices;


var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
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
     } else { 
    confirmLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumbers = confirm("Will this contain numbers?");
    console.log("Numbers " + confirmNumbers);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpecial);
    
      };

// input left blank 
if (!confirmLower && !confirmUpper && !confirmNumbers && !confirmSpecial) {
    userChoices = alert("You must choose a criteria to continue");
 
 //  true option 1 (4 options)
} else if (confirmLower && confirmUpper && confirmNumbers && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }

  // true option 2 (3 options)
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumbers && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  
  else if (confirmUpper && confirmNumbers && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // true option 3 (2)
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumbers) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumbers) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmNumbers && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // true option 4 (1)
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumbers) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  };

 // password length empty input
 var passwordBlank = [];

//  random selection loop
   for (var i = 0; i < passwordLength; i++) {
     var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
     passwordBlank.push(allChoices);
     console.log(allChoices);
   }

    // password given 
    var password = passwordBlank.join("");
    console.log("Your Pasword is: " + password);
    return password;
   }
