// Get reference to the submit button
let submitButton = document.getElementById("submit_button");

// Get references to all the form inputs
let nameInput = document.getElementById("name");
let passwordInput = document.getElementById("password");
let emailInput = document.getElementById("email");
let shirtSizeInput = document.getElementsByName("shirt_size");
let dobInput = document.getElementById("dob");
let emailUpdatesInput = document.getElementsByName("email_updates");
let sessionsInput = document.getElementsByName("sessions");
let specialRequestsInput = document.getElementById("special_requests");
    
submitButton.addEventListener("click", function(event) {
    // This is the code that runs when the submit button is clicked
    // 1. Validate form
    //      Create an array of all the vailidation errors in the form
    //      Going through all the inputs, one at a time. If there's a vaildation error, add a message to the array. 
    //      If there's no issue with an input, do nothing.
    // After checking all the inputs, look at the length of the array.
    // If the array is empty, there were no errors, so the form is good.
    // If array is not empty, there is at least one vaildation error. 
    
    // Create an array to hold any validation error messages
    let errors = [];

    // Validate the name input
    let name = nameInput.value;
    if (name.length === 0) {
        errors.push("Name is required.");
    }

    // Validate the password input
    let password = passwordInput.value;
    if (passwordInput.value.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    
    // Validate the email input
    let email = emailInput.value;
    if (email === "") {
        errors.push("Email is required.");
    } else if (!email.includes("@")) {
        errors.push("Email must contain an '@' symbol.");
    }

    // Validate the shirt size input
    let shirtSize = shirtSizeInput.value;
    if (shirtSize === "") {
        errors.push("T-shirt size is required.");
    }

    // Validate the date of birth input
    let dob = dobInput.value;
    if (dob === "") {
        errors.push("Date of birth is required.");
    }

    // Validate the email updates input
    let emailUpdates = "";
    for (let i = 0; i < emailUpdatesInput.length; i++) {
        if (emailUpdatesInput[i].checked) {
            emailUpdates = emailUpdatesInput[i].value;
            break;
        }
    }
    if (emailUpdates === "") {
        errors.push("Please select if you want to receive email updates from conference sponsors.");
    }

    // Validate the form iself
    if (errors.length === 0) {
        // No validation errors, form is good
        console.log("Form is valid. Submitting form data...");
        // To Do: process the form
        // 2. Create a JSON object with the form data
        let registrationData = {
            name: name,
            password: password,
            email: email,
            shirtSize: shirtSize,
            dob: dob,
            emailUpdates: emailUpdates,
            sessions: [],
            specialRequests: specialRequestsInput.value
        };
        // Added console log to check registration data
        console.log(registrationData)
    } else {
        // There are validation errors, display them to the user
        alert('This form has these validation errors: ' + ('\n -') + errors.join('\n -'));
    }

    
});