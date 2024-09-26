import '/scss/about.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useFooter } from './components/home/footer.js';
import { useAboutSlider, teamSlider } from './components/about/slider.js';

useTheme();
useBurger();
useFooter();
useAboutSlider();
teamSlider();