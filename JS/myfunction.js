function changeActiveSlide() {
  const height = slidesContainerEl.clientHeight;
  const topPosition = slideIndex * height * -1;

  slidesContainerEl.style.top = `${topPosition}px`;
  console.log(topPosition);
}
