// Fibonacci Problem
// Key concepts
// * recursion
// * tree diagram 

const fib = (n) => {
    if (n <= 2) {
        return 1
    };
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21

// 2 & 1 are our base cases 
// Base cases are always equal to 1
// The two children nodes to each parent node(the number being called in the fib() function) are added together and the resulting number is the number at the parents location in the sequence.



// Now here's that function again, but now, implementing memoization
//      js object, keys will be arg to fn, value will be the return value

const fib = (n, memo = {}) => {
    if (n in memo) {
        return memo[n]
    };
    if (n <= 2) {
        return 1
    };
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(50)) // 12586269025