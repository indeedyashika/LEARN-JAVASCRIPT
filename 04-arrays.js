// ARRAYS
const a = [5, 3, 8, 1];
a.push(9); a.pop(); a.unshift(0); a.shift();
console.log(a, a.length, a.includes(8), a.indexOf(8));

// Non-mutating methods (preferred, used heavily in React)
console.log(a.map((x) => x * 2));
console.log(a.filter((x) => x > 3));
console.log(a.reduce((acc, x) => acc + x, 0));
console.log(a.find((x) => x > 3), a.findIndex((x) => x > 3));
console.log(a.some((x) => x > 7), a.every((x) => x > 0));
console.log([...a].sort((x, y) => x - y));        // copy first: sort mutates!
console.log(a.slice(1, 3), [1, [2, [3]]].flat(Infinity));
console.log(a.join("-"));

a.forEach((x, i) => console.log(i, x));

// Chaining
const result = [1, 2, 3, 4, 5, 6].filter((x) => x % 2 === 0).map((x) => x ** 2);
console.log(result);

