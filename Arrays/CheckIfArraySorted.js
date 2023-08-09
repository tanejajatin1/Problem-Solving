/**
 * @param {*} numbers 
 * @returns
 * 
 * Time Complexity: O(N)
 */

function CheckIfArraySorted(numbers) {

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] <= numbers[i + 1]) {
            continue
        }
        return false
    }
    return true;
}


console.log(CheckIfArraySorted([1, 2, 2, 5, 7, 7]))