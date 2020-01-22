// const pascalTriangle = (numRows) => {
//     if (numRows < 1) {
//         return [];
//     }

//     const triangle = [[1]];

//     for (let i = 1; i < numRows; i++) {
//         const previous = triangle[i-1];
//         const temp = [1];
//         for (let j = 1; j < i; j++) {
//             temp.push(previous[j-1] + previous[j]);
//         }
//         temp.push(1);
//         triangle.push(temp);
//     }

//     return triangle;
// }

const pascalTriangle = (numRows) => {
    if (numRows < 1) {
        return [];
    }

    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const newRow = [];
        for (let j = 0; j < i + 1; j++) {
            let sum = 0;
            sum += triangle[i - 1][j - 1] || 0;
            sum += triangle[i - 1][j] || 0;
            newRow.push(sum);
        }
        triangle.push(newRow);
    }

    return triangle;
}

console.log(pascalTriangle(2));
console.log(pascalTriangle(1));
console.log(pascalTriangle(0));
console.log(pascalTriangle(3));
console.log(pascalTriangle(4));