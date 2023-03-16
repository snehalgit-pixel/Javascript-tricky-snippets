// Event loop - Sequence of execution - Macrotask, Microtask

setTimeout(() => console.log("B"));

console.log("A");

Promise.resolve().then(() => console.log("C"));

Promise.resolve().then(() => setTimeout(() => console.log("D")));

setTimeout(() => console.log("F"));

Promise.resolve().then(() => console.log("E"));

console.log("G");