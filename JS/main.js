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
  const slideHtml = `<img src="./img/${img}" class="slide ${activeClass}" alt="${desc}" />`;
  slidesContainerEl.innerHTML += slideHtml;

  //   CREO LE THUMNAILS
  const newThumbnail = document.createElement("div");
  const newThumbnailImg = document.createElement("img");

  newThumbnail.classList.add("thumbnail", "bordered", "mb-2");
  newThumbnail.setAttribute("data-thumb-index", i);

  newThumbnailImg.classList.add("thumbnail-img");
  if (activeClass) newThumbnailImg.classList.add(activeClass);
  newThumbnailImg.setAttribute("src", `./img/${img}`);
  newThumbnailImg.setAttribute("alt", `${desc}`);

  newThumbnail.append(newThumbnailImg);
  thumbnailsContainerEl.append(newThumbnail);

  //   AGGIUNGO L'EVENTLISTENER ALLE THUMBNAILS
  newThumbnail.addEventListener("click", function () {
    const allSlides = document.querySelectorAll(".slide");
    const allThumbnails = document.querySelectorAll(".thumbnail-img");

    allSlides[slideIndex].classList.remove("active");
    allThumbnails[slideIndex].classList.remove("active");

    slideIndex = this.getAttribute("data-thumb-index");
    console.log(slideIndex);

    allSlides[slideIndex].classList.add("active");
    allThumbnails[slideIndex].classList.add("active");
    titleEl.innerText = desc;
  });
}

const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");

arrowDownEl.addEventListener("click", function () {
  const allSlides = document.querySelectorAll(".slide");
  const allThumbnails = document.querySelectorAll(".thumbnail-img");

  allSlides[slideIndex].classList.remove("active");
  allThumbnails[slideIndex].classList.remove("active");

  //   slideIndex = slideIndex < allSlides.length - 1 ? slideIndex + 1 : 0;

  if (slideIndex < allSlides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }

  allSlides[slideIndex].classList.add("active");
  allThumbnails[slideIndex].classList.add("active");
  allThumbnails[slideIndex].scrollIntoView(false);

  const desc = slides[slideIndex][1];
  titleEl.innerText = desc;
});

arrowUpEl.addEventListener("click", function () {
  const allSlides = document.querySelectorAll(".slide");
  const allThumbnails = document.querySelectorAll(".thumbnail-img");

  allSlides[slideIndex].classList.remove("active");
  allThumbnails[slideIndex].classList.remove("active");

  //   slideIndex = slideIndex > 0 ? slideIndex - 1 : allSlides.length - 1;

  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = allSlides.length - 1;
  }

  allSlides[slideIndex].classList.add("active");
  allThumbnails[slideIndex].classList.add("active");
  allThumbnails[slideIndex].scrollIntoView(false);

  const desc = slides[slideIndex][1];
  titleEl.innerText = desc;
});
