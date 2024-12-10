// Define a regular expression to validate a strong password
// Criteria: At least one lowercase letter, one uppercase letter, one special character, one digit, and a minimum of 8 characters
let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s])(?=.*\d).{8,}$/;

// Add an event listener to the login form to handle the submit action
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior (so the page doesn't reload)
    let passwordInput = document.getElementById("pwd"); // Get the password input field and its value
    let userPasswordValid = regex.test(passwordInput.value); // Test the entered password against the regular expression
    console.log(userPasswordValid); // Log whether the password is valid (true/false)

    // Create a message for the user based on the password validity
    let messageToUser = userPasswordValid
      ? `The password is valid`
      : `Here are the criteria which must be met in order for a password
      to be strong enough. The password must have at least one lower
       case letter. The password must have at least one upper case
       letter. It must contain one digit and one special character,
       and it must be at least eight characters long.`;
    console.log(messageToUser); // Log the message for debugging

    // Display the message to the user in the webpage
    let messageElement = document.getElementById("message");
    messageElement.textContent = messageToUser;
  });
