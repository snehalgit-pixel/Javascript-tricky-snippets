function Person(name, age) {
    this.name = name || "John";
    this.age = age || 24;
    this.displayName = function () {
        console.log("Name= "+this.name);
    }
}

var person1 = new Person("Mr. Y", 24);
person1.name = "Mr. X";
person1.displayName();