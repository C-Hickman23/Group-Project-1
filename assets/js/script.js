
 {/* Set the target date and time for the countdown (YYYY, MM, DD, HH, mm, ss) */}
   const targetDate = new Date("2023-10-31T23:59:59").getTime();

 {/* // Update the countdown every second */}
   const interval = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time in milliseconds
  const timeRemaining = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the element with the id "countdown"
  document.getElementById("countdown").innerHTML = `Time Remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "Countdown is over!";
  }
}, 1000); // 1000 milliseconds = 1 second
