"use strict";

/*

MATHS REMINDER: How to calculate an average of some numbers
The average of three numbers n1, n2 and n3 (whichever they may be) is:
average = (n1 + n2 + n3) / 3

The average of four numbers n1, n2, n3 and n4 is:
average = (n1 + n2 + n3 + n4) / 4

and so on.

So the average of N numbers is:
average = (n1 + n2 + ... + nN) / N

Example:
The average of 2, 4, 6, 12 and 1 is:
average = (2 + 4 + 6 + 12 + 1) / 5 = 25 / 5 = 5

In other words:
average = sum of all numbers / how many numbers

*/


/*

From a previous exercise you have a function (adder) that returns the sum of all the elements of an array.
You must use that function to code a new function (averg) that returns the average of 
all the numbers in an array

The function only needs to work when all the elements are numbers

TEST
averg([1, 2, 3, 4, 5]); // Expected: 3
averg([4,2]); // Expected: 3
averg([-1,1]); // Expected: 0


VIDEO:  Record a video where you explain how averg works line by line. Max 3 minutes.
        This video must be called avergExplanation.


*/

// Copy your earlier function here
   function adder ( _array ) {
    let sum=0
    for (let i=0; i < _array.length; i++ ){
      sum= sum+_array[i];
    }
}
return sum;

function averg ( _array ) {
   return(adder(_array)/_array.length);

}

averg([1, 2, 3, 4, 5]);
/* 15 dividerat på 5 = 3 */
averg([4, 2]);
/* 4+2=6/2=3 */
averg ([-1,1])
/* -1+1=0 */

/* Averg är en metod som enkelt hittar medelvärdet för en array 
Vi börjar med att räkna elementen (som i detta fall är 1,2,3,4,5 
  sen 4,2 och sen -1,1). Sedan beräkna summan av dessa element 
  sedan dividera den summan med totala värden. 

  1. Hitta det totala antalet element i en array (ex 1,2,3,4,5= 5st) 
  Börja ta emot genom att beräkna längden på arrayen med längdmetoden. 

  2.  Hitta summan av alla elemet i en array. (15, 6 och 0 från ovanstående ex) 
  Vi går igenom arrayen för att hitta summan. 


  3.  Delar värdena med steg 1 (längden) och steg 2 (summan)
  15/5= 3   6/2 =3  -1/1 = 0

*/

