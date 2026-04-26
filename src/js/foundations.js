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

console.log();
// No parameter or return types
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));     // 3    
console.log(add(1, 2.5));   // 3.5
console.log(add(1, "2")); // "12" — bug!

// Typed return values act as self-documenting contracts.

console.log();

// Optional & default params
function greetPeople(name, greeting) {
  greeting = greeting || "Hello";
  console.log(`${greeting}, ${name}`);
}

greetPeople("Bob"); // "Hello, Bob"

// Use ? for optional: name?: string. TS warns if you forget to handle undefined.

console.log();