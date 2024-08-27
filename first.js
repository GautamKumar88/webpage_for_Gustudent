// index.js

// index.js

document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded

    // Function to handle the sign-in button click
    function handleSignIn() {
        // Example: Add your sign-in logic here
        // For now, let's just display a success message

        // Assume the user successfully logs in
        showSuccessMessage("Login successful!");
    }

    // Attach the handleSignIn function to the sign-in button click event
    var signInButton = document.querySelector('.btnn a');
    if (signInButton) {
        signInButton.addEventListener('click', handleSignIn);
    }

    // Function to display a success message
    function showSuccessMessage(message) {
        var successMessageElement = document.getElementById('successMessage');
        if (successMessageElement) {
            successMessageElement.textContent = message;
        }
    }
});
