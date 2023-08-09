/**
 * Problem: Union of two sorted arrays
 */

/**
 * Brute force solution: Create a set and keep on adding the elements of both arrays to the set
 * Returned output here can be unsorted as in javascript in set elements would be in order as they are inserted
 * @param {*} arrOne 
 * @param {*} arrTwo 
 */
function UnionOfTwoSortedArrays(arrOne, arrTwo) {
    const union = new Set();
    for (let i = 0; i < arrOne.length; i++) {
        union.add(arrOne[i]);
    }

    for (let i = 0; i < arrTwo.length; i++) {
        union.add(arrTwo[i]);
    }

    return union;
}


/**
 * OptimalSolution: Take two pointer approach, loop through each array simultaneously while comparing their equality with each other and union array
 * If the any of the array finishes early we will have to loop through the other remaining part of the array
 * 
 * Time Complexity: O(N1+N2)
 * Space Complexity: O(N1+N2) to return an array
 * @param {*} arrOne 
 * @param {*} arrTwo 
 */
function OptimalUnionOfTwoSortedArrays(arrOne, arrTwo) {
    const lengthOfArrOne = arrOne.length;
    const lengthOfArrTwo = arrTwo.length;
    const union = [];
    // Point both pointer at 0 index of each arry
    let i = 0;
    let j = 0;
    while (i < lengthOfArrOne && j < lengthOfArrTwo) {
        if (arrOne[i] <= arrTwo[j]) {
            if (union.length == 0 || union[union.length - 1] != arrOne[i])
                union.push(arrOne[i]);
            i++;
        } else {
            if (union.length == 0 || union[union.length - 1] != arrTwo[j])
                union.push(arrTwo[j]);
            j++;
        }
    }

    // When any of the array finishes first we need to add other array elements
    // if first array finises first
    while (j < lengthOfArrTwo) {
        if (union.length == 0 || union[union.length - 1] != arrTwo[j])
            union.push(arrTwo[j]);
        j++;
    }

    // If second array finishes first
    while (i < lengthOfArrOne) {
        if (union.length == 0 || union[union.length - 1] != arrOne[i])
            union.push(arrOne[i]);
        i++;
    }

    return union;
}

console.log("Brute Solution:", UnionOfTwoSortedArrays([1, 2, 5, 6, 7], [1, 2, 2, 3, 4]));
console.log("Optimal Solution:", OptimalUnionOfTwoSortedArrays([1, 2, 5, 6, 7], [1, 2, 2, 3, 4]));