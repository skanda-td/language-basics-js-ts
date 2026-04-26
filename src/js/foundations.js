console.log("Learning JavaScript foundations!");
console.log();

const name = "Alice";
let age = 30;
console.log("Name:", name); // Alice
console.log("Age:", age);

// JS infers type at runtime
age = "thirty"; // ✓ no error
console.log("Updated Age:", age); // thirty

// Always prefer const. Use let only when the value must change.

console.log();
// JS has no unions — just use any value
function greet(id) {
  return `Hello ${id}`;
}

console.log(greet("Alice")); // Hello Alice
console.log(greet(123)); // Hello 123

// Union types document intent and catch bugs before runtime.

