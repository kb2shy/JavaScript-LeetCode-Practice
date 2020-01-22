const twoSum = (numbers, target) => {
    let leftPointer = 0, rightPointer = numbers.length - 1;

    while (leftPointer < rightPointer) {
        let sum = numbers[leftPointer] + numbers[rightPointer];

        if (sum > target) {
            rightPointer--;
        } else if (sum < target ) {
            leftPointer++;
        } else {
            return [leftPointer + 1, rightPointer + 1];
        }
    }

    return [];
}

const array1 = [2, 7, 12, 15];
const array2 = [3, 5, 8, 12];

console.log(twoSum(array1, 9));
console.log(twoSum(array1, 10));
console.log(twoSum(array2, 8));
console.log(twoSum(array2, 20));
console.log(twoSum(array2, 16));