/**
Given an array of non-negative integers, you are initially positioned at the first index of the array.
*/




var jump = function(nums) {
    var res = 0 , n = nums.length, i = 0 , cur = 0
    while( cur < n - 1) {
        ++res;
        var pre = cur
        for(;i <= pre; i ++) {
            cur = Math.max(cur, i + nums[i])
        }
        if(pre === cur) return -1
    }    
    return res
};