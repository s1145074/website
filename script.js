function checkPinCode() {
    var enteredPin = document.getElementById("pinCode").value;
    var correctPin = "1234"; // Replace with your correct pin code

    if (enteredPin === correctPin) {
        closeAlert();
        window.location.href = "https://s1145074.github.io/inpixpe/";
    } else {
        showAlert();
    }
}

var input = document.getElementById("pinCode");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check").click();
  }
});

function home() {
    window.location.href = "index.html"
}

function showAlert() {
    document.getElementById('custom-alert').style.display = 'block';
    document.getElementById('alert-message').innerHTML = 'Code niet herkend. Probeer opnieuw!';
  }

closeAlert()

function closeAlert() {
    document.getElementById('custom-alert').style.display = 'none';
  }