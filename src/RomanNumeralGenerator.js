// RomanNumberGenerator
// There is a more elegant method using RegEx.

// The key is to have the subtractive principle values as the data set (900, 400, 90, 40, 9, 4).
// See http://www.roman-numerals.org/subtract.html for more information.
var romanNumeralsIntegersArray = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
var romanNumeralsLettersArray = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

var RomanNumeralGenerator = {
    
    create: function() {
        return Object.create(RomanNumeralGenerator);
    },
    
    generate: function(number) {
        var romanNumeral = '';
        
        // Test number is within 1 and 3999.
        if( number >= 1 && number <= 3999 ) {
            // As it is subtractive, go through number from thousands, hundreds, tens to units.
            for( var i = 0; i < romanNumeralsIntegersArray.length; i++ ) {
                
                while( number >= romanNumeralsIntegersArray[i] ) {
                    
                    // Subtract tested number.
                    number -= romanNumeralsIntegersArray[i];
                    
                    // Concatenate string with data from Roman Numerals array.
                    romanNumeral += romanNumeralsLettersArray[i];
                }
            }
        } else {
            romanNumeral = 'Invalid number';
        }
        
        return romanNumeral;
    }
};