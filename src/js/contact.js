import '../assets/scss/contact.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { autoParthersSlider } from './components/home/sliger.js';
import { usePhone } from './components/contact/phone.js';
import { useFooter } from './components/home/footer.js';

useTheme();
useBurger();
autoParthersSlider();
usePhone();
useFooter();