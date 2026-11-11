// ERROR HANDLING
function parse(json) {
  try {
    return JSON.parse(json);
  } catch (err) {
    console.log("caught:", err.name, "-", err.message);
    return null;
  } finally {
    console.log("finally always runs");
  }
}
parse('{"a":1}');
parse("{bad json");

class ValidationError extends Error {
  constructor(msg) { super(msg); this.name = "ValidationError"; }
}
function validateAge(a) {
  if (typeof a !== "number") throw new ValidationError("age must be number");
  return a;
}
try { validateAge("x"); } catch (e) { console.log(e instanceof ValidationError, e.message); }

