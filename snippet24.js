const myDate = new Date(1995, 11, 17); 

var yourDate = new Date(1996, 11, 10);

myDate.getFullYear = function () {
    console.log(yourDate.getFullYear());
}

myDate.getFullYear();

// Shadowing of object property