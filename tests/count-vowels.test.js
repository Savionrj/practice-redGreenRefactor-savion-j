const countVowels = require('../count-vowels.js');

describe('count vowels', function(){
  test("should return the number of vowels within a given string", 
    function() {
    expect(countVowels('hello')).toBe(2);
  });
});