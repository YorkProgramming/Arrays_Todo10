//1.
//Median of Sorted Arrays

/* Given two arrays that are sorted but not necessarily the same length, 
find the median value. Given ([1,5,9], [1,2,3,4,5,6]), 
return 4. If the number of values is even, 
return the average of the two middle values. 
Given ([1,5,9], [1,2,3,4,5]), return 3.5.

Second: accept three arrays instead of two. */

function medianOfSortedArrays(arr1, arr2){
    var arr3 = [];
    var median = 0;

    for(var i = 0; i < arr1.length; i++){
        arr3.push(arr1[i]);
    }

    for(var i = 0; i < arr2.length; i++){
        arr3.push(arr2[i]);
    }

    arr3.sort(function(a, b){return a-b});

    if(arr3.length % 2 == 0){
        median = (arr3[arr3.length/2] + arr3[(arr3.length/2)-1])/2;
    } else {
        median = arr3[Math.floor(arr3.length/2)];
    }

    return median;
}

//Example:
console.log(medianOfSortedArrays([1,5,9], [1,2,3,4,5,6]));

//We create an empty array.
//We create a median variable.
//We loop through the first array and push the values into the empty array.
//We loop through the second array and push the values into the empty array.
//We sort the array.
//We check if the array length is even.
//If it is, we set the median to the average of the two middle values.
//If it is not, we set the median to the middle value.
//We return the median.

//#########################################################################################################

//2.
//Last Digit of A to the B

/* Modern computers can handle very large numbers, but they do have their limits. 
A number that is repeatedly multiplied by itself will eventually exceed a computer’s ability 
to accurately represent it. 
(Note: the number of times it is multiplied by itself is called an exponent.) 
For an optional end-of-chapter challenge, 
determine the smallest (least significant) digit of a number that is potentially very, very large. 
You may find that you must do this without computing the actual (unimaginably large) number.

Implement a function lastDigitAtoB(a,b) that accepts two non-negative integers. 
It should return the last digit of a number found by raising the first number (a) 
to an exponent of the second number (b). 
Examples: given (3,4), you should return 1 (3 * 3 * 3 * 3 is 81, whose last digit is 1). 
Given (12,5), return 2 (which is the least significant digit of 248832: 12 * 12 * 12 * 12 * 12). 
How high can you scale your solution? For example, what is the return value for (237,124)?
*/

function lastDigitAtoB(a,b){
    var num = 1;
    var lastDigit = 0;

    for(var i = 0; i < b; i++){
        num *= a;
    }

    lastDigit = num % 10;

    return lastDigit;
}

//Example:
console.log(lastDigitAtoB(3,4));
console.log(lastDigitAtoB(12,5));
console.log(lastDigitAtoB(237,124));

//We create a variable to hold the number.
//We create a variable to hold the last digit.
//We loop through the second number.
//We multiply the first number by itself for each iteration.
//We set the last digit to the number mod 10.
//We return the last digit.

//#########################################################################################################