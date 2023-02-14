import Swiper from "swiper";

const swiper = new Swiper(".swiper", {
    // navigation elements
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // pagination elements
    pagination: {
        el: ".swiper-pagination",
    },

    // scrolling
    mousewheel: true,
    keyboard: true,
});