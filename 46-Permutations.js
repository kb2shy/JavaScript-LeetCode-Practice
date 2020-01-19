const permute = (nums) => {
    let result = [];

    const p = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                p(curr.slice(), m.concat(next))
            }
        }
    }

    p(nums);

    return result;
}

console.log(permute([1, 2, 3]));