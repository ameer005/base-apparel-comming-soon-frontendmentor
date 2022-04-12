const btn = document.querySelector(".btn");

const input = document.querySelector(".form__input");

const errorText = document.querySelector(".error-text");

const errorIcon = document.querySelector(".icon-error");

// Helper functions
const isValidEmail = function (email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email.value.trim()
  );
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value === "") {
    input.style.border = "2px solid hsl(0, 93%, 68%)";
    errorText.style.opacity = errorIcon.style.opacity = "1";
  } else if (!isValidEmail(input)) {
    input.style.border = "2px solid hsl(0, 93%, 68%)";
    errorText.style.opacity = errorIcon.style.opacity = "1";
  } else {
    input.style.border = "2px solid rgba(206, 151, 151, 0.5)";
    errorText.style.opacity = errorIcon.style.opacity = "0";
  }
});
