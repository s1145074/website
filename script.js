function checkPinCode() {
    var enteredPin = document.getElementById("pinCode").value;
    var correctPin = "1234"; // Replace with your correct pin code

    if (enteredPin === correctPin) {
        window.location.href = "https://s1145074.github.io/inpixpe/";
    } else {
        alert("Incorrect Pin Code. Please try again.");
    }
}