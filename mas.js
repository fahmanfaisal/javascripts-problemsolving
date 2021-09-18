//find a max between 3 numbers

var num1 = 50;
var num2 = 30;
var num3 = 10;
let largest;

if(num1 >= num2 && num1 >= num3){
    largest=num1;
}else if(  num2 >= num1 && num2 >= num3){
    largest=num2;
}
else{
    largest=num3;
}

console.log("The Largest Number is:  " + largest);
