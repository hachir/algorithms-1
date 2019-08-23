
/**Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
*/

let isValid = function(s) {
    let stack = [];
    const mapping = {')': '(', '}': '{', ']': '['};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in mapping) {
            const curr = stack.pop();
            if (mapping[s[i]] !== curr) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    return !stack.length;
};