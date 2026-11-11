// DESTRUCTURING, SPREAD, REST
const [x, y, ...others] = [1, 2, 3, 4];
console.log(x, y, others);

let p = 1, q = 2;
[p, q] = [q, p];                  // swap
console.log(p, q);

const { name, age = 20, address: { city } = {} } = { name: "Yash", address: { city: "Delhi" } };
console.log(name, age, city);

const show = ({ title, price }) => `${title}: ${price}`;
console.log(show({ title: "Book", price: 99 }));

const arr1 = [1, 2], arr2 = [3];
console.log([...arr1, ...arr2, 4]);
console.log({ ...{ a: 1, b: 2 }, b: 3 });          // later keys win
console.log(Math.max(...[4, 9, 2]));

