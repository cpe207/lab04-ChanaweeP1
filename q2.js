function arrayStringify(a) {
    var x = '';
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var num = a_1[_i];
        x += num;
    }
    return x;
}
var c1 = [1, 2, 3];
var c2 = [10, 9, 8, 7, 6, 5];
var c3 = [];
console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));
module.exports = arrayStringify;
