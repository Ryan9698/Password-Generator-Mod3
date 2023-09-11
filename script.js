// Assignment code here
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","6","7","8","9","0",];
var symbols = ["!","@","#","$","^","&","*","(",")","/"];
var length = ""
var pwArray = []
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var pwLength = window.prompt("Please choose a password length between 8 and 128 characters using numbers. (ex. 12)") 
    if (!pwLength) { //If statement created to ensure the code has the right parameters to work with. Will stop function if given the wrong input.
      return;
    } else if (pwLength < 8 || pwLength > 128){
      alert("Please enter a number between 8 and 128 using numbers.");
      return;
    } else if (isNaN(pwLength)) {
      alert("Please enter a password length between 8 and 128 using only numbers.");
      return;
    } 

  confirm("Would you like to include uppercase letters?");
    if
  confirm("Would you like to include lowercase letters?");
  confirm("Would you like to use numbers?");
  confirm("Would you like to include special characters? (ex. !@#$)");
  alert("Thank you! Be sure to save your password somewhere safe! Enjoy!");
  
 
  function generatePassword() {   // Returns the password to the textbox after checking parameters.
    return password;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
