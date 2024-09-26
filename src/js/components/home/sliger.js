import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';

export const insightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation, Pagination, EffectFade],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.insight__btn--next',
      prevEl: '.insight__btn--prev',
    },
    breakpoints: {
      992: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    speed: 700,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};

export const autoParthersSlider = () => {
  new Swiper('.partners__slider-mobile', {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    speed: 2000,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
};
