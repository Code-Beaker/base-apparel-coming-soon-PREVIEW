import validator from "validator";
import isEmail from "validator/lib/isEmail";

const form = document.getElementById("form");
const emailInput = document.getElementById("emailInput");
const errorIcon = document.querySelector(".emailError");
const errorMessage = document.querySelector(".errorMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validator.isEmail(emailInput.value)) {
    errorIcon.style.display = "block";
    document.querySelector(".form__flex").classList.add("form__input-error");
    errorMessage.style.display = "inline-block";
  } else {
    errorIcon.style.display = "none";
    document.querySelector(".form__flex").classList.remove("form__input-error");
    errorMessage.style.display = "none";
    alert("Success! Make sure to keep an eye on the inbox!");
  }
});
