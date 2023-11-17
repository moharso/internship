const signInForm = document.querySelector(".sign-in-form")
const signInToggleButton = document.querySelector(".toggle-sign-in-button")
const registerForm = document.querySelector(".register-form")
const registerToggleButton = document.querySelector(".toggle-register-button")
const emailInputSignIn = document.querySelector(".email-sign-in__input")
const passwordInputSignIn = document.querySelector(".password-sign-in__input")
const signInButton = document.querySelector(".sign-in-form__button")
const registerButton = document.querySelector(".register-form__button")
const emailInputRegister = document.querySelector(".email-register__input")
const emailAgainInputRegister = document.querySelector(".email-again-register__input")
const nameInputRegister = document.querySelector(".name-register__input")
const surnameInputRegister = document.querySelector(".surname-register__input")
const passwordInputRegister = document.querySelector(".password-register__input")
const passwordAgainInputRegister = document.querySelector(".password-again-register__input")

function toggleSignInForm() {
    signInForm.classList.toggle("visible-sign-in-form")
}

signInToggleButton.addEventListener("click", toggleSignInForm)

function isEmailValid(email) {
    let emailRegEx =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(email);
};

function logIn() {
    if (emailInputSignIn.value.length < 3 || passwordInputSignIn.value.length < 8 || !isEmailValid(emailInputSignIn.value)) {
        emailInputSignIn.classList.add("validation-error")
        passwordInputSignIn.classList.add("validation-error")
    } else {
        window.location.href = "./home.html"
        emailInputSignIn.classList.remove("validation-error")
        passwordInputSignIn.classList.remove("validation-error")
        emailInputSignIn.value = ""
    }
}

signInButton.addEventListener("click", logIn)

function toggleRegisterForm() {
    registerForm.classList.toggle("visible-register-form")
}

registerToggleButton.addEventListener("click", toggleRegisterForm)

function register() {
    if (emailInputRegister.value.length < 3 || passwordInputRegister.value.length < 8 
        || !isEmailValid(emailInputRegister.value) || emailInputRegister.value !== emailAgainInputRegister.value 
        || nameInputRegister.value.length < 2 || surnameInputRegister.value.length < 2 || passwordInputRegister.value !== passwordAgainInputRegister.value) 
        {
            alert("Wrong input")
    } else {
        window.location.href = "./home.html"
    }
}

registerButton.addEventListener("click", register)

