import '../assets/scss/pricing.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';
import { useFooter } from './components/home/footer.js';

useTheme();
useBurger();
useFooter();
usePriceSwitcher();
