function validateEmail(email) {
  // Regular expression pattern for email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  return emailPattern.test(email);
}

// Example usage
const emailInput = document.getElementById("email"); // Assuming your email input field has an id of "email"
const email = emailInput.value;
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateEmail(emailInput.value)) {
    // Email is valid
    console.log("Email is valid");
  } else {
    // Email is invalid
    console.log("Email is invalid");
  }
});
