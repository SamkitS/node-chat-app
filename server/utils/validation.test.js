const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should reject non string values', () => {
        var nonString = 35;
        var result = isRealString(nonString);
        
        expect(result).toBeFalsy();
    })

    it('Should reject string with only spaces', () => {
        var nonString = '   ';
        var result = isRealString(nonString);
        
        expect(result).toBeFalsy();
    })

    it('Should allow string with non space characters', () => {
        var nonString = 'Samkit';
        var result = isRealString(nonString);
        
        expect(result).toBeTruthy(); 
    })
})

