//TASK 1

const categories = document.querySelectorAll(".item");

console.log("Number of categories", categories.length);

//TASK 2

categories.forEach((category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.lastElementChild.children.length);
});
