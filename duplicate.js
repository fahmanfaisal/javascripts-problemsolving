var arry = [3,6,9,25,3,2,25,9,1];
var uniqueName = [];

for (var i = 0; i < arry.length; i++) {
    var element= arry[i];
    var index = uniqueName.indexOf(element);
    if( index == -1){
        uniqueName.push(element);
    }
}

console.log(uniqueName);