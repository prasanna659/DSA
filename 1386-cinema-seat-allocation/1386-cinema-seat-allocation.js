/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const rowMasks = new Map();

    
    for (const [row, seat] of reservedSeats) {
        if (seat >= 2 && seat <= 9) {
            const currentMask = rowMasks.get(row) || 0;
            rowMasks.set(row, currentMask | (1 << (seat - 2)));
        }
    }

    
    let totalGroups = (n - rowMasks.size) * 2;

    const LEFT_MASK = 0b00001111;   
    const RIGHT_MASK = 0b11110000; 
    const MID_MASK = 0b00111100;   
    for (const mask of rowMasks.values()) {
        const canLeft = (mask & LEFT_MASK) === 0;
        const canRight = (mask & RIGHT_MASK) === 0;

        if (canLeft && canRight) {
            totalGroups += 2;
        } else if (canLeft || canRight || (mask & MID_MASK) === 0) {
            totalGroups += 1;
        }
    }

    return totalGroups;
};