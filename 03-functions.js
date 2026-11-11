// FUNCTIONS
function add(a, b) { return a + b; }              // declaration (hoisted)
const mul = function (a, b) { return a * b; };    // expression
const sq = (x) => x * x;                          // arrow
const greet = (name = "friend") => `Hi ${name}`;  // default param
const sum = (...nums) => nums.reduce((a, b) => a + b, 0); // rest

console.log(add(2, 3), mul(2, 3), sq(4), greet(), greet("Yash"), sum(1, 2, 3, 4));

// Functions are values: pass them, return them
const applyTwice = (fn, x) => fn(fn(x));
console.log(applyTwice(sq, 3));
const makeMultiplier = (m) => (x) => x * m;       // returns a function
console.log(makeMultiplier(3)(5));

// IIFE
(() => console.log("runs immediately"))();

// Recursion
const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
console.log(fact(5));

