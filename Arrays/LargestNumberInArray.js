/**
 * First solution can be sorting the array and then returning the largest element from the array where time complexity will be O(nlogn)
 * Second solution can be traversing through the array and making one element as largest
 * @param {*} numbers 
 * @returns 
 */

function LargestNumberInArray(numbers){
    let largest = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        if(largest < numbers[i]){
            largest = numbers[i];
        }
    }
    return largest;
}


console.log(LargestNumberInArray([1,4,2,5,7,1]))