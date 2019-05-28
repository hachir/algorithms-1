
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