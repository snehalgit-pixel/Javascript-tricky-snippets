// Event loop - Sequence of execution - Macrotask, Microtask

console.log("A");

setTimeout(() => console.log("B"));

Promise.resolve().then(() => console.log("C"));

Promise.resolve().then(() => setTimeout(() => console.log("D")));

Promise.resolve().then(() => console.log("E"));

setTimeout(() => console.log("F"));

console.log("G");