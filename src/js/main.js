import '../assets/scss/main.scss';
import 'swiper/css/effect-fade';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { insightSlider, useTestimonialsSlider, autoParthersSlider } from './components/home/sliger.js';
import { useFooter } from './components/home/footer.js';

useTheme();
useBurger();
insightSlider();
useTestimonialsSlider();
autoParthersSlider();
useFooter();