const myDate = new Date();
let obj1 = myDate;

do {
  obj1 = Object.getPrototypeOf(obj1);
  console.log(obj1);
} while (obj1);

// Prototype chaining