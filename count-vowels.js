// Function takes a string and returns the number of vowels (a, e, i, o, u) in the string.
function countVowels(string) {
    let count = 0;
    for(let i= 0; i < string.length; i++) {
        if (string[i] === 'a'||string[i] === 'e'||string[i] === 'i'||string[i] === 'o'||string[i] === 'u'){
            count += 1;
        };
    } 
    return count;
}

module.exports = countVowels;