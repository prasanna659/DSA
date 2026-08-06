/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    let num = n;

    while (true) {
        let current = num;
        let product = 1;

        
        while (current > 0) {
            let lastDigit = current % 10;
            product *= lastDigit;
            current = Math.floor(current / 10);
        }

        
        if (product % t === 0) {
            return num;
        }

        num++;
    }
};