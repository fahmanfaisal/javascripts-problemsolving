var marks = [15,20,50,60,85,90,200];
var max = marks[0];

for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if(element > max){
        max= element;
    }
}
console.log("Highest value is: , ", max);