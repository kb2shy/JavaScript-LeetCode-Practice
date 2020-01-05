var maxArea = function(height) {
    let maxArea = 0, leftIndex = 0, rightIndex = height.length - 1;

    // for (let i = 0; i < height.length - 1; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         let minHeight = Math.min(height[i], height[j]);
    //         let area = minHeight * (j - i);
    //         maxArea = Math.max(area, maxArea);
    //     }
    // }

    while(leftIndex < rightIndex) {
        let area = (rightIndex - leftIndex) * Math.min(height[leftIndex], height[rightIndex]);
        maxArea = Math.max(area, maxArea);
        height[leftIndex] <= height[rightIndex] ? leftIndex++ : rightIndex--;
    }

    return maxArea;
}

console.log(maxArea([1,8,6,2,5,5,8,3,7]));

