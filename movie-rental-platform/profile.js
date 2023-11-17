const profileFirstName = document.querySelector(".profile__first-name")
const profileSurname = document.querySelector(".profile__surname")
const profileEmail = document.querySelector(".profile__email")

let firstName = 'John'
let lastName = 'Doe'
let email = "john.doe@gmail.com"

profileFirstName.innerHTML = "Name: " + firstName
profileSurname.innerHTML = "Surname: " + lastName
profileEmail.innerHTML = "Email: " + email

function isEmailValid(email) {
    let emailRegEx =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(email);
};


function resetEmail() {
    let email = prompt("Please reset your email");
    if (!isEmailValid(email)) {
      alert("Wrong email")
    } else {
        profileEmail.innerHTML = "Email: " + email
        alert("Your email changed")
    }
  }