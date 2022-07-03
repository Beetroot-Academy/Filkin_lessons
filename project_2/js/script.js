document.addEventListener("DOMContentLoaded", function () {
  let heroSplide = new Splide("#hero-splide", {
    type: "loop",
    cover: true,
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 5000,
    arrows: false,
    paginationDirection: "ttb",
    rewind: true,
    width: "100vw",
    height: "100vh",
  });

  let newsSplide = new Splide("#news-splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    rewind: true,
  });

  heroSplide.mount();
  newsSplide.mount();
});
