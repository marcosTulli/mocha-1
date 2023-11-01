const order = require('./order');
const { expect } = require('chai');

describe('\n Order: \n', () => {
  //   it(' - Should call the callback with a true value', (done) => {
  //     let cart = {};
  //     let success;
  //     let cb = (p1) => {
  //       success = p1;
  //       expect(success).to.be.true;
  //       done();
  //     };
  //     order(cart, cb);
  //   });

  it('Should deal with rpomises', () => {
    let cart = {};
    return order(cart).then((total) => {
      expect(total).to.eq(600);
    });
  });
});
