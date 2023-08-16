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