/**
 * Problem: Find the maximum consecutive ones in the array and return the number
 * Time Complexity: O(N)
 * Space Complexit: O(1)
 */

function FindMaxConsecutiveOne(arr1) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == 1) {
            count++;
        } else {
            if (max < count) {
                max = count;
            }
            count = 0;
        }
    }
    return max;
}

console.log(FindMaxConsecutiveOne([1,1,0,0,1,1,1,1,0,0,1,1]))