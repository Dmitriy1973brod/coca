export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');

  const starterPriceTime = document.querySelector('[data-price="starter-time"]');
  const popularPriceTime = document.querySelector('[data-price="popular-time"]');
  const enterprisePriceTime = document.querySelector('[data-price="enterprise-time"]');

  const priceList = {
    starter: {
      default: 120,
      witchSale: 100*12,
      timeDefault: '/mo',
      time: '/yr',      
    },
    popular: {
      default: 1680,
      witchSale: 1400*12,
      timeDefault: '/mo',
      time: '/yr',      
    },
    enterprise: {
      default: 2520,
      witchSale: 2100*12,
      timeDefault: '/mo',
      time: '/yr',      
    },
  }; 
  
  const setPricesWitchSale = () => {
    starterPrice.textContent = priceList.starter.witchSale;
    popularPrice.textContent = priceList.popular.witchSale;
    enterprisePrice.textContent = priceList.enterprise.witchSale;

    starterPriceTime.textContent = priceList.starter.time;
    popularPriceTime.textContent = priceList.popular.time;
    enterprisePriceTime.textContent = priceList.enterprise.time;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;

    starterPriceTime.textContent = priceList.starter.timeDefault;
    popularPriceTime.textContent = priceList.popular.timeDefault;
    enterprisePriceTime.textContent = priceList.enterprise.timeDefault;
  }

  switcher.checked = true;
  setPricesWitchSale();
  

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
        setPricesWitchSale();
    } else {
        setDefaultPrices();
    }
  });
};
