'use strict';

var printVal1 = {
    message: "In printVal1 …",
    printMessage: function() {
        console.log(this.message);
    }
}

var printVal2 = {
    message: "In printVal2 …",
}

printVal1.printMessage();
printVal2.printMessage = printVal1.printMessage;
printVal2.printMessage();