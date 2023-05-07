function myClassStr(name) {
    this.name = name;
    return this.name;
}

function myClassObj(name) {
    this.name = name;
    return () => name
}

var child1 = new myClassStr("Node JS");
var child2 = new myClassObj("JS");

console.log(typeof child1);
console.log(typeof child2);