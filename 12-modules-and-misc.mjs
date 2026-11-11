// MODULES (this is .mjs so import/export work in Node)
import { readFileSync } from "node:fs";
export const PI = 3.14;
export default function hello() { return "default export"; }
// In another file: import hello, { PI } from "./12-modules-and-misc.mjs";

console.log(hello(), PI, typeof readFileSync);

// Useful built-ins
const set = new Set([1, 2, 2, 3]);
const map = new Map([["a", 1]]);
map.set("b", 2);
console.log([...set], map.get("b"), [...map.keys()], set.has(2));
console.log([...new Set("mississippi")].join(""));

const date = new Date("2026-01-15");
console.log(date.getFullYear(), date.toISOString());
console.log(Math.round(2.5), Math.floor(-1.5), Math.random() < 1);
console.log([3, 1, 2].toSorted?.() ?? "toSorted unsupported");

// Symbols, generators
function* range(n) { for (let i = 0; i < n; i++) yield i; }
console.log([...range(4)]);
