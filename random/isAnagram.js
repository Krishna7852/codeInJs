const isAnagram = (s, t) => {
    //By definition, anagrams are the same length, so we can quickly eliminate
    //any invalid anagrams by comparing the length of the two strings first
    if (s.length != t.length){
        return false;
    }
    
    //Explained:
    //str.split('') --> Takes the string input and converts it to an array of characters
    //  ex: String 'hello' is converted to ['h','e','l','l','o']
    //
    //.sort() --> Built-in JS function to sort the array in ascending order
    //  ex: ['h','e','l','l','o'] is sorted to ['e','h','l','l','o']
    //  If the words are valid anagrams, the sorted array elements will now be in the same order
    //
    //.join('') --> Takes the array and converts back into a string
    //  ex: Array ['e','h','l','l','o'] is converted back to 'ehllo'
    //
    //The above functions are performed on each string, then compared, returning either True or False.
    return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(isAnagram('hello', 'ehllo'));