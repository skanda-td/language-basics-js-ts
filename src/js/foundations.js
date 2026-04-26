import multiply, { add } from "./math.js";

console.log("Learning JavaScript foundations!");
console.log();

// Math
console.log("2 + 3 =", add(2, 3)); // 5
console.log("4 * 5 =", multiply(4, 5)); // 20
console.log();


// Others
const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("The sum of the array is:", sum);
console.log();

const answer = array.forEach((number) => {
    console.log("Number:", number);
    return number * 2; // This return value is ignored by forEach
});

console.log("The result of forEach is:", answer); // undefined
console.log();

const obj = {
    name: "Alice",
    greet() { console.log(this.name); }, // ✅ "Alice"
    greetLate() {
        console.log(this.name); // ✅ "Alice"
        setTimeout(function () { console.log(this.name); }, 100); // ❌ undefined
        setTimeout(() => { console.log(this.name); }, 100); // ✅ "Alice"
    }
};

obj.greet();
obj.greetLate();

setTimeout(() => console.log(), 1000); // ✅ Logs after 1 second