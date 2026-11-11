// ASYNC: callbacks -> promises -> async/await
// JS is single-threaded; the event loop runs callbacks after current code finishes.
console.log("1 start");
setTimeout(() => console.log("4 timeout (macrotask)"), 0);
Promise.resolve().then(() => console.log("3 promise (microtask)"));
console.log("2 end of sync code");

const wait = (ms, v) => new Promise((res) => setTimeout(() => res(v), ms));
const fail = (ms) => new Promise((_, rej) => setTimeout(() => rej(new Error("boom")), ms));

async function main() {
  console.log(await wait(50, "awaited value"));

  // sequential vs parallel
  console.time("seq"); await wait(50); await wait(50); console.timeEnd("seq");
  console.time("par"); await Promise.all([wait(50), wait(50)]); console.timeEnd("par");

  const results = await Promise.allSettled([wait(10, "ok"), fail(10)]);
  console.log(results.map((r) => r.status));
  console.log(await Promise.race([wait(100, "slow"), wait(10, "fast")]));

  try { await fail(10); } catch (e) { console.log("caught", e.message); }

  // fetch (Node 18+)
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(await res.json());
  } catch { console.log("fetch skipped (no network)"); }
}
main();

