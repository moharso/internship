const profileFirstName = document.querySelector(".profile__first-name")
const profileSurname = document.querySelector(".profile__surname")
const profileEmail = document.querySelector(".profile__email")

const currentUser = JSON.parse(localStorage.getItem("currentUser"))

profileFirstName.innerHTML = "Name: " + currentUser[0].name
profileSurname.innerHTML = "Surname: " + currentUser[0].surname
profileEmail.innerHTML = "Email: " + currentUser[0].email

function isEmailValid(email) {
    let emailRegEx =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(email);
};


function resetEmail() {
    let email = prompt("Please reset your email");
    let emailCompare = JSON.parse(localStorage.getItem("users"))

    if (!isEmailValid(email)) {
      alert("Wrong email")
    } else {
        currentUser[0].email = email
        profileEmail.innerHTML = "Email: " + email
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        alert("Your email changed")
    }

    // if (emailCompare[i].id === currentUser[0].id) {
    //     console.log(currentUser.email)
    // }

    // for (let i = 0; i < emailCompare.length; i++) {
    //     let userEmail = emailCompare[i].email;
    //     let userId = emailCompare[i].id
    //     let currenUserId = currentUser[0].id

    //     if (userId === currenUserId) {
    //         console.log("Everything is ok")
    //     }
    // }

  }

  function resetPassword() {
    let password = prompt("Please reset your password")

    if(password.length < 8) {
        alert("Wrong password")
    } else {
        currentUser[0].password = password;
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
        alert("Your password changed")
    }
  }