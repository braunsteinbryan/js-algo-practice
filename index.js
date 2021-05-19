// Fibonacci Problem
// Key concepts
// * recursion
// * tree diagram 

const fib = (n) => {
    if (n <= 2) {
        return 1
    };
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(6))
console.log(fib(7))
console.log(fib(8))

// 2 & 1 are our base cases 
// Base cases are always equal to 1
// The two children nodes to each parent node(the number being called in the fib() function) are added together and the resulting number is the number at the parents location in the sequence.



