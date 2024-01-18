var input = document.getElementById("input");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check").click();
  }
});


function home() {
    window.location.href = "index.html"
}


function check() {
  var user_input = document.getElementById("input_code").value;

  if (user_input === "1234") {
      showAlert("Success! Code is valid.");
  } else {
      showAlert("Error! Please enter the correct code (1234).");
  }
}

function showAlert(message) {
  document.getElementById("alert-message").innerText = message;
  document.getElementById("custom-alert").style.display = "block";
  setTimeout(function() {
      document.getElementById("custom-alert").style.display = "none";
  }, 3000);
}