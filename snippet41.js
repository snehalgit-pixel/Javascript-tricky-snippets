function Employee(name, age, dept) {
    this.name = name || "Tony";
    this.age = age || 25;
    this.dept = dept || "Any";
}

const employee1 = Object.create(Employee);
console.log("Name of employee1 = "+employee1.name+"; Age of employee1 = "+employee1.age);

const employee2 = Object.create(new Employee());
console.log( employee1.length === employee2.length);
console.log("Name of employee2 = "+employee2.name+"; Age of employee2 = "+employee2.age);