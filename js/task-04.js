const counterValue = document.querySelector("#value");
counterValue.textContent = "0";

const btnAdd = document.querySelector(`button[data-action="increment"]`);
const btnDelete = document.querySelector(`button[data-action="decrement"]`);

btnAdd.addEventListener("click", () => {
  counterValue.textContent++;
});

btnDelete.addEventListener("click", () => {
  counterValue.textContent--;
});
