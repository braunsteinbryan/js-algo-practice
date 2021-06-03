// *** countConstruct Problem ***

// Write a function 'countConstruct(target, wordBank)' that accepts a target string and an array of strings.

// The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.

// You may resuse elements of 'wordBank' as many times as needed.

const countConstruct = (target, wordBank) => {
    if (target === '') {
        return 1
    };

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
            totalCount += numWaysForRest;
        }
    }

    return totalCount;
};


// Brute Force 
// TIME COMPLEXITY: O(n^m * m)
// SPACE COMPLEXITY: O(m^2)

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4


// And now, that problem again but, memoized



const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) {
        return memo[target]
    };
    if (target === '') {
        return 1
    };

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
};


// Memoized

// TIME COMPLEXITY: O(n * m^2)
// *by memoizing the problem, we were able to bring the time complexity from exponential to a polynomial time complexity

// SPACE COMPLEXITY: O(m^2)
// *the space complexity is unaffected

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
])); // 0

