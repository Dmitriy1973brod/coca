import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useTopSlider = () => {
  new Swiper('.top__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,    
    speed: 500,
    navigation: {
      nextEl: '.top__btn--next',
      prevEl: '.top__btn--prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });
};

export const useBottomSlider = () => {
  new Swiper('.bottom__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,    
    speed: 500,
    navigation: {
      nextEl: '.bottom__btn--next',
      prevEl: '.bottom__btn--prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });
};

