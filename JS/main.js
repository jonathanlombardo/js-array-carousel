// definisco le slide come [Image, desc]
const slides = [
  ["Jagrid.png", "Jagrid"],
  ["Jaquaman.png", "Jaquaman"],
  ["Jhanos.png", "Jhanos"],
  ["Jhon-of-thrones.png", "Jhon Of Thrones"],
  ["Jhon-of-War.png", "Jhon Of War"],
  ["Jimli.png", "Jimli"],
  ["Jonnavacciuolo.png", "Jonnavacciuolo"],
  ["Jonathus.png", "Jonathus Silente"],
];

const slidesContainerEl = document.querySelector(".slides-container");
const carouselContainerEl = document.querySelector(".carousel-wrapper");
const thumbnailsContainerEl = document.querySelector(".thumbnails-container");
const titleEl = document.querySelector("#title");
const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");
const height = slidesContainerEl.clientHeight;

let slideIndex = 0;

for (let i = 0; i < slides.length; i++) {
  const img = slides[i][0];
  const desc = slides[i][1];
  let activeClass = "";
  if (slideIndex == i) {
    activeClass = "active";
    titleEl.innerText = desc;
  }

  //   CREO LE SLIDE
  const slideHtml = `<img src="./img/${img}" class="slide" alt="${desc}" />`;
  slidesContainerEl.innerHTML += slideHtml;

  //   CREO LE THUMNAILS

  const thumbHtml = `
  <div class="thumbnail mb-2 ${activeClass}" data-thumb-index="${i}">
    <img class="thumbnail-img" src="./img/${img}" alt="${desc}">
  </div>
  `;
  thumbnailsContainerEl.innerHTML += thumbHtml;
}

const allSlides = document.querySelectorAll(".slide");
const allThumbnails = document.querySelectorAll(".thumbnail");

changeActiveSlide(slideIndex, slidesContainerEl);
allThumbnails[slideIndex].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

window.addEventListener("resize", function () {
  slidesContainerEl.style.transition = "0s";
  goToActiveSlide(slideIndex);
  slidesContainerEl.style.transition = "transition: var(--sliding-trans)";
  console.log("test");
});

//   AGGIUNGO L'EVENTLISTENER ALLE THUMBNAILS
for (let i = 0; i < slides.length; i++) {
  allThumbnails[i].addEventListener("click", function () {
    this.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    const newIndex = parseInt(this.getAttribute("data-thumb-index"));
    goToActiveSlide(newIndex);
  });
}

arrowDownEl.addEventListener("click", function () {
  const newIndex = slideIndex < allSlides.length - 1 ? slideIndex + 1 : 0;
  goToActiveSlide(newIndex);
});

arrowUpEl.addEventListener("click", function () {
  const newIndex = slideIndex > 0 ? slideIndex - 1 : allSlides.length - 1;
  goToActiveSlide(newIndex);
});

let slidingAuto = setInterval(function () {
  const newIndex = slideIndex < allSlides.length - 1 ? slideIndex + 1 : 0;
  goToActiveSlide(newIndex);
  console.log("slidingAuto ON");
}, 3000);

carouselContainerEl.addEventListener("mouseenter", function () {
  clearInterval(slidingAuto);
});

carouselContainerEl.addEventListener("mouseleave", function () {
  slidingAuto = setInterval(function () {
    const newIndex = slideIndex < allSlides.length - 1 ? slideIndex + 1 : 0;
    goToActiveSlide(newIndex);
    console.log("slidingAuto ON");
  }, 3000);
  console.log("ciao");
});
