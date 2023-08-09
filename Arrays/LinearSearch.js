/**
 * Problem: Search for the first occurence of the element in the given array and return the position of element
 */


function LinearSearch(numbers, element){
    for(let i = 0; i < numbers.length; i++){
        if(element == numbers[i]){
            return i;
        }
    }
    return -1
}

console.log(LinearSearch([2,5,6,1,34,5,6,3,4],5));