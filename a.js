var age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
var greet;
greet = function () {
    console.log('hello, again');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 8; }
    console.log(a + b);
    console.log(c);
};
// add( 5 , 10 );
add(5, 10, '23');
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 8);
console.log(result);
