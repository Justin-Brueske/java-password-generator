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
  console.log(pwlength);
  if (pwlength < 8 || pwlength > 128) {
    window.alert ("Your password length needs to be between 8 and 128");
  }else {
  let pwlower = window.confirm ("Would you like lowercase letters");
  console.log(pwlower);
  let pwupper = window.confirm ("Would you like uppercase letters");
  console.log(pwupper);
  let pwnumbers = window.confirm ("Would you like numbers");
  console.log(pwnumbers);
  let pwspecial = window.confirm ("would you like special characters");
  console.log(pwspecial);

  let pwstring = '';
  console.log(pwstring);
  if (pwlower) {
    pwstring = pwstring + lower;
  }
  console.log(pwstring);
  if (pwupper) {
    pwstring = pwstring + upper;
  }
  console.log(pwstring);  
  if (pwnumbers) {
    pwstring = pwstring + numbers;
  }
  console.log(pwstring);
  if (pwspecial) {
    pwstring = pwstring + special;
  }
  console.log(pwstring);
  let result = "";

  if (pwlower == false && pwupper == false && pwnumbers == false && pwspecial == false) {
    window.alert ("You have not selcted any character sets please try again");
  }else {
    let i = 0;
    do {
      // need to make a random string out of lower, upper, numbers, special
      result = result + pwstring.charAt(Math.floor(Math.random() * pwstring.length));
      console.log(result);
      i++;

    
    
    
    } while (i < pwlength);
  return result;
  }
  }
}