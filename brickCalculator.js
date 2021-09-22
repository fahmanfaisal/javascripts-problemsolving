//calculate the total number of bricks of building as (1-10) (11-20) (20-50) height whhich one floor has 1000 bricks each on 1 feet high. 

function brickCalculator(n) {  
    const x = 15;
    const y = 12;
    const z = 10;
    brick = 1000;
    const brick_per_feet_1 = (brick / x) ;
    const brick_per_feet_2 = (brick / y) ;
    const brick_per_feet_3 = (brick / z) ;
    if ( n <= 10) {
        var total = (brick_per_feet_1 * x) * n;
        return total;
    }else if (n <= 20) {
        var total = (brick_per_feet_2 * y) * n;
        return total;
    }else if (n <= 50) {
        var total = (brick_per_feet_3 * z) * n;
        return total;
    }
}
console.log(brickCalculator(1));
console.log(brickCalculator(20));

// function brickcalculator(floor) {
//     const heightx = 15;
//     const heighty = 12;
    //const heightz = 10;
//     if (floor <= 10) {
//         var per_feet_height1 = 1000 / heightx;
//         var first_total_height = (per_feet_height1 * 15) * floor;
//         floor = first_total_height;
//         return floor;
//     }else if (floor <= 20) {
//         var firstHeight = 15000;
//         var extra = floor - 10;
//         var per_feet_height2 = 1000 / heighty;
//         var second_total_height = (per_feet_height2 * 12) * floor;
//         new_height = firstHeight + second_total_height; 
//      }//else{
//         var firstHeight = 10 * 1000;
//         var secondHeight = 12 * 1000;
//         var extra = floor - 20;
//         var thirdHeight = extra + (10 * 1000);
//         height = firstHeight + secondHeight + thirdHeight;
//     }
//     return height;
// }
// var count = brickcalculator(12);
// console.log(count);
