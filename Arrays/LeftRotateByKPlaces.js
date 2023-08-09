/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {*} numbers 
 * @returns
 */

// This is the brute force solution as we are taking extra space for temp array
function LeftRotateByKPlaces(numbers, k) {
    let tempArray = [];
    let lengthOfArray = numbers.length;
    k = k % lengthOfArray; // Reduce the k as if k = lengthOfArray then we will have the same array again so it's optimized to rotate only for the pass which will be less than lengthOfArray
    for (let i = 0; i < k; i++) {
        tempArray.push(numbers[i]);
    }
    for (let i = k; i < lengthOfArray; i++) {
        numbers[i - k] = numbers[i]; // Keep updating the i-k with current element in order to rotate
    }

    for (let i = lengthOfArray - k; i < lengthOfArray; i++) {
        numbers[i] = tempArray[i - (lengthOfArray - k)]
    }
    return numbers;
}

/**
 * Reverse function
 * @param {*} numbers 
 * @param {*} start 
 * @param {*} end 
 */
function reverse(numbers, start, end) {
    while (start <= end) {
        let temp = numbers[start];
        numbers[start] = numbers[end];
        numbers[end] = temp;
        start++;
        end--;
    }
}
/**
 * Time Complexity : O(2n) bit higher than above but space complexity is O(1)
 * @param {*} numbers 
 * @param {*} k 
 * @returns 
 */
function OptimalLeftRotateByKPlaces(numbers, k) {
    let lengthOfArray = numbers.length;
    reverse(numbers, 0, k-1); //O(k)
    reverse(numbers, k, lengthOfArray-1) //O(n-k)
    reverse(numbers, 0, lengthOfArray-1)  // O(n)
    return numbers;
}


//console.log(LeftRotateByKPlaces([1, 2, 2, 5, 7, 7], 2))
console.log(OptimalLeftRotateByKPlaces([1, 2, 2, 5, 7, 7], 2))