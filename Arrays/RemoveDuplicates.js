/**
 * Remove duplicates in place from sorted array
 * @param {*} numbers 
 * @returns number of unique elements
 * 
 * First Solution: Brute force, traverse through each element and push it into set(as it will not add duplicates element in it), then iterate again and replace elements from
 * set to array in place and then return the index at which set no longer has more element
 * Time Complexity: NLogN + N
 * 
 * 
 * Optimal Solution: Take two pointer approach, as we already know array is sorted
 * Time Complexity: O(N)
 */

function RemoveDuplicates(numbers) {
    let i = 0
    for (let j = 1; j < numbers.length; j++) {
        if (numbers[i] != numbers[j]) {
            numbers[i+1] = numbers[j]
            i++;
        }
    }
    return i+1;
}


console.log(RemoveDuplicates([1, 2, 2, 5, 7, 7]))