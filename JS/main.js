// definisco le slide come [Image, desc]
const slides = [
  ["Jagrid.png", "Jagrid"],
  ["Jaquaman.png", "Jaquaman"],
  ["Jhanos.png", "Jhanos"],
  ["Jhon-of-thrones.png", "Jhon Of Thrones"],
  ["Jhon-of-War.png", "Jhon Of War"],
  ["Jimli.png", "Jimli"],
  ["Jonnavacciuolo.png", "Jonnavacciuolo"],
];

const slidesContainerEl = document.querySelector(".slides-container");

let slideIndex = 0;

for (let i = 0; i < slides.length; i++) {
  const img = slides[i][0];
  const desc = slides[i][1];
  let activeClass = "";
  if (slideIndex == i) activeClass = " active";

  const slideHtml = `<img src="./img/${img}" class="slide${activeClass}" alt="${desc}" />`;
  slidesContainerEl.innerHTML += slideHtml;
}

const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");

arrowDownEl.addEventListener("click", function () {
  console.log("ok");
  const allSlides = document.getElementsByClassName("slide");

  allSlides[slideIndex].classList.remove("active");

  slideIndex = slideIndex < allSlides.length - 1 ? slideIndex + 1 : 0;

  allSlides[slideIndex].classList.add("active");
});

arrowUpEl.addEventListener("click", function () {
  console.log("ok");

  const allSlides = document.getElementsByClassName("slide");

  allSlides[slideIndex].classList.remove("active");

  slideIndex = slideIndex > 0 ? slideIndex - 1 : allSlides.length - 1;

  allSlides[slideIndex].classList.add("active");
});
