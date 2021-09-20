//calculate the total number of bricks of building as (1-10) (11-20) (20-50) height whhich one floor has 1000 bricks each on 1 feet high. 

function brickCalculator(n) {  
    const x = 15;
    const y = 12;
    const z = 10;
    brick = 1000;
    const brick_per_feet_1 = Math.ceil(brick / x) ;
    const brick_per_feet_2 = Math.ceil(brick / y) ;
    const brick_per_feet_3 = Math.ceil(brick / z) ;
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
console.log(brickCalculator(11));
console.log(brickCalculator(20));