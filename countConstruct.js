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


console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4