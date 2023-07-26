// function to help convert the time to "00:00:00" format
function formatTime(x) {
  if (x <= 9) {
    return `0${x}`;
  } else {
    return `${x}`;
  }
}

function showClock() {
  let date = new Date();
  let hours = formatTime(date.getHours());
  let minutes = formatTime(date.getMinutes());
  let seconds = formatTime(date.getSeconds());

  document.getElementById(
    "clock"
  ).innerHTML = `${hours}:${minutes}:${seconds} `;
}

setInterval(showClock, 1000);
