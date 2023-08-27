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

function updateCountdown() {
  const targetDateElement = document.getElementById("target-date");
  const targetDate = new Date(targetDateElement.textContent.trim());

  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("mins").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

// Update the countdown initially and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
hellofucker();
