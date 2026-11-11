// OBJECTS
const user = {
  name: "Yash",
  age: 18,
  skills: ["C++", "JS"],
  greet() { return `Hi, I am ${this.name}`; },
};
console.log(user.name, user["age"], user.greet());

user.city = "Ghaziabad";          // add
delete user.age;                  // remove
console.log("name" in user, Object.keys(user), Object.values(user));
console.log(Object.entries(user));

const key = "dynamic";
const o = { [key]: 1 };           // computed key
console.log(o);

// Copy (shallow) -- never mutate state directly in React
const copy = { ...user, name: "New" };
console.log(copy.name, user.name);

// Deep copy (works for plain data only, not functions)
const data = { name: "Yash", skills: ["C++", "JS"] };
const deep = structuredClone(data);
deep.skills.push("React");
console.log(data.skills, deep.skills);

// JSON
const json = JSON.stringify(user);
console.log(json, JSON.parse(json));

