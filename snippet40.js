function Employee(name) {
    this.name = name;
    this.getName = () => this.name;
}

const employee1 = Object.create(new Employee('Jony'));
console.log(employee1.getName());
delete employee1;
console.log(employee1.getName());