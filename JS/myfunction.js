function changeActiveSlide(slideIndex, slidesContainerEl) {
  const height = slidesContainerEl.clientHeight;
  const topPosition = slideIndex * height * -1;

  slidesContainerEl.style.top = `${topPosition}px`;
  // console.log(topPosition);
}

function goToActiveSlide(index) {
  allThumbnails[slideIndex].classList.remove("active");

  slideIndex = index;

  changeActiveSlide(slideIndex, slidesContainerEl);

  allThumbnails[slideIndex].classList.add("active");
  allThumbnails[slideIndex].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  const desc = slides[slideIndex][1];
  titleEl.innerText = desc;
}
