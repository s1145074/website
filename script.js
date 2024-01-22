function check_input() {
  var user_input = document.getElementById("input_box").value;
  var message_element = document.getElementById("message");

  if (user_input === "1234") {
    reset_message()
    window.location.href = "https://www.google.nl/";
  }
  else if (user_input === "lennard") {
    reset_message()
    window.location.href = "lennard/index.html";
  }
  else if (user_input === "ruben") {
    reset_message()
    window.location.href = "ruben/index.html";
  }
  else if (user_input === "mo") {
    reset_message()
    window.location.href = "mo/index.html";
  }
  else if (user_input === "rick") {
    reset_message()
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
  else {
      document.getElementById('message_container').style.display = 'block';
      message_element.innerText = "Code niet herkend! Probeer opnieuw.";
  }
}

function reset_message() {
  document.getElementById('message').innerText = '';
  document.getElementById('message_container').style.display = 'none';
}

function home() {
  reset_message()
  window.location.href = "index.html";
}