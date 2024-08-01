function flattenOnce(arr) {
    let flattened = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            flattened.push(...item);
        } else {
            flattened.push(item);
        }
    }
    return flattened;
}

function flattenKTimes(arr, k) {
    for (let i = 0; i < k; i++) {
        arr = flattenOnce(arr);
    }
    return arr;
}

// Example usage:
let nestedArray = [[1, 2, [3, 4]], [5, [6, 7]], 8];
let k = 2;
let flattenedArray = flattenKTimes(nestedArray, k);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
