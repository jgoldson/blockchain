const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    "b010f36bfa1198d14aecc226f2bfa8b836d4518535bdd9b6e45131982e987d20"

    it('generates a SHA-256 hashed output', () => {
       expect(cryptoHash('quiqui'))
       .toEqual("b010f36bfa1198d14aecc226f2bfa8b836d4518535bdd9b6e45131982e987d20"); 
    });

    it('produces the same hash with the same input arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three'))
        .toEqual(cryptoHash('three', 'one', 'two'));
    });
});