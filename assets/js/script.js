// Assignment Code
/*This code selects the button in the document and sets it to a variable value*/
var generateBtn = document.querySelector('#generate');

/*This code adds an event listener to the button that will initiate password creation once clicked*/
generateBtn.addEventListener('click', writePassword);

function generatePassword() {

	var chars = {
		specials: ['!', '#', '$', '%', '&', '*', '+', '-', '/', '?', '@', '^', '~'],
		number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
		upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] //try to use toUpperCase method
	};

	var passwordLength = prompt('Please choose password length(Must be between 8 and 128 characters).');
	//This if else statement collects true and false values for selected password characters
	if (passwordLength >= 8 && passwordLength <= 128) {
		var uppercase = confirm('Do you want your password to contain uppercase characters?');
		var lowercase = confirm('Do you want your password to contain lowercase characters?');
		var numeric = confirm('Do you want your password to contain numeric characters?');
		var special = confirm('Do you want your password to contain special characters?');
	} else {
		// else statement returns alert if user did not select appropriate password length
		alert('Please select a password length between 8 and 128 characters.');
		}
		
	var pass = []; 

	if (uppercase === true) {
		pass = pass.concat(chars.upper);
	}
	if (lowercase === true) {
		pass = pass.concat(chars.lower); 
	} 
	if (numeric === true) {
		pass = pass.concat(chars.number);
	}
	if (special === true) {
		pass = pass.concat(chars.specials); //why is it separating them by a comma?
	}

	//it concats to this ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '#', '$', '%', '&', '*', '+', '-', '/', '?', '@', '^', '~'] why?

	var pass = pass.toString()

	for (var i = 0; i < passwordLength.length; i++) {
		var randNum = Math.floor(Math.random() * passwordLength.length);
		password += pass.substring(randNum, randNum + 1);
	} return password;
	console.log(password);
  }

// Write password to the #password input  
  function writePassword() {
	var password = generatePassword();
	console.log(password);
  
	var passwordText = document.querySelector('#password');
	passwordText.value = password;
  }