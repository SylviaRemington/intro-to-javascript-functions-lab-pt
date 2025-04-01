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


