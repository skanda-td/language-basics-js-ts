console.log("Learning TypeScript foundations!");
console.log();

const name: string = "Alice";
let age: number = 30;
console.log(`Name: ${name}, Age: ${age}`);

// TS enforces type at compile time
// age = "thirty"; // ✗ Error: not a number

console.log();
// TS union: number OR string
function greet(id: number | string) {
  console.log(`Type of id: ${typeof id}`);
  return `Hello ${id}`;
}

console.log(greet(123)); // Hello 123
console.log(greet("Alice")); // Hello Alice
// console.log(greet(true)); // ✗ Error: not number or string

// Issue: Compiled .js/.map/.d.ts files getting generated inside src/ts (dirty source folder)
// Issue: Missing outDir in tsconfig → not separating source and build output (no dist usage)
// Issue: Scripts mixing dev + build concepts → unclear workflow (ts-node vs compiled run)
// Fix: Configure tsconfig (outDir=dist, rootDir=src) + align scripts (dev/build/start) cleanly

