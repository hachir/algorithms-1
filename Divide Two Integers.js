/**
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.
*/




var divide = function(dividend, divisor) {
    var de = dividend < 0 ? -dividend : dividend;
    var ds = divisor < 0 ? -divisor : divisor;
    
    // handle overflow
    if (de > 2147483647) {                                                         
        if (dividend < 0) {                                                          
            if (divisor ==  1) return dividend;
            if (divisor == -1) return 2147483647;
        }                 
        if (dividend > 0) {                                                          
            if (divisor == -1) return -dividend;
            if (divisor ==  1) return 2147483647;
        }                                                                            
    }  
    
    var bit = 1;
    var denom = ds;
    // reduce dividend to find the bar the denom should reach.
    var bar = Math.floor(de / 2);
    
    while (bar > denom) {
        denom <<= 1;
        bit <<= 1;
    }
    // denom should cross the bar if dividend is actually larger than bar * 2.
    if (bar == denom && de % 2 > 0) {
        denom <<= 1;
        bit <<= 1;
    }
    
    var result = 0;
    
    while (de >= ds) {
        if (de >= denom) {
            de -= denom;
            result |= bit;
        }
        
        denom >>= 1;
        bit >>= 1;
    }
    // In the special case when denom becomes 0 but dividend still has some left, add 1.
    if (denom === 0 && de !== 0) result += 1;
    
    return dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0 ? -result : result;
};