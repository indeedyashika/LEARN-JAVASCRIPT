// this, CLASSES, PROTOTYPES
class Animal {
  #secret = 42;                              // private field
  static count = 0;
  constructor(name) { this.name = name; Animal.count++; }
  speak() { return `${this.name} makes a sound`; }
  get secret() { return this.#secret; }
}
class Dog extends Animal {
  speak() { return `${super.speak()} - Woof`; }
}
const d = new Dog("Rex");
console.log(d.speak(), d.secret, Animal.count, d instanceof Animal);

// this depends on HOW a function is called
const obj = {
  name: "obj",
  regular() { return this.name; },
  arrow: () => typeof this,                  // arrow: no own this
};
console.log(obj.regular());
const lost = obj.regular;
// lost() -> this is undefined in module/strict mode
console.log(lost.call({ name: "bound via call" }));
const bound = obj.regular.bind({ name: "bound" });
console.log(bound());

// Prototype chain
console.log(Object.getPrototypeOf(d) === Dog.prototype, typeof Dog);

