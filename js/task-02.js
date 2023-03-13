const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const log = (log) => console.log(log);

[...ingredients].forEach((elem) => {
  const item = document.createElement("li");
  item.textContent = elem;
  item.classList.add("item");
  list.append(item);
});
