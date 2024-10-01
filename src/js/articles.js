import '/scss/articles.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useFooter } from './components/home/footer.js';
import { useTopSlider, useBottomSlider } from './components/articles/slider.js';

useTheme();
useBurger();
useFooter();
useTopSlider();
useBottomSlider();