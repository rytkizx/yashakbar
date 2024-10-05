// js AOS
AOS.init({
  duration: 1000,
});
// akhir js AOS

// swipper js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 3,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
// akhir swipper js
