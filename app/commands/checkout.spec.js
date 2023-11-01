const { expect } = require('chai');
const Cart = require('../models/Cart');
const checkout = require('./Checkout');

describe('\nCheckout:', () => {
  describe('\n - Error:\n', () => {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it(' - Should trhow an error with an empty cart', () => {
      let cart = new Cart();
      const callCheckout = () => {
        checkout(null, cart);
      };
      expect(callCheckout).to.throw();
    });
  });
});
