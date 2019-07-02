/**
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */
var romanToInt = function(s) {
    var map = {
        "I": 1, //can be in front of "V" or "X"
        "V": 5, 
        "X": 10, //can be in front of "L" or "C"
        "L": 50, 
        "C": 100, //can be in front of "D" or "M"
        "D": 500, 
        "M": 1000
    };
    
    var ret = 0;
    for(var i = 0; i < s.length; i++){
        if((i < s.length - 1) && (s[i] === "I" || s[i] === "X" || s[i] === "C")){
            if(map[s[i + 1]] > map[s[i]]){
                ret = ret + (map[s[i + 1]] - map[s[i]]);
                i++;
                continue;
            }
        }
        
        ret = ret + map[s[i]];
    }
    
    return ret;
};
