// Convert by function -> mile to km, inch to centimeter
function mileToKm(miles) {
    return miles * 1.60934;
}

function inchToCm(inches) {
    return inches * 2.54;
}

console.log(mileToKm(5)); // 8.0467
console.log(inchToCm(10)); // 25.4

// Leap Year Count
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false

// Odd sum from array by function
function sumOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumOddNumbers([1, 2, 3, 4, 5])); // 9

// 22.5: Duplicate remove -> num/String
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'b', 'c'])); // ['a', 'b', 'c']

/* 22-6 Example: Math, abs, round, ceil, floor, and random number
        Math.min(), Math.max(), abs(), round(), floor(), ceil(), random()
*/
console.log(Math.abs(-5)); // 5
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.max(1, 2, 3)); // 3

// 22.7: Date and Time
const now = new Date();
console.log(now.toString()); // Current date and time as a string
console.log(now.getFullYear()); // Current year
console.log(now.getMonth() + 1); // Current month (0-11, so +1 for 1-12)
console.log(now.getDate()); // Current day of the month
console.log(now.getHours()); // Current hour
console.log(now.getMinutes()); // Current minute
console.log(now.getSeconds()); // Current second