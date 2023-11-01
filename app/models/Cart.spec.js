const { expect } = require('chai');
const Cart = require('./Cart');

describe('Cart:', () => {
  describe('addItem:', () => {
    let cart, item;
    beforeEach(() => {
      cart = new Cart();
      item = {};
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it('Should only have one item after adding one item', () => {
      cart.addItem(item, 1);
      expect(cart.lineItems).to.have.lengthOf(1);
      expect(cart.lineItems[0].quantity).to.eq(1);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it('Should only have one item after adding one item', () => {
      cart.addItem(item, 1);
      cart.addItem(item, 1);
      expect(cart.lineItems).to.have.lengthOf(1);
      expect(cart.lineItems[0].quantity).to.eq(2);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  });
});
