export function getAllLocators() {
  return {
    // Page navigation
    homePageLink: '#nava',

    // Phone category page
    phoneCategoryButton: '[onclick="byCat(\'phone\')"]',
    firstPhoneLink: ':nth-child(1) > .card > .card-block > .card-title > .hrefch',

    // Cart page
    cartLink: ':nth-child(4) > .nav-link',
    cartProductName: '.cart-content > .card > .card-body > h4.card-title > a',
    cartProductQuantity: '.cart-content > .card > .card-body > .row > div:nth-child(1) > span',
    cartProductPrice: '.cart-content > .card > .card-body > .row > div:nth-child(2) > h5.card-price',

    // Checkout page
    checkoutButton: '.col-lg-1 > .btn',
    addToCartButton: '.col-sm-12 > .btn',
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