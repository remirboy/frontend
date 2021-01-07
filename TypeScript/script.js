"use strict";
function sum(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else if (typeof x === 'string' && typeof y === 'string') {
        return x + " " + y;
    }
}
console.log(sum(2, 2));
console.log(sum('2', 'as'));
//# sourceMappingURL=script.js.map