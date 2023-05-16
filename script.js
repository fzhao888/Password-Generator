// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //prompt for length
  //valid prompt is number 8-128


  //ask for character types to include in the password
  

  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  //validate prompts

  //generate password

  //password alert


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
