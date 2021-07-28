const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputCheck();
});

function inputCheck() {
  const firstnameInput = firstname.value.trim();
  const lastnameInput = lastname.value.trim();
  const emailInput = email.value.trim();
  const passwordInput = password.value.trim();

  if (firstnameInput === "") {
    errorFunction(firstname, "First Name cannot be left blank");
  }
  if (lastnameInput === "") {
    errorFunction(lastname, "Last Name cannot be left blank");
  }
  if (!isEmail(emailInput)) {
    errorFunction(email, "This isn't a valid email address");
  }
  if (passwordInput === "") {
    errorFunction(password, "Password cannot be left blank");
  }
}

function errorFunction(input, message) {
  const formelements = input.parentElement;
  const small = formelements.querySelector("small");
  formelements.className = "form-elements error";
  small.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
