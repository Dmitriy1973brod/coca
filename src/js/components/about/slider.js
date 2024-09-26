import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.ideas__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    speed: 500,
    navigation: {
      nextEl: '.ideas__tog-btn--next',
      prevEl: '.ideas__tog-btn--prev',
    },
    breakpoints: {
      992: {
        spaceBetween: 20,
      },
    },
  });
};

export const teamSlider = () => {
  new Swiper('.team__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    speed: 500,   
    navigation: {
      nextEl: '.team__btn--next',
      prevEl: '.team__btn--prev',
    },
    breakpoints: {
      992: {
        centeredSlides: false,
      },
    },
  });
};
