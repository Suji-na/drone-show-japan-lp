import { smoothScroll } from "./components/smoothScroll";
// import { showOnScroll } from "./components/showOnScroll";
// import { toggleNavigation } from "./components/toggleNavigation";
// import { scrollToTop } from "./components/scrollTotop";
import AOS from "aos";
import { faq } from "./components/faq";
import { menuClick } from "./components/menuClick";
import { swiper } from "./components/swiper";
import { windowScroll } from "./components/windowScroll";

smoothScroll();
// showOnScroll();
// scrollToTop();
// toggleNavigation();
menuClick();
swiper();
faq();
windowScroll();
AOS.init({
    once: true,
    duration: 2000,
});
