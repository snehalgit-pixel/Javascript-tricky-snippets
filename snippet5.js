var str1 = "Banana, Kiwi, Apple, Mango.";
const str2 = str1.slice(-19, -1);
let str3 = str1.substr(8, 19);
console.log(str2 === str3 ? true : false);