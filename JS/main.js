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
const thumbnailsContainerEl = document.querySelector(".thumbnails-container");
const titleEl = document.querySelector("#title");
const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");

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

allSlides[slideIndex].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
allThumbnails[slideIndex].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

//   AGGIUNGO L'EVENTLISTENER ALLE THUMBNAILS
for (let i = 0; i < slides.length; i++) {
  allThumbnails[i].addEventListener("click", function () {
    this.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    allThumbnails[slideIndex].classList.remove("active");

    slideIndex = parseInt(this.getAttribute("data-thumb-index"));
    console.log(slideIndex);

    allSlides[slideIndex].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    allThumbnails[slideIndex].classList.add("active");

    const desc = slides[slideIndex][1];
    titleEl.innerText = desc;
  });
}

arrowDownEl.addEventListener("click", function () {
  allThumbnails[slideIndex].classList.remove("active");

  slideIndex = slideIndex < allSlides.length - 1 ? slideIndex + 1 : 0;

  allSlides[slideIndex].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  allThumbnails[slideIndex].classList.add("active");
  allThumbnails[slideIndex].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  const desc = slides[slideIndex][1];
  titleEl.innerText = desc;
});

arrowUpEl.addEventListener("click", function () {
  allThumbnails[slideIndex].classList.remove("active");

  slideIndex = slideIndex > 0 ? slideIndex - 1 : allSlides.length - 1;

  allSlides[slideIndex].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  allThumbnails[slideIndex].classList.add("active");
  allThumbnails[slideIndex].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  const desc = slides[slideIndex][1];
  titleEl.innerText = desc;
});
