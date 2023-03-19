'use strict';

( function() {
    var greet = "Hello World";
    var toGreet = [].filter.call(greet, function(element, index) {
        return index > 5;
    });
    console.log(toGreet);
} () );