// VARIABLES & TYPES
const name = "Yashika";          // cannot be reassigned
let age = 18;                    // can be reassigned
age = 19;
// var is old: function-scoped, avoid it

console.log(typeof name, typeof age, typeof true, typeof undefined, typeof null, typeof {}, typeof []);
// null is "object" (historic bug); arrays are objects -> use Array.isArray

console.log(Number("42"), String(42), Boolean(""), Boolean("hi"), parseInt("12px"));
console.log(0.1 + 0.2);                  // 0.30000000000000004 (floating point)
console.log(5 == "5", 5 === "5");        // always use ===
console.log(NaN === NaN, Number.isNaN(NaN));

// Falsy: false, 0, "", null, undefined, NaN. Everything else is truthy.

