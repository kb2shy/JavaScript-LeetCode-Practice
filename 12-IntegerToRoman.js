var intToRoman = function(num) {
    if (num < 1) {
        return;
    }

    let romanString = '';
    let intNum = num;
    for(let i = 0; i < ROMAN.length; i++) {
        while(intNum >= ROMAN[i][1]) {
            intNum -= ROMAN[i][1];
            romanString += ROMAN[i][0];
        }
    }

    return romanString;
}

const ROMAN = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1] 
]

console.log(intToRoman(3));
console.log(intToRoman(4));
console.log(intToRoman(6));
console.log(intToRoman(10));
console.log(intToRoman(11));
console.log(intToRoman(111));
console.log(intToRoman(1111));
console.log(intToRoman(3999));
console.log(intToRoman(4001));