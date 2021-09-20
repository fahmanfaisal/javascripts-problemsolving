//calculate total qbic wood for each chair table and bed; which values are 1,2,5 

function woodCalculator(chair,table,bed) {
   var total = chair * 1 + table * 2 + bed * 5;
   return total;
}

console.log(woodCalculator(10 , 5 , 6));