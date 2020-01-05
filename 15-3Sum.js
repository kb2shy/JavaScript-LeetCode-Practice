var threesum = function(nums) {
    
    const result = [];
    
    if (nums.length < 3) {
        return result;
    }

    nums.sort((a, b) => {
        return a - b
    });

    console.log(nums);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return result;
        }

        if (nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1, k = nums.length - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    // the following code takes to long to process
    // for (let i = 0; i < nums.length - 2; i++) {
    //     for (let j = i + 1; j < nums.length - 1; j++) {
    //         for (let k = j + 1; k < nums.length; k++) {
    //             let temp = [nums[i], nums[j], nums[k]];
    //             if (isEqualToZero(temp) && !(isInResults(result, temp))) {
    //                 result.push(temp);
    //             }
    //         }
    //     }
    // }

    return result;
}

const isEqualToZero = (arr) => {
    return arr.reduce((sum, elem) => sum += elem) === 0;
}

const isInResults = (arr1, arr2) => {
    for (let arr of arr1) {
        if (JSON.stringify(arr) === JSON.stringify(arr2)) {
            return true;
        }
    }
    return false;
}

// console.log(isEqualToZero([-1, 0, 1]));

// const array1 = [[-1, 0, 1], [1, 2, 3]];
// const array2 = [1, 2, 3];
// console.log(isInResults(array1, array2));
// console.log(threesum([-1,0,1,2,-1,-4]))
const bigArray = [5,-9,-11,9,9,-4,14,10,-11,1,-13,11,10,14,-3,-3,-4,6,-15,6,6,-13,7,-11,-15,10,-8,13,-14,-12,12,6,-6,8,0,10,-11,-8,-2,-6,8,0,12,3,-9,-6,8,3,-15,0,-6,-1,3,9,-5,-5,4,2,-15,-3,5,13,-11,7,6,-4,2,11,-5,7,12,-11,-15,1,-1,-9,10,-8,1,2,8,11,-14,-4,-3,-12,-2,8,5,-1,-9,-4,-3,-13,-12,-12,-10,-3,6,1,12,3,-3,12,11,11,10];
console.log(threesum(bigArray));

/*
an array that took to long to compute
[5,-9,-11,9,9,-4,14,10,-11,1,-13,11,10,14,-3,-3,-4,6,-15,6,6,-13,7,-11,-15,10,-8,13,-14,-12,12,6,-6,8,0,10,-11,-8,-2,-6,8,0,12,3,-9,-6,8,3,-15,0,-6,-1,3,9,-5,-5,4,2,-15,-3,5,13,-11,7,6,-4,2,11,-5,7,12,-11,-15,1,-1,-9,10,-8,1,2,8,11,-14,-4,-3,-12,-2,8,5,-1,-9,-4,-3,-13,-12,-12,-10,-3,6,1,12,3,-3,12,11,11,10] 
*/