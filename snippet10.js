'use strict';

( function() {

    var array = [1, 2, 3, 4, 5];
    console.log(array.indexOf(2));
    console.log([ { name: 'John' }, { name :  'John' } ].indexOf({ name: 'John' }));
    console.log([[1],[2],[3],[4]].indexOf([3]));
    console.log("abcdefgh".indexOf('e'));
    
})();