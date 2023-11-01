const { expect } = require('chai');
const { getArgument } = require('./utilities');

describe('Utilities:', () => {
  describe('getArgument:', () => {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it('- Should return the second word when asked for the first parameter', () => {
      let firstArg = getArgument('command argument ', 1);
      expect(firstArg).to.eq('argument');
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it('- Should return the third word when asked for the first parameter', () => {
      let secondArg = getArgument('command argument1 argument2', 2);
      expect(secondArg).to.eq('argument2');
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it('- Should return undefined when asked for a third parameter', () => {
      let thirdArg = getArgument('command argument1 argument2', 'argument3', 3);
      expect(thirdArg).to.be.undefined;
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    it('- Should return undefined when asked for no parameters', () => {
      let thirdArg = getArgument('command argument1', 3);
      expect(thirdArg).to.be.undefined;
    });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  });
});
