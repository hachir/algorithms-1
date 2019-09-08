
/** Given a 32-bit signed integer, reverse digits of an integer.
 */



var reverse = function(x) {
    const absoluteNumber = Math.abs(x);
    const threshold = Math.pow(2, 31);
    
    if (x === 0) { 
        return 0 
    }
    
    const isSigned = x > 0 ? false : true;
    // reverse the string representation of the number 
    // and remove prepending zeros
    const cleanedNumber = `${absoluteNumber}`
        .split('')
        .reverse()
        .filter(d => d != 0)
        .join(''); 
    
	// return zero for the output that's bigger than 32 bit
    if (
        cleanedNumber > threshold - 1 || 
        cleanedNumber < -threshold
    ) {
        return 0
    }
    
    return isSigned ? -cleanedNumber : cleanedNumber;
};