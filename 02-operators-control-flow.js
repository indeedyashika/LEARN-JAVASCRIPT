// OPERATORS & CONTROL FLOW
const n = 7;
console.log(n % 2 === 0 ? "even" : "odd");        // ternary
console.log(null ?? "default", 0 ?? "default");   // ?? only for null/undefined
console.log(0 || "default", "" || "x");           // || for any falsy
const user = { profile: null };
console.log(user.profile?.email);                 // optional chaining -> undefined

if (n > 10) console.log("big");
else if (n > 5) console.log("medium");
else console.log("small");

switch (n) {
  case 7: console.log("seven"); break;
  default: console.log("other");
}

for (let i = 0; i < 3; i++) console.log("for", i);
let k = 0;
while (k < 3) { k++; if (k === 2) continue; console.log("while", k); }
for (const ch of "abc") console.log(ch);          // iterate values
for (const key in { a: 1, b: 2 }) console.log(key); // iterate keys

