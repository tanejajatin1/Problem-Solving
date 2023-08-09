/**
 * Problem: Find missing number from an array
 * Input: Array and number of elements are given
 */

// Brute force solution can be loop through each element of an array to do linear search on each element
// Time Complexity: O(n*n)
// Space Complexity: O(1)
function FindMissingNumber(arr1, numberOfElements) {
    for (let i = 1; i <= numberOfElements; i++) {
        let numberFound = false;
        for (let j = 0; j < numberOfElements - 1; j++) {
            if (i == arr1[j]) {
                numberFound = true;
                break;
            }
        }
        if (!numberFound) {
            return i;
        }
    }
}


// Best solution: Use hashing and maintain a separate array with plus one size with zeros and keep on filling it with ones where the number is found
// Time Complexity: O(2n)
// Space Complexity: O(n), this has been increase from previous solution
function FindMissingNumberBest(arr1, numberOfElements) {
    let hashedArray = new Array(numberOfElements + 1).fill(0); // We can start from the index 1 and match it with the arr1 elements to see if it's there we can change the value from 0 to 1

    // Add one at the index of hashed array which is same as the number in array
    for (let i = 0; i < arr1.length; i++) {
        hashedArray[arr1[i]] = 1;
    }

    for (let i = 1; i <= numberOfElements; i++) {
        if (hashedArray[i] == 0) {
            return i;
        }
    }
}


// Optimal solution: We can use summation method where we will loop through the each element and find some of it and compare it with sum of N numbers. Whatever is the difference it is the number
// Time Complexity: O(n)
// Space Complexity: O(1), Space compexity can slighly be improved upon by using XOR method
function FindMissingNumberOptimal(arr1, numberOfElements) {
    let sumOfN = (numberOfElements * (numberOfElements + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    return sumOfN - sum;
}

console.log("Brute:", FindMissingNumber([1, 2, 4, 5], 5)) // This means 3 number is missing 
console.log("Best:", FindMissingNumberBest([1, 2, 4, 5], 5)) // This means 3 number is missing
console.log("Optimal:", FindMissingNumberOptimal([1, 2, 4, 5], 5)) // This means 3 number is missing