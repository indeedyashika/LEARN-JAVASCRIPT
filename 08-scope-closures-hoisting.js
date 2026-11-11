// SCOPE, CLOSURES, HOISTING
let g = "global";
function outer() {
  let o = "outer";
  function inner() { return `${g} ${o}`; }   // inner sees outer variables
  return inner;
}
console.log(outer()());

// Closure: function remembers its variables after outer returns
function counter() {
  let count = 0;
  return { inc: () => ++count, get: () => count };
}
const c = counter();
c.inc(); c.inc();
console.log(c.get());

// Block scope: let/const
{ let hidden = 1; }
// console.log(hidden); // ReferenceError

// Hoisting
console.log(hoisted());                      // works (declaration hoisted)
function hoisted() { return "ok"; }
console.log(typeof v);                       // undefined (var hoisted, not value)
var v = 1;
// console.log(l); let l = 1;  // TDZ ReferenceError

// Classic loop closure gotcha
for (var i = 0; i < 3; i++) setTimeout(() => process.stdout.write(`var:${i} `), 0);
for (let j = 0; j < 3; j++) setTimeout(() => process.stdout.write(`let:${j} `), 0);
setTimeout(() => console.log(), 0);

