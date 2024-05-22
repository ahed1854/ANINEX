let seconds = 10;
function countdown() {
  seconds = seconds - 1;
  if (seconds < 0) {
    document.getElementById("redirectButton").disabled = false;
    console.log("You'll be able to get to the page !!");
  } else {
    document.getElementById("countdown").innerHTML = seconds;
    window.setTimeout("countdown()", 1000);
  }
}

countdown();

document
  .getElementById("redirectButton")
  .addEventListener("click", function () {
    window.open("https://www.google.com", "_blank");
  });
