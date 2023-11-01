const { expect } = require('chai');
const Cart = require('./Cart');

describe('\n Cart:', () => {
  describe('\n - addItem:\n', () => {
    let cart, item;
    beforeEach(() => {
      cart = new Cart();
      item = {};
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it(' - Should only have one item after adding one item', () => {
      cart.addItem(item, 1);
      expect(cart.lineItems).to.eql([{ quantity: 1, part: {} }]);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it(' - Should have as many items as added', () => {
      cart.addItem(item, 1);
      cart.addItem(item, 1);
      expect(cart.lineItems).to.eql([{ quantity: 2, part: {} }]);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it(' - Should add quantities together wehn addItem is called ', () => {
      cart.addItem(item, 2);
      cart.addItem(item, 4);
      expect(cart.lineItems).to.have.lengthOf(1);
      expect(cart.lineItems[0].quantity).to.eq(6);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it(' - Should add quantities together wehn addItem is called ', () => {
      let item2 = {};
      cart.addItem(item, 1);
      cart.addItem(item2, 1);
      expect(cart.lineItems).to.have.lengthOf(2);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it(' - Should add quantities together wehn addItem is called ', () => {
      let item2 = {};
      cart.addItem(item, 1);
      cart.addItem(item2, 1);
      cart.addItem(item, 3);
      expect(cart.lineItems).to.have.lengthOf(2);
      expect(cart.lineItems[0].quantity).to.eq(4);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  describe('\n  - getTotalCost:\n', () => {
    let cart;
    beforeEach(() => {
      cart = new Cart();
      item = {};
    });
    it(' - Should be 0 with no items', () => {
      expect(cart.getTotalCost()).to.eq(0);
    });
    it(' - Should be 5 with a single item in cart', () => {
      let item = { cost: 5, name: 'TUKI' };
      cart.addItem(item, 1);
      expect(cart.getTotalCost()).to.eq(5);
    });
    it(' - Should be 15 with multiple items in cart', () => {
      let item = { cost: 5 };
      let item2 = { cost: 10 };
      cart.addItem(item, 1);
      cart.addItem(item2, 1);
      expect(cart.getTotalCost()).to.eq(15);
    });

    describe('\n  - getTotalCost (variations):\n', () => {
      const item1 = { cost: 5 };
      const item2 = { cost: 10 };
      const emptyLineItems = [];
      const singleItemLineItems = [{ part: item1, quantity: 1 }];
      const multipleLineItems = [
        { part: item1, quantity: 1 },
        { part: item2, quantity: 1 },
      ];
      let testVariations = [
        { lineItems: emptyLineItems, expected: 0 },
        { lineItems: singleItemLineItems, expected: 5 },
        { lineItems: multipleLineItems, expected: 15 },
      ];

      testVariations.forEach((test) => {
        it(` - Correctly calculates the total costwith ${test.lineItems.length} items`, () => {
          cart.lineItems = test.lineItems;
          expect(cart.getTotalCost()).to.eq(test.expected);
        });
      });
    });
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  describe('\n - empty :\n', () => {
    let cart, item;
    beforeEach(() => {
      cart = new Cart();
      item = {};
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it(' - Should have an empty array after calling empty', () => {
      cart.lineItems = [{}, {}, {}];
      cart.empty();
      expect(cart.lineItems).to.eql([]);
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it(' - Should have an empty array after calling empty', () => {
      let originalLineItems = cart.lineItems;
      cart.empty();
      expect(cart.lineItems).to.not.eq(originalLineItems);
    });
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
});
