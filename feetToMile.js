//converting a given number feet as to convert into the mile :

var num = -15000;

function feetToMile(num){
    var calculate = Math.round(num / 5280);
    return calculate;
}
console.log(feetToMile(num));