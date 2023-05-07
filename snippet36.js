// var count = 10;
// function count() { return 20; }

// console.log(typeof count);

// const key = {"a":"b"};
// let obj = {"a":"b"};
// obj[key] = "obj";
// for(let c of obj) {
//  console.log(c);
// }




// function myClassStr(name) {
//      this.name = name;
    
//      return this.name;
//     }
    
//     function myClassObj(name) {
//      this.name = name;
//      return () => name;
//     }
    
//     var child1 = new myClassStr('Nodejs');
//     var child2 = new myClassObj('JS');
    
//     console.log(typeof child1, typeof child2);





// function Employee(name, dept) {
//     this.name = name;
//      this.dept = dept;
//     }
    
//     var emp = Object.create(Employee);
//     console.log(emp.length)




function Employee(name) {
    this.name = name;
    this.getName = () => this.name;
}
var emp = Object.create(new Employee('John'));
delete emp;
console.log(emp.getName());