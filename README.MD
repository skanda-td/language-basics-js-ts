# Language Basics — JS & TS

## About

This project is a minimal setup to learn **JavaScript (JS)** and **TypeScript (TS)** side by side in a single codebase.

* JS examples → `src/js/foundations.js`
* TS examples → `src/ts/foundations.ts`

**Goal:** Understand core concepts in both languages with minimal configuration.


## Requirements

* Node.js installed
* Install dependencies:

```bash
npm install
```

## Run Commands

### Run JavaScript

```bash
npm run js
```

Runs the JavaScript file directly using Node.js.


### Run TypeScript (Dev Mode)

```bash
npm run dev
```

Runs TypeScript using `ts-node` with type checking enabled.


### Build TypeScript

```bash
npm run build
```

Compiles all `.ts` files into `.js` inside the `dist/` folder.
Fails if there are type errors.


### Run Compiled Code (Production Mode)

```bash
npm start
```

Runs the compiled JavaScript from the `dist/` folder.
This simulates real production execution.


## Notes

* Use **`dev`** for learning and fast iteration
* Use **`build + start`** to understand real-world TypeScript workflow
* Keep both JS and TS examples aligned for better comparison
