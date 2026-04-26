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

// Plain object — no enforced shape
const user = {
    name: "Alice",
    age: 30
};
// Typo — silently undefined
console.log(user.naem); // undefined

// Interfaces are the backbone of TS. Define shapes for every data structure you pass around.

console.log();

// No equivalent in JS
// Objects have no compile-time shape
const point = { x: 1, y: 2 };

// Use interface for objects/classes. Use type for unions, primitives, and utility aliases.

console.log();

async function fetchUser(id) {
    const res = await fetch(`/users/${id}`);
    const data = await res.json();
    return data; // any shape
}

// TS -> Promise tells callers exactly what they'll get back. No more guessing.

async function getData() {
    try {
        console.log("Fetching user data...");
        const result = await fetchUser(1);
        console.log(result);
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error(err);
        }
    }
}

// In TS catch blocks, err is unknown by default. Always narrow with instanceof Error.

function runAnimal() {
    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            return `${this.name} speaks`;
        }
    }

    const dog = new Animal("Rex");
    console.log(dog.speak());
}

// ✅ Ensure sequential execution
async function main() {
    await getData();   // wait for async work
    console.log("Data fetched successfully!");
    await runAnimal();       // run after it finishes
    console.log("Test complete!");
}

main();

console.log("First");

// TS requires declaring class properties before using them in the constructor.

// Achieving serial execution in JS is more complex. You must chain promises or use async/await.

// No true private in pre-ES2022 JS
class BankAccount {
  constructor(balance) {
    this._balance = balance; // convention only
  }
}
// Anyone can still access _balance

const account = new BankAccount(1000);  
console.log("Initial Balance:", account._balance); // 1000
account._balance = 500; // No error, but breaks encapsulation
console.log("Updated Balance:", account._balance); // 500
console.log();

// // CommonJS (Node.js default)
// const fs = require("fs");
// module.exports = { readFile };

// // ESM (modern JS)
// import fs1 from "fs";
// export const readFile = () => {};

// Two ways check 

// Set "module": "commonjs" in tsconfig for Node.js. TS compiles ESM imports to require().

// JS has no type imports
// import { Router } from "express";
// Router is both a value and a type

// import type is zero-cost — it's stripped from output. Use it for interfaces and types.

// JS: works for any type, but unsafe
function first(arr) {
  return arr[0];
}
const x = first([1, 2, 3]);

console.log("First element:", x);
// x is unknown — could be anything

// Generics = reusable functions that stay type-safe. The T is inferred — you rarely need to write it explicitly.

// No generics in JS
// API responses are untyped objects
const response = {
  data: [1, 2, 3],
  total: 3
};

console.log("Response data:", response.data);
// No guarantee data is an array of numbers. Could be anything.

// Generic interfaces let you define one response wrapper and reuse it across your entire API.

console.log();
console.log("JS has no enums — just use objects with string values");
// JS: use string constants (fragile)
const STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive"
};
function setStatus(s) {
  // s could be any string — no safety
}

setStatus(STATUS.ACTIVE); // works
setStatus("active"); // also works, but no safety
setStatus("unknown"); // also works, but no safety

// Prefer string literal unions over enums in modern TS. They're simpler and compile to nothing.

function handle(status) {
  if (status === "active") { /* ... */ }
  else if (status === "inactive") { /* ... */ }
  else { /* handle unknown */ 
    console.warn("Unknown status:", status);
  }
  // Adding new status? Easy to forget
}

handle(STATUS.ACTIVE); // works
handle("active"); // also works, but no safety
handle("unknown"); // also works, but no safety

// The never trick: TS errors if you add a new Status value but forget to handle it in the switch.