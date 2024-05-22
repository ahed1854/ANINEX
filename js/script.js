let seconds = 10;
function countdown() {
  seconds = seconds - 1;
  if (seconds < 0) {
    console.log("you'le be redirected !!");
    // window.location("https://www.google.com");
  } else {
    document.getElementById("countdown").innerHTML = seconds;
    window.setTimeout("countdown()", 1000);
  }
}

countdown();

// document
//   .getElementById("redirectButton")
//   .addEventListener("click", function () {
//     window.open("https://www.google.com", "_blank");
//   });
