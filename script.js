// Assignment code here
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","6","7","8","9","0",];
var symbols = ["!","@","#","$","^","&","*","(",")","/"];
var pwArray = [];
var pwLength = 128;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var pwConditions = prompts(); // If the user follows the prompts then it will execute the generatePassword function.
  if (pwConditions){
    generatePassword();
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 
function prompts() {
    pwLength = parseInt(window.prompt("Please choose a password length between 8 and 128 characters using numbers. (ex. 12)")) 
    if (!pwLength) { //If statement created to ensure the code has the right parameters to work with. Will stop function if given the wrong input.
      return;
    } else if (pwLength < 8 || pwLength > 128){
      alert("Please enter a number between 8 and 128 using numbers.");
      return;
    } else if (isNaN(pwLength)) {
      alert("Please enter a password length between 8 and 128 using only numbers.");
      return;
    } 
    //Answering each with "Ok" will return true and merge the arrays into the open pwArray
   var ucPrompt = confirm("Would you like to include uppercase letters?");
    if (ucPrompt) {
      pwArray = pwArray.concat(upperCase); //If yes, upperCase added to pwArray
    }

   var lcPrompt = confirm("Would you like to include lowercase letters?");
    if (lcPrompt) {
    pwArray = pwArray.concat(lowerCase);
    }
   var numPrompt = confirm("Would you like to use numbers?");
    if (numPrompt) {
      pwArray = pwArray.concat(numbers);
    }
   var specPrompt = confirm("Would you like to include special characters? (ex. !@#$)");
    if (specPrompt) {
      pwArray = pwArray.concat(symbols);
    }

   alert("Thank you! Be sure to save your password somewhere safe! Enjoy!");
   };

function generatePassword() {   // Creates a randomly generated password from the pwArray using a for loop
  password = "";
  for (i = 0; i < pwLength; i++) { // Characters are added to the password until it reaches the desired password length
      var pwCharacters = Math.floor(Math.random() * pwArray.length);
      password = password + pwArray[pwCharacters];
    }
    return password;
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
