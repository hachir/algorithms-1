/**The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

*P   A   H   N
*A P L S I I G
*Y   I   R
*/
var convert = function(s, numRows) {
    let text = Array(numRows).fill(''), line = 0;
    const keyLoop = 2 * numRows - 2;
    
    if(keyLoop === 0 || s.length <= numRows) {
        return s;
    }

    for(let i = 0;i < s.length;i++) {
        line = i % keyLoop;
        line = line > (numRows - 1) ? (keyLoop - line) : line;
        
        text[line] += s[i];
    }
    
    return text.join("");
};