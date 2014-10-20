describe('RomanNumeralGenerator', function() {
    it('should handle a 1', function() {
        var romanNumerals = RomanNumeralGenerator.create();
        expect(romanNumerals.generate(1)).toEqual('I');
    });
});

describe('RomanNumeralGenerator', function() {
    it('should handle a 5', function() {
        var romanNumerals = RomanNumeralGenerator.create();
        expect(romanNumerals.generate(5)).toEqual('V');
    });
});

describe('RomanNumeralGenerator', function() {
    it('should handle a 10', function() {
        var romanNumerals = RomanNumeralGenerator.create();
        expect(romanNumerals.generate(10)).toEqual('X');
    });
});

describe('RomanNumeralGenerator', function() {
    it('should handle a 20', function() {
        var romanNumerals = RomanNumeralGenerator.create();
        expect(romanNumerals.generate(20)).toEqual('XX');
    });
});

describe('RomanNumeralGenerator', function() {
    it('should handle a 3999', function() {
        var romanNumerals = RomanNumeralGenerator.create();
        expect(romanNumerals.generate(3999)).toEqual('MMMCMXCIX');
    });
});

describe('RomanNumeralGenerator', function() {
    it('should report if number less than 1', function() {
        var romanNumerals = RomanNumeralGenerator.create();
        expect(romanNumerals.generate(0)).toEqual('Invalid number');
    });
});

describe('RomanNumeralGenerator', function() {
    it('should report if number greater than 3999', function() {
        var romanNumerals = RomanNumeralGenerator.create();
        expect(romanNumerals.generate(4000)).toEqual('Invalid number');
    });
});