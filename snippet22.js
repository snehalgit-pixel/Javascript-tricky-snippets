function func() {}

var newInstance = Object.create(func.prototype);

var result = func.call(newInstance, 1, 2, 3);

console.log(result && typeof(result) == 'object' ? result : newInstance);