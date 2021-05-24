// ***canConstruct Problem***
// Decision Problem(boolean(yes, no) return)

// Write a function 'canConstruct(target, wordBank)' that accepts a target string and an array of strings.

//The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank' array.

// You may reuse elements of 'wordBank' as many times as needed.

const canConstruct = (target, wordBank) => {
    if (target === '') {
        return true
    };

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    }


    return false;
};


// Brute Force
// m = target.length(height)
// n = wordBank.length(branching factor)

// *** ALWAYS CHECK the tree diagram and the code you have written to see if you have created any other growing structures that will ultimately affect the time and space complexities.


// TIME COMPLEXITY: O(n^m * m)  (in the tree diagram(the overall time complexity is going to be the branching factor to the height power))
// SPACE COMPLEXITY: O(m^2)


console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true


// And now the canConstruct function, but memoized


const canConstruct = (target, wordBank, memo={}) => {
    if (target in memo) {
        return memo[target]
    };
    if (target === '') {
        return true
    };

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }


    memo[target] = false;
    return false;
};


// Memoized
// m = target.length
// n = wordBank.length
// TIME COMPLEXITY: O(n * m^2)
// SPACE COMPLEXITY: O(m^2)


console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
])); // false