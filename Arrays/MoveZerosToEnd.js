/**
 * Problem: Move all zeros in an array to the last
 */


/**
 * Brute force solution is we take a temp array and move all non zero element to it
 * Time Complexity: O(2n)
 * Space Complexity: O(n)
 */

function MoveZerosToEnd(numbers) {
    const tempNumbers = []
    // Step 1: O(n)
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != 0) {
            tempNumbers.push(numbers[i])
        }
    }

    // Step 2: O(x)
    for (let i = 0; i < tempNumbers.length; i++) {
        numbers[i] = tempNumbers[i]
    }

    // Step 3: O(n-x)
    for (let i = tempNumbers.length; i < numbers.length; i++) {
        numbers[i] = 0
    }

    return numbers;
}

/**
 * Optimal solution: Use two pointer approach where you will keep  a pointer j at 0 element and keep on swapping it with non zero
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function OptimalMoveZerosToEnd(numbers) {
    let j = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            j = i;
            break;
        }
    }

    if (j == -1) {
        return numbers
    }

    for (let i = j + 1; i < numbers.length; i++) {
        if (numbers[i] != 0) {
            numbers[j] = numbers[i];
            numbers[i] = 0;
            j++;
        }
    }
    return numbers;
}
console.log(OptimalMoveZerosToEnd([1, 2, 3, 0, 2, 0, 2, 0, 9, 2, 0, 2]))