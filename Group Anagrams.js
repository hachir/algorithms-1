/**Intuition
Two strings are anagrams if and only if their sorted strings are equal.
Algorithm
Maintain a map ans : {String -> List} where each key 
 is a sorted string, and each value is the list of strings from the initial input that when sorted, are equal to 
In javascript, we will store the key as a string, eg. code. 
*/

var groupAnagrams = function(strs) {
    strs = strs.sort();
    var mapping = {};
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i];
        var sorted = str.split('').sort().join('');
        
        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        } else {
            mapping[sorted].push(str);
        }
    }
    
    var output = [];
    for (var arr in mapping) {
        output.push(mapping[arr]);
    }
    
    return output;
};