const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const galleryStylesPosition = document.querySelector("head");
const galleryStyles = `<style>
.gallery {
  display: flex;
  gap: 1%;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.image {
  display: block;
  width: 100%;
 
  object-fit: cover;
}

</style>`;

galleryStylesPosition.insertAdjacentHTML("beforeend", galleryStyles);

const image = images
  .map(
    ({ url, alt }) =>
      `<li><img width=350 height=250 class="image" src="${url}" alt="${alt}" /></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", image);
