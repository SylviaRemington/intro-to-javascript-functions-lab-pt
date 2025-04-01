/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you.
(Note from Sylvia: I tried to do it myself with different code. 
Below is what I created.)
*/

//how would I make a template literal that could automatically 
// put the next exercise #? 
// That would make it easier for each subsequent exercise #. Need to figure this out.

function maxOfTwoNumbers (num1, num2) {
    if (num1 >= num2){
        return num1;
    } else {
        return num2;
    }
}

console.log ('Exercise 1 Result:', maxOfTwoNumbers(3, 9));