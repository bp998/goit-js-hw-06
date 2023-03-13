const inputValidator = document.querySelector("#validation-input");
const inputLengthValidator = Number(inputValidator.getAttribute("data-length"));

inputValidator.addEventListener("blur", (e) => {
  if (e.target.value.length === inputLengthValidator) {
    inputValidator.classList.add("valid");
    inputValidator.classList.remove("invalid");
  } else {
    inputValidator.classList.add("invalid");
    inputValidator.classList.remove("valid");
  }
});
