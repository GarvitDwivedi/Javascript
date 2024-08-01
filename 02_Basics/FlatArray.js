function flattenOnce(arr , k) {

    while(k--){
    let flattened = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            flattened.push(...item);
        } else {
            flattened.push(item);
        }
    }
    arr = flattened;
}
return arr ;
}

function flattenKTimes(arr , k) {
    console.log(arr);
}

// Example usage:
let nestedArray = [[1, 2, [3, 4]], [5, [6, 7]], 8 , [1 , [2  , [2,2,2],4],2]];
let k = 2;
let flattenedArray = flattenKTimes(nestedArray, 2);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

