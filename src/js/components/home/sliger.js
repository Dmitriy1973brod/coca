import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';

export const insightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      992: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
    new Swiper('.testimonials__slider', {
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 22,
        loop: true,
        navigation: {
            nextEl: '.testimonials__btn--next',
            prevEl: '.testimonials__btn--prev',
          },
        
    })
}