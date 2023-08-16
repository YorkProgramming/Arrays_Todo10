//1
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

//2
//Matrix Search

/* Mike digs image recognition and wants to create a JavaScript Imaging Library, 
just like PIL for Python. 
He is given 2 different two-dimensional arrays, 
containing integers between 0 and 65535. 
Each two-dimensional array represents a gray-scale image, 
where each integer value is a pixel. T
he second image might be found somewhere within the larger one. 
Return whether it is.


Second: Return location of first match found ([-1,-1] if no match). 
In example above, return [2,1]. */

function matrixSearch(arr1, arr2){
    var found = false;

    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr1[i].length; j++){
            if(arr1[i][j] == arr2[0][0]){
                found = true;
                for(var k = 0; k < arr2.length; k++){
                    for(var l = 0; l < arr2[k].length; l++){
                        if(arr1[i+k][j+l] != arr2[k][l]){
                            found = false;
                            break;
                        }
                    }
                    if(!found){
                        break;
                    }
                }
            }
            if(found){
                return [i,j];
            }
        }
    }
    return [-1,-1];
}

//Example:
var arr1 = [
    [1,3,5,7],
    [9,11,13,15],
    [17,19,21,23],
    [25,27,29,31]
];

var arr2 = [
    [11,13],
    [19,21],
    [27,29]
];

console.log(matrixSearch(arr1,arr2));

//We create a variable to hold whether we found the array or not.
//We loop through the first array.
//We loop through the second array.
//We check if the first element of the second array is equal to the current element of the first array.
//If it is, we set found to true.
//We loop through the second array.
//We loop through the second array.
//We check if the current element of the first array is not equal to the current element of the second array.
//If it is not, we set found to false and break.
//If it is, we continue.
//If found is true, we return the index of the first element of the first array.
//If found is false, we return [-1,-1].

//#########################################################################################################

//3
//Max of Subarray Sums

/* How efficient can you be in this following final challenge? 
The input may hold many million values.

Given a numerical array that is potentially very long, 
return the maximum sum of values from a subarray. 
Any consecutive sequence of indices in the array is considered a subarray. 
Create a function that returns the highest sum possible from these subarrays. 
Given [1,2,-4,3,-2,3,-1], you should return 4 (for subarray [3,-2,3]), 
and given [-1,-2,-4,-3,-2,-3], return 0 (for []). 
This problem has many possible implementations. 
Which do you prefer & why? 
*/

function maxOfSubarraySums(arr){
    var max = 0;
    var sum = 0;

    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        if(sum > max){
            max = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return max;
}

//Example:
console.log(maxOfSubarraySums([1,2,-4,3,-2,3,-1]));
console.log(maxOfSubarraySums([-1,-2,-4,-3,-2,-3]));

//We create a variable to hold the max sum.
//We create a variable to hold the sum.
//We loop through the array.
//We add the current element to the sum.
//We check if the sum is greater than the max.
//If it is, we set the max to the sum.
//We check if the sum is less than 0.
//If it is, we set the sum to 0.
//We return the max.

//#########################################################################################################