// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt for length
  var length = window.prompt("Please enter a password length between 8 and 128: ");
  if(!length){
    return;
  }
  //validate password prompt is between 8 and 128
  while(length>128 || length<8){
    length = window.prompt("Sorry, the password entered was not between 8 and 128.\nPlease enter a password length between 8 and 128: ");
    if(!length){
      return;
    }
  }

  //ask for character types to include in the password
  //confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  var lowercase = window.confirm("Do you want to include lowercase characters?");
  var uppercase = window.confirm("Do you want to include uppercase characters?");
  var numeric = window.confirm("Do you want to include numeric characters?");
  var special = window.confirm("Do you want to include special characters?");
  
   //validate character type prompts to make sure at least one character type is selected
  while(!lowercase && !uppercase && !numeric && !special){
    window.alert("Please make sure at least one character type is selected.\nPlease try again.");
    lowercase = window.confirm("Do you want to include lowercase characters?");
    uppercase = window.confirm("Do you want to include uppercase characters?");
    numeric = window.confirm("Do you want to include numeric characters?");
    special = window.confirm("Do you want to include special characters?");
  }

  //generate password
  var password = generatePassword(lowercase,uppercase,numeric,special);
  var passwordText = document.querySelector("#password");

  //password alert
  window.alert("Congratulations! Your password is successfully generated.")    


  passwordText.value = password;

}

function generatePassword(lowercase,uppercase,numeric,special){
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
