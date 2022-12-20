// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%^&*()";

function generatePassword() {
  let pwlength = window.prompt ("How many characters for your password (8-128)");
  if (pwlength < 8 || pwlength > 128) {
    window.alert ("Your password length needs to be between 8 and 128");
  }else {
  let pwlower = window.confirm ("Would you like lowercase letters");
  let pwupper = window.confirm ("Would you like uppercase letters");
  let pwnumbers = window.confirm ("Would you like numbers");
  let pwspecial = window.confirm ("would you like special characters");

  let pwstring = '';
  if (pwlower) {
    pwstring = pwstring + lower;
  }
  if (pwupper) {
    pwstring = pwstring + upper;
  }
  if (pwnumbers) {
    pwstring = pwstring + numbers;
  }
  if (pwspecial) {
    pwstring = pwstring + special;
  }
  let result = "";

  if (pwlower == false && pwupper == false && pwnumbers == false && pwspecial == false) {
    window.alert ("You have not selcted any character sets please try again");
  }else {
    let i = 0;
    do {
      // need to make a random string out of lower, upper, numbers, special
      result = result + pwstring.charAt(Math.floor(Math.random() * pwstring.length));
      i++;    
    } while (i < pwlength);
  return result;
  }
  }
}