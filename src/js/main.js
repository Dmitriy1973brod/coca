import '../assets/scss/main.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { insightSlider, useTestimonialsSlider, autoParthersSlider } from './components/home/sliger.js';

useTheme();
useBurger();
insightSlider();
useTestimonialsSlider();
autoParthersSlider();