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

    it('Should have as many items as added', () => {
      cart.addItem(item, 1);
      cart.addItem(item, 1);
      expect(cart.lineItems).to.have.lengthOf(1);
      expect(cart.lineItems[0].quantity).to.eq(2);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it('Should add quantities together wehn addItem is called ', () => {
      cart.addItem(item, 2);
      cart.addItem(item, 4);
      expect(cart.lineItems).to.have.lengthOf(1);
      expect(cart.lineItems[0].quantity).to.eq(6);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it('Should add quantities together wehn addItem is called ', () => {
      let item2 = {};
      cart.addItem(item, 1);
      cart.addItem(item2, 1);
      expect(cart.lineItems).to.have.lengthOf(2);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it('Should add quantities together wehn addItem is called ', () => {
      let item2 = {};
      let item3 = {};
      cart.addItem(item, 1);
      cart.addItem(item2, 1);
      cart.addItem(item, 3);
      expect(cart.lineItems).to.have.lengthOf(2);
      expect(cart.lineItems[0].quantity).to.eq(4);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  });

  describe('getTotalCost:', () => {
    let cart;
    beforeEach(() => {
      cart = new Cart();
      item = {};
    });
    it('Should be  0 with no items', () => {
      expect(cart.getTotalCost()).to.eq(0);
    });
    it('Should be  5 with a single item in cart', () => {
      let item = { cost: 5, name: 'TUKI' };
      cart.addItem(item, 1);
      expect(cart.getTotalCost()).to.eq(5);
    });
    it('Should be  15 with multiple items in cart', () => {
      let item = { cost: 5, name: 'TUKI' };
      let item2 = { cost: 10, name: 'TUKI' };
      cart.addItem(item, 1);
      cart.addItem(item2, 1);
      expect(cart.getTotalCost()).to.eq(15);
    });
  });
});
