/**
 Given a string s, find the longest palindromic substring in s.
 You may assume that the maximum length of s is 1000.
 Input: "babad"
 Output: "bab"
 */
var longestPalindrome = function(s) {
  var max = '';
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};