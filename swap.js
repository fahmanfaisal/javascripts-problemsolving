var a=5;
var b=7;

console.log("Before Swap: a=", a, "b=", b);

var temp = a;
a = b;
b = temp;

console.log("After Swap: a=", a, "b=", b);

//##########################################

var x = 5;
var y = 7;

x = x + y;
y = x - y;
x = x - y;
console.log("Before Swap: X=", x, "Y=", y);


//###########################################

var p = 5;
var q = 7;

[p  ,  q] = [q , p];
console.log("Before Swap: p=", p, "q=", q);

//############################################

