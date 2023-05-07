var count = 10;
function count() { return 20; }

console.log(typeof count);

const key = {"a":"b"};
let obj = {"a":"b"};
obj[key] = "obj";

for(let c of obj) {
    console.log(c);
}