var object1 = Object.create({name: "SP", gender: "M"});
console.log(object1.name+" "+object1.gender);

function Person(name) {
    this.name = name;
    this.age = 21;
}
var p1 = new Person("SP");
console.log("Name: "+p1.name+" "+"Age: "+p1.age);