// I used getElementsByClassName which works around the same way that getElementById 
// works and but instead of moving one element it moves all of them as class is not picky with muiltple codes with sharing the same name
var buttons = document.getElementsByClassName("shop-button");

// the point of this code is to go through every button to give it its function, the code would not work 
// var i starts at the first button 0 then with buttons.legth and i++ it goes keeps going until the end 
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {    // when clicked it will run the alert for the buttons
    alert("Sorry for the inconvenience but this item is currently not in stock");
  });
}


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var text = document.getElementById("text").value.trim();

  var nameErr = document.getElementById("nameErr");
  var emailErr = document.getElementById("emailErr");
  var phoneErr = document.getElementById("phoneErr");
  var textErr = document.getElementById("textErr");

  // this is to clear the codes after pressing the submit button
  nameErr.innerHTML = "";
  emailErr.innerHTML = "";
  phoneErr.innerHTML = "";
  textErr.innerHTML = "";

  var valid = true;

  if (name === "") {
    nameErr.innerHTML = "Name is required";
    valid = false;
  }
  
  // this is to make it so its required to use these symbols 
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailErr.innerHTML = "Email is required";
    valid = false;
  } else if (!email.match(emailPattern)) {
    emailErr.innerHTML = "Enter a valid email";
    valid = false;
  }
  // this makes it so the that you have to use numbers only for this box and that you must have eight digits
  var phonePattern = /^[0-9]{8}$/;
  if (phone === "") {
    phoneErr.innerHTML = "Phone number is required";
    valid = false;
  } else if (!phone.match(phonePattern)) {
    phoneErr.innerHTML = "Must be 8 digits";
    valid = false;
  }
  // this is so it has a minimum of 10 letters and if not it wont submit
  if (text === "") {
    textErr.innerHTML = "Message is required";
    valid = false;
  } else if (text.length < 10) {
    textErr.innerHTML = "Message must be at least 10 characters";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});

var options = document.querySelectorAll(".option");

options.forEach(function(btn) {
  btn.addEventListener("click", function() {

    var question = this.getAttribute("data-q");

  
    document.querySelectorAll('[data-q="' + question + '"]').forEach(function(b) {
      b.classList.remove("selected");
    });

    this.classList.add("selected");
  });
});

document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var buttons = document.querySelectorAll(".option");

  var score = 0;

  // this piece of code makes it so that it clears the colors into white
  buttons.forEach(function(btn) {
    btn.style.background = "white";
  });

  // this checks if the answers are correct or nottt
  buttons.forEach(function(btn) {
    var question = btn.getAttribute("data-q");
    var isCorrect = btn.getAttribute("data-correct") === "true";

    if (isCorrect) {
      // this hightlights which answers are correct using the light pink color ive been using 
      btn.style.background = "rgba(246, 205, 211)";
    }

    if (btn.classList.contains("selected") && isCorrect) {
      score++;
    }

    if (btn.classList.contains("selected") && !isCorrect) {
      btn.style.background = "rgba(114, 14, 41)";
    }
  });

  document.getElementById("q1-feedback").innerHTML = "";
  document.getElementById("q2-feedback").innerHTML = "";
  document.getElementById("q3-feedback").innerHTML = "";

  alert("You got " + score + " / 3 correct!");
});