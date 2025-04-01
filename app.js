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

//EXERCISE 1 ANSWER
function maxOfTwoNumbers (num1, num2) {
    if (num1 >= num2){
        return num1;
    } else {
        return num2;
    }
}

console.log ('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

//EXERCISE 2 ANSWER - using numbers related to United States AND UK rules, for two different functions.
function isAdult(ageInUsa){
    if (ageInUsa >= 21) {
        return 'isAdult';
    } else {
        return 'isMinor';
    }
}

console.log('Exercise 2 in the USA Result:', isAdult(21));

function isAdult(ageInUk){
    if (ageInUk >= 18) {
        return 'isAdult';
    } else {
        return 'isMinor';
    }
}

console.log('Exercise 2 in the UK Result:', isAdult(21));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

//EXERCISE 3 ANSWER
function isCharAVowel (singleCharacter){
    if (singleCharacter === 'a' || singleCharacter === 'e' || singleCharacter === 'i' || singleCharacter === 'o' || singleCharacter === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));



/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

//EXERCISE 4 ANSWER
function generateEmail (name, domain) {
    return name + "@" + domain;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
// const timeOfDay = 'night';

//EXERCISE 5 ANSWER
function greetUser (name, timeOfDay) {
    if (timeOfDay === 'morning' || timeOfDay === 'afternoon' || timeOfDay === 'evening') {
        return `Good ${timeOfDay}, ${name}!`;
    } else {
        return `Hi ${name}! What are you doing up in the middle of the night?!`
    }
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));



/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

//EXERCISE 6 ANSWER
function maxOfThree (numA, numB, numC) {
    if (numA > numB && numA > numC) {
        return numA;
    } else if (numB > numA && numB > numC) {
        return numB;
    } else {
        return numC;
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

//FIRST TRY - INCORRECT CAUSE I WAS ADDING THE TOTAL BILL AMOUNT with tip instead of the tip percentage
// function calculateTip (billAmount, tipPercentage){
//     return billAmount + tipPercentage;
// }

//SECOND TRY - I realize I'm just multiplying and need to create a percentage equation of the tipPercentage
// function calculateTip (billAmount, tipPercentage) {
//     return billAmount * tipPercentage; //how do I create a decimal for this?
// }
// console.log('Exercise 7 Result:', calculateTip(50, 20));

//THIRD TRY - adding percentage... but I think I did a return too early and it stopped the function from completing
// function calculateTip (billAmount, tipPercentage) {
//     return billAmount * tipPercentage; 
//     return tipPercentage = tipPercentage / 100; 
    //attempting to divide tip Percentage by 100... not working yet
// }
// console.log('Exercise 7 Result:', calculateTip(50, 20));

//EXERCISE 7 CORRECT ANSWER - yay! finally did it
function calculateTip (billAmount, tipPercentage) {
    tipPercentage = tipPercentage / 100; 
    return billAmount * tipPercentage; 
  
}
console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

//FIRST TRY
// function convertTemperature (temperature, scale) {
//     if (scale === "C") {
//         return "F";
//     } else (scale === "F") 
//         return "C"
//     }
// console.log('Exercise 8 Result:', convertTemperature(32, "C"));

//SECOND TRY
// function convertTemperature (temperature, scale) {
//     if (scale === "C") {
//         "C" = Celsius;
//         "F" = Fahrenheit;
//         return (Celsius * 9/5) + 32; //Celsius to Fahrenheit conversion
    // } else if (scale === "F") {
    //      return (Fahrenheit - 32) * 5/9; //Fahrenheit to Celsius conversion
//     } else {
//         return "Whew! You don't have to do any conversions."
//     }
       
//     }
// console.log('Exercise 8 Result:', convertTemperature(32, "C"));

//I USED AI to find out temperature info. Below is the info I got from it.
// To convert temperatures in JavaScript, use these formulas: Celsius to Fahrenheit: (Celsius * 9/5) + 32 and Fahrenheit to Celsius: (Fahrenheit - 32) * 5/9. 
// Here's a breakdown:
// Celsius to Fahrenheit:
// Formula: (Celsius * 9/5) + 32 
// Example: To convert 25°C to Fahrenheit: (25 * 9/5) + 32 = 77°F 
// Fahrenheit to Celsius:
// Formula: (Fahrenheit - 32) * 5/9 
// Example: To convert 77°F to Celsius: (77 - 32) * 5/9 = 25°C 

//Third Try
// function convertTemperature (temperature, scale) {
//     if (scale === "C") {
//         return (Celsius * 9/5) + 32; //Celsius to Fahrenheit conversion
//     } else if (scale === "F") {
//          return (Fahrenheit - 32) * 5/9; //Fahrenheit to Celsius conversion
//     } else {
//         return "Whew! You don't have to do any conversions."
//     }
// }
//     console.log('Exercise 8 Result:', convertTemperature(32, "C"));


    function convertTemperature (temperature, scale) {
        if (scale === "C") {
            return (Celsius * 9/5) + 32; //Celsius to Fahrenheit conversion
        } else if (scale === "F") {
             return (Fahrenheit - 32) * 5/9; //Fahrenheit to Celsius conversion
        } else {
            return "Whew! You don't have to do any conversions."
        }
    }
        console.log('Exercise 8 Result:', convertTemperature(32, "C"));