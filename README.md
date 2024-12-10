## Password Validator Project

This is a simple web-based password validation project that checks whether a password meets specific security criteria using JavaScript and regular expressions (regex). It aims to demonstrate basic skills in JavaScript, regex, form handling, and dynamic feedback.

## Features

Password Validation: Ensures the password meets the following criteria:
At least one lowercase letter
At least one uppercase letter
At least one digit
At least one special character (e.g., @$!%\*?&)
Minimum length of 8 characters
Dynamic Feedback: Provides real-time feedback to the user, indicating whether the password is valid or listing the missing criteria.

## Demo

The app provides a form with two fields:

Username: A simple text input field (optional, but will be required in future updates).
Password: A password input field that validates the entered value against the criteria.

### How it works:

When the user submits the form, the password is validated against the regex pattern.
If the password is valid, a success message is shown.
If invalid, a detailed feedback message is displayed indicating what is missing or incorrect in the password.

## Getting Started

### Installation

Clone this repository to your local machine:
git clone https://github.com/marna4255/js-password-validator.git
Open the index.html file in your browser.

### Usage

Enter a username (optional for now, but will have validation in future updates).
Enter a password.
Submit the form to check if the password meets the validation criteria.
If the password is invalid, the app will show detailed feedback about which criteria are missing.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
