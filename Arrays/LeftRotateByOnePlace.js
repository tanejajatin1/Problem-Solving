/**
 * @param {*} numbers 
 * @returns
 * Time Complexity: O(N)
 * Space Complexity: O(N), as we are using the array
 */

function LeftRotateByOnePlace(numbers) {
    let temp = numbers[0]; // a temp which will take the first element as we just need to rotate this element to the last
    for (let i = 1; i < numbers.length; i++) {
        numbers[i-1] = numbers[i]; // Keep updating the i-1 with current element in order to rotate
    }
    numbers[numbers.length-1] = temp;
    return numbers;
}


console.log(LeftRotateByOnePlace([1, 2, 2, 5, 7, 7]))