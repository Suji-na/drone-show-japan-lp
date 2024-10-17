import Swiper from "swiper/bundle";

function swiper() {

    const swiperMv = new Swiper(".swiper-mv", {
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    swiperMv;

    const swiperAboutTop = new Swiper(".swiper-about-top", {
        slidesPerView: 5.81,
        spaceBetween: 24,
        freeMode: false,
        allowTouchMove: false,
        loop: true,
        speed: 4000,
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        breakpoints: {
            320: {
                slidesPerView: 1.67,
            },
            767: {
                slidesPerView: 4.5,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 5.81,
                spaceBetween: 24,
            }
        }
    });
    swiperAboutTop;

    const swiperAboutBtm = new Swiper(".swiper-about-btm", {
        slidesPerView: 5.81,
        spaceBetween: 24,
        freeMode: false,
        allowTouchMove: false,
        loop: true,
        speed: 6000,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1.67,
            },
            767: {
                slidesPerView: 4.5,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 5.81,
                spaceBetween: 24,
            }
        }
    });
    swiperAboutBtm;

}

export { swiper };
