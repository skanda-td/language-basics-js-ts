import console from "node:console";

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

console.log();
// Parameters and return are typed
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));     // 3
console.log(add(1, 2.5));   // 3.5
// console.log(add(1, "2")); // ✗ Error at compile time

console.log();

function greetPeople(
    name: string,
    greeting: string = "Hello"  // default
): string {
    console.log('greetPeople called with:', { name, greeting });
    return `${greeting}, ${name}`;
}
greetPeople("Bob"); // "Hello, Bob"

console.log();

interface User {
  name: string;
  age: number;
}
const user: User = { name: "Alice", age: 30 };
// TS catches typos immediately
// console.log(user.naem); // ✗ Error: Property 'naem' does not exist on type 'User'. Did you mean 'name'?

// interface — extendable, open
interface Point { x: number; y: number }

// type — can alias primitives/unions
type ID = string | number;
type Status = "active" | "inactive";

const point: Point = { x: 10, y: 20 };
const userId: ID = 123;
const userStatus: Status = "active";
console.log(typeof point, typeof userId, typeof userStatus);

console.log();

async function fetchUser(id: number)
  : Promise<User> {
  const res = await fetch(`/users/${id}`);
  const data: User = await res.json();
  return data; // typed shape
}

async function getData() {
  try {
    const result = await fetchUser(1);
    console.log(result);
  } catch (err) {
    // TS: err is unknown, must narrow
    if (err instanceof Error)
      console.error(err.message); // safe
  }
}

getData();

setTimeout(() => {
    console.log();
});

class Animal {
  name: string;  // must declare
  constructor(name: string) {
    this.name = name;
  }
  speak(): string {
    return `${this.name} speaks`;
  }
}

console.log(new Animal("Dog").speak()); // Dog speaks

class BankAccount {
  private balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }
  getBalance(): number { return this.balance }
}
// balance is inaccessible outside class ✗

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
// console.log(account.balance); // ✗ Error: Property 'balance' is private and only accessible within class 'BankAccount'.

// TS always uses ESM syntax
import fs from "fs";
import { readFile } from "fs/promises";

export const helper = (): void => {};
export default class MyService {}

// // Import type only — erased at compile time
// import type { Request, Response } from "express";

// // Import both value + type
// import { Router } from "express";
// const router: Router = Router();

// try in different files

// T is a type variable — inferred at call
function first<T>(arr: T[]): T | undefined { // how to know T is working? return type is T | undefined
    // Code to check working of T
    console.log('first called with array:', arr);
    console.log('Inferred type T:', typeof arr[0]);
    return arr[0];
}
const x = first([1, 2, 3]);
console.log(x);
// x is number | undefined ✓

interface ApiResponse<T> {
  data: T;
  total: number;
  error?: string;
}
// Reuse for any data shape
type UserResponse = ApiResponse<User[]>;

const response: UserResponse = {
  data: [{ name: "Alice", age: 30 }],
  total: 1
};

console.log(response);
console.log('UserResponse data:', response.data);

// TS: string literal union (preferred)
type StatusType = "active" | "inactive";
function setStatus(s: StatusType): void {
  // Only "active" or "inactive" allowed
}

// setStatus("deleted"); // ✗ Error: Argument of type '"deleted"' is not assignable to parameter of type 'Status'.
setStatus("active"); // ✓ OK
setStatus("inactive"); // ✓ OK

function handle(status: Status): void {
  switch (status) {
    case "active": break;
    case "inactive": break;
    default:
      const _: never = status; // ✗ if missed
  }
}

handle("active");
handle("inactive");
// handle("deleted"); // ✗ Error: Argument of type '"deleted"' is not assignable to parameter of type 'Status'.