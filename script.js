/*

    Final Project (3)
    Name: Md Mahamudun Alam Mahin
    Date: 12/14/22
    Description: Using Javascript to validate contact page of the business jersey shop.
	
*/

//Load function
function load() {
    // Hides all error elements on the page
    hideAllErrors();
    // Event listener for the form submit
    document.getElementById("feedbackform").addEventListener("submit", validate);
}

// Hides all of the error elements.
function hideAllErrors() {
    // Get an array of error elements
    let error = document.getElementsByClassName("error");

    // Loop through each element in the error array
    for (let i = 0; i < error.length; i++) {
        // Hide the error element by setting it's display style to "none"
        error[i].style.display = "none";
    }
}

// Validate all the user input fields
function validate(e) {
    // Hides all error elements on the page
    hideAllErrors();

    // Determine if the form has errors
    if (formHasErrors()) {
        // Prevents the form from submitting
        e.preventDefault();
        return false;
    }

    return true;


}

// Lets us know if there is any error
function formHasErrors() {
    // To raise a flag when error occurs
    let errorFlag = false;

    // Name validation
    if (!formFieldHasInput(document.getElementById("name"))) {

        document.getElementById("name_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("name").focus();
            document.getElementById("name").select();
        }
        errorFlag = true;
    }

    // Phone number validation
    if (!formFieldHasInput(document.getElementById("phoneNumber"))) {

        document.getElementById("phoneNumber_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("phoneNumber").focus();
            document.getElementById("phoneNumber").select();
        }
        errorFlag = true;
    }

    let phoneNumber = document.getElementById("phoneNumber").value;
    let regex1 = new RegExp(/^\d{10}$/);


    if (formFieldHasInput(document.getElementById("phoneNumber")) && !regex1.test(phoneNumber)) {

        document.getElementById("invalidphoneNumber_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("phoneNumber").focus();
            document.getElementById("phoneNumber").select();
        }

        // Raise the error flag
        errorFlag = true;
    }



    // Email validation
    if (!formFieldHasInput(document.getElementById("email"))) {

        document.getElementById("email_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }
        errorFlag = true;
    }

    let regex2 = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let email = document.getElementById("email").value;

    if (formFieldHasInput(document.getElementById("email")) && !regex2.test(email)) {

        document.getElementById("invalidemail_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("email").focus();
            document.getElementById("email").select();

            // Raise the error flag
            errorFlag = true;

        }
    }

    if (!formFieldHasInput(document.getElementById("comments"))) {

        document.getElementById("comments_error").style.display = "block";

        if (!errorFlag) {
            document.getElementById("comments").focus();
            document.getElementById("comments").select();

            // Raise the error flag
            errorFlag = true;

        }
    }

    return errorFlag;
}

// To check if user had put any input
function formFieldHasInput(fieldElement) {
    // Check if the text field has a value
    if (fieldElement.value == null || trim(fieldElement.value) == "") {

        // Invalid entry
        return false;
    }

    // Valid entry
    return true;
}

// Erases the white-space at the start and end of the string
function trim(str) {
    // Uses a regex to remove spaces from a string.
    return str.replace(/^\s+|\s+$/g, "");
}

function errorCheck() {
    if (formHasErrors()) {
        alert("errors");
    }

}

document.addEventListener("DOMContentLoaded", load);