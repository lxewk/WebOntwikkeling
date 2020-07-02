function myFunction() {

  preProgress();

  let email = document.getElementById("email").value.indexOf("@");
  let age = document.getElementById("birthyear").value;
  let fname = document.getElementById("firstName").value;
  let lname = document.getElementById("lastName").value;
  let phone = document.getElementById("phoneNumber").value;
  let pword = document.getElementById("password").value;
  let pword2 = document.getElementById("password2").value;

  checkBirthyear(age);

}

function preProgress() {
  let errorMessageElement = getElementByClass("errorMessage")[0];
  errorMessageElement.innerHTML = "";
  errorMessageElement.style.display = "none";
}

function checkBirthyear(year) {
  let dateToday = new date().getFullYear();
  if(dateToday - year <= 18) {
    let errorMessageElement = document.getElementsByClassName("errorMessage")[0];
         errorMessageElement.innerHTML += "<p>Je bent te jong</p>"
         errorMessageElement.style.display = "block";
  }
}