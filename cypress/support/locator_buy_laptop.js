export function getAllLocators() {
    return {
      // Page navigation
      homePageLink: '#nava',
  
      // Phone category page
      laptopCategoryButton: '[onclick="byCat(\'notebook\')"]',
      firstLaptopLink: ':nth-child(2) > .card > .card-block > .card-title',
      // Cart page
      addToCartButton: '.col-sm-12 > .btn',
      cartLink: '#cartur',
  
      // Checkout page
      priceValidation: '#totalm',
      checkoutButton: '.col-lg-1 > .btn',
      nameInput: '#name',
      countryInput: '#country',
      cityInput: '#city',
      cardNumberInput: '#card',
      expiryMonthInput: '#month',
      expiryYearInput: '#year',
      purchaseButton: '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
  
      // Purchase verification
      purchaseSuccessMessage: '.sweet-alert > h2',
      confirmationButton: '.confirm',
    };
  }