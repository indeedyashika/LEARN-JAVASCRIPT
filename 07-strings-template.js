// STRINGS
const s = "  Hello, World  ";
console.log(s.trim(), s.length, s.toUpperCase(), s.toLowerCase());
console.log(s.includes("World"), s.startsWith("  H"), s.indexOf("o"));
console.log(s.trim().split(", "), s.trim().slice(0, 5), s.replace("World", "JS"));
console.log("ab".repeat(3), "5".padStart(3, "0"), "a-b-c".replaceAll("-", "+"));
console.log(`Sum: ${1 + 2}`);              // template literal
console.log("abc".at(-1), [..."abc"].reverse().join(""));

// Regex basics
console.log(/\d+/.test("abc123"), "a1b22".match(/\d+/g), "x@y.com".replace(/@.*/, ""));

