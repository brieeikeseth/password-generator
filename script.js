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
    } else { 
        confirmLower = confirm("Will this contain lower case letters?");
        console.log("Lower case " + confirmLower);
        confirmUpper = confirm("Will this contain upper case letters?");
        console.log("Upper case " + confirmUpper);
        confirmNumber = confirm("Will this contain numbers?");
        console.log("Number " + confirmNumber);
        confirmSpecial = confirm("Will this contain special characters?");
        console.log("Special Character " + confirmSpecial);
    
      };

 // input left blank then 
    if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose a criteria to continue");
 
    //  true option 1 (4 options)
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lower.concat(upper, numbers, special);
    console.log(userChoices);
  }

  // true option 2 (3 options)
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lower.concat(upper, special);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lower.concat(numbers, special);
    console.log(userChoices);
  }
  
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upper.concat(numbers, special);
    console.log(userChoices);
  }
  // true option 3 (2)
  else if (confirmLower && confirmUpper) {
    userChoices = lower.concat(upper);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lower.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lower.concat(special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upper.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upper.concat(special);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // true option 4 (1)
  else if (confirmLower) {
    userChoices = lower;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upper);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  };

}
