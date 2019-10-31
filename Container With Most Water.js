/**
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, 
 which together with x-axis forms a container, such that the container contains the most water.
 */

var maxArea = function(height) {
    
    let max = 0;
    
    for (let low = 0, high = height.length - 1; low < high; ) {
	
        let area = (high - low) * Math.min(height[low], height[high]);
		
        if (max < area) {
            max = area;
        }
        if (height[low] > height[high]) {
            high--;
        }
        else {
            low++;
        }
    }
    return max;
};