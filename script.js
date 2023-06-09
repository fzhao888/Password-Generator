// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt for length
  var length = window.prompt("Please enter a password length between 8 and 128: ");
  
  //exit if cancel is clicked
  if(length === null){
    return;
  }
  
  //validate length prompt is between 8 and 128, number, and empty prompt
  while(length>128 || length<8 || isNaN(length) ){

    if(length>128 || length<8 ){
      //checks for empty prompt
      if(length.trim() === ""){
       length = window.prompt("Sorry, the length entered was empty.  Please try again.");
      }else{
        length = window.prompt("Sorry, the length entered was not between 8 and 128. Please try again.");
      }
    }

    //checks length is a number
    if(isNaN(length)){
      length = window.prompt("Sorry, the length entered was not a number. Please try again.");
    }

    //exit if cancel is clicked
    if(length === null){
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
  var password = generatePassword(lowercase,uppercase,numeric,special,length);
  var passwordText = document.querySelector("#password");

  //password alert
  window.alert("Congratulations! Your password is successfully generated.");
  passwordText.value = password;
}

//generates password
function generatePassword(lowercase,uppercase,numeric,special,length){
  var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseString = lowercaseString.toUpperCase();
  var numericString = "1234567890";
  var specialString = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; 
  var myPassword = "";
  var newPassword = "";  

  //adds character type criteria to password:
  if(lowercase){
    myPassword = myPassword.concat(lowercaseString);
  }

  if(uppercase){
    myPassword = myPassword.concat(uppercaseString);
  }

  if(numeric){
    myPassword = myPassword.concat(numericString);
  }

  if(special){
    myPassword = myPassword.concat(specialString);
  }

  myPassword = myPassword.split('');
  //end adding character type criteria to password

  //generates a random password based on the character type criteria
  do{
    newPassword = "";
    for(var i=0; i<length;i++){
      var random = Math.floor(Math.random()*myPassword.length);
      newPassword += myPassword[random];
    } 
  }while(!fulfillCriteria(lowercase,uppercase,numeric,special,
    lowercaseString,uppercaseString,numericString,specialString,newPassword));

  return newPassword;
}

//checks if the generated password fulfills the character type criteria 
function fulfillCriteria(lowercase,uppercase,numeric,special,
  lowercaseString,uppercaseString,numericString,specialString,newPassword){
  var lowercaseArray = lowercaseString.split("");
  var uppercaseArray = uppercaseString.split("");
  var numericArray = numericString.split("");
  var specialArray = specialString.split("");
  var lower = true;
  var upper = true;
  var num = true;
  var spec = true;
  
  //sets boolean variable to false if it is a criteria
  if(lowercase){
    lower = false;
  }

  if(uppercase){
    upper = false;
  }

  if(numeric){
    num = false;
  }

  if(special){
    spec = false;
  }
  //end of setting boolean variable to false 

  //checks if generated password contains a lowercase
  for(var i = 0;!lower && i<lowercaseArray.length;i++){
    if(newPassword.indexOf(lowercaseArray[i]) !== -1){
      lower = true;
    }
  }

  //checks if generated password contains an uppercase
  for(var i = 0;!upper && i<uppercaseArray.length;i++){
    if(newPassword.indexOf(uppercaseArray[i]) !== -1){
      upper = true; 
    }
  }

  //checks if generated password contains a number
  for(var i = 0;!num && i<numericArray.length;i++){
    if(newPassword.indexOf(numericArray[i]) !== -1){
      num = true; 
    }
  }

  //checks if generated password contains a special character
  for(var i = 0;!spec && i<specialArray.length;i++){
    if(newPassword.indexOf(specialArray[i]) !== -1){
      spec = true; 
    }
  }

  return lower && upper && num && spec;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
