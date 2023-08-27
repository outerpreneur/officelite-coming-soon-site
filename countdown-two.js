function updateCountdown() {
  const targetDateElement = document.getElementById("target-date-two");

  const targetDate = new Date(targetDateElement.textContent.trim());

  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days-two").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours-two").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("mins-two").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds-two").textContent = seconds
    .toString()
    .padStart(2, "0");
}

// Update the countdown initially and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
