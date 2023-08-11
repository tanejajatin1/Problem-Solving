/**
 * Problem: Find the number appear once in the array, other number appears twice
 */

// Brute force
// Time Complexity : O(N * N)
function FindNumberAppearOnceBrute(arr1) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i];
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i] == arr1[j]) {
                count++;
            }
        }
        if (count == 1) {
            return num;
        }
        count = 0;
    }
}


// Optimal: As we know there is only one occurance of an element and other are twice so it means if XOR the twice element they will be become 0, so we XOR all items in the array 
// we would be left with the element which is occuring only once
// Time Complexity : O(N)
function FindNumberAppearOnceOptimal(arr1) {
    let XOR = 0;
    for(let i = 0; i < arr1.length; i++){
        XOR = XOR ^ arr1[i];
    }
    return XOR;
}

console.log(FindNumberAppearOnceBrute([1, 1, 2, 3, 3, 4, 4])); // 2 only appear once
console.log(FindNumberAppearOnceOptimal([1, 1, 2, 3, 3, 4, 4])); // 2 only appear once
