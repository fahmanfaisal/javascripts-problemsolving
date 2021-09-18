function reverseString(str){
    var reverse = "";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        reverse = element + reverse; 
    }
    return reverse;
}   

var statement = "Hello ! Good morning floks:"
var reverseStatement = reverseString(statement);
console.log(reverseStatement);