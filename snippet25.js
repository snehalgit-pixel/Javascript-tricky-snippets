const personPrototype = {
    greet() {
        console.log(`Hello. My name is ${this.name}`);
    }
};

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personPrototype);

const p1 = new Person("SP");
p1.greet();

// Assign prototype