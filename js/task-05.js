const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  if (e.target.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = e.target.value;
  }
});
