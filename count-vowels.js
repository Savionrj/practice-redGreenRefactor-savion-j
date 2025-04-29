// Function takes a string and returns the number of vowels (a, e, i, o, u) in the string.
function countVowels(string) {
    let count = 0;
    let allowed = "aeiou"
    for(char of string) {
        if(allowed.includes(char)) {
            count += 1
        }
    }
    return count;
}

module.exports = countVowels;