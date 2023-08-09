/**
 * 1. Brute Force(Sort the element and traverse through the array to find the second largest element, as elements can be duplicate we need to traverese can't directly take n-2 element):O(nlogn + n)
 * 2. Better(First find the largest number by traversing through the array then again traverse through the array to find the second largest): O(n+n) = O(2n)
 * 3. Optimal(Try to find the second largest in the same pass as largest by keeping track of both element)
 * @param {*} numbers 
 * @returns 
 */

function SecondLargestInArray(numbers) {
    let largest = numbers[0];
    let secondLargest = -1; // provided array doesn't have any negative number

    for (let i = 1; i < numbers.length; i++) {
        // Replace the second largest with recent founded largest
        if (largest < numbers[i]) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (secondLargest < numbers[i] && largest != numbers[i]) { // In case of duplicates or if second largest is after we found the largest we need to keep comparing if it exists
            secondLargest = numbers[i]
        }
    }
    return secondLargest;
}

function SecondSmallestInArray(numbers) {
    let smallest = numbers[0];
    let secondSmallest = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < numbers.length; i++) {
        // Replace the second largest with recent founded largest
        if (smallest > numbers[i]) {
            secondSmallest = smallest;
            smallest = numbers[i];
        } else if (secondSmallest > numbers[i] && smallest != numbers[i]) { // In case of duplicates or if second largest is after we found the largest we need to keep comparing if it exists
            secondSmallest = numbers[i]
        }
    }
    return secondSmallest;
}


console.log(SecondLargestInArray([1, 4, 2, 7, 7, 5, 1]))
console.log(SecondSmallestInArray([1, 0, 4, 2, 7, 7, 5, 1]))