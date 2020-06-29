/* 1. Concatenate First and Last Name into One String
Given two strings, firstName and lastName, return a single string in the
format "last, first".
Examples
concatName("First", "Last") ➞ "Last, First"
concatName("John", "Doe") ➞ "Doe, John"
concatName("Mary", "Jane") ➞ "Jane, Mary" */

function concatName(x,y){
    return y +", " + x
}
console.log(concatName("John", "Doe"));

/* 2. Flip the Boolean
Booleans can also be written as integers, where 1 = True and 0 = False.
Make a function that returns the opposite of the boolean given.
Examples
flipBool(true) ➞ 0
flipBool(false) ➞ 1
flipBool(1) ➞ 0
flipBool(0) ➞ 1 */

function flipBool(x){
    if(x==true){
        return 0
    }
    else{
        return 1
    }
}
console.log(flipBool(1));

/* 3. Reverse an Array
Write a function to reverse an array.
Examples
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
reverse([]) ➞ [] */

function reverse(x){
    var y=[];
    for(var i=x.length-1; i>=0; i--){
        y.push(x[i]);
    }
    return y;
}
console.log(reverse([9, 9, 2, 3, 4]));

/* 4. Return the Last Element in an Array
Create a function that accepts an array and returns the last item in the
array.
Examples
getLastItem([1, 2, 3]) ➞ 3
getLastItem(["cat", "dog", "duck"]) ➞ "duck"
getLastItem([true, false, true]) ➞ true*/

function getLastItem(x){
    return x[x.length-1]
}
console.log(getLastItem([1, 2, 3]));

/* 5. Find the Index
Create a function that finds the index of a given item.
Examples
search([1, 5, 3], 5) ➞ 1
search([9, 8, 3], 3) ➞ 2
search([1, 2, 3], 4) ➞ -1
Notes
If the item is not present, return -1. */

function search(x,y){
    var z=0;
    for(var i=0;i<x.length;i++){
        if(x[i]==y){
            z++;
            return i
        }
    }
    if(z==0){
        return -1
    }
}
console.log(search([1, 5, 3], 5));

/* 6. Concatenating Two Integer Arrays
Create a function to concatenate two integer arrays.
Examples
concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3] */

function concat(x,y){
    return x.concat(y)
}
console.log(concat([1, 3, 5], [2, 6, 8]));

/* 7. Squares and Cubes
Create a function that takes an array of two numbers and checks if the
square root of the first number is equal to the cube root of the second
number.
Examples
checkSquareAndCube([4, 8]) ➞ true
checkSquareAndCube([16, 48]) ➞ false
checkSquareAndCube([9, 27]) ➞ true */

function checkSquareAndCube(x){
    return Math.pow(x[0],0.5)==Math.pow(x[1],1/3)
}
console.log(checkSquareAndCube([4, 8]));

/* 8. Multiply Every Array Item by Two
Create a function that takes an array with numbers and return an array
with the elements multiplied by two.
Examples
getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]
getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0] */

function getMultipliedArr(x){
    var y=[];
    for(var i=0;i<x.length;i++){
        y.push(x[i]*2)
    }
    return y
}
console.log(getMultipliedArr([1, 86, -5]));

/* 9. Write a JavaScript program to display the reading status (i.e. display
book name, author name and reading status) of the following books.
Examples */
var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}]; /*
Output
Already read 'Bill Gates' by The Road Ahead.
Already read 'Steve Jobs' by Walter Isaacson.
You still need to read 'Mockingjay: The Final Book of The Hunger Games'
by Suzanne Collins. */

var y='';
function chackStatusOfBook(x){
    for(let i=0;i<x.length;i++){
        if(x[i].readingStatus=='true'){
            y+= "Already read '" + x[i].title +"' by " + x[i].author + ".\n";
        }
        else{
            y+= "You still need to read '" + x[i].title +"' by " + x[i].author + ".\n";
        }
    }
}
chackStatusOfBook(library);
console.log(y);

/* 10. Write a JavaScript program to sort an array of JavaScript objects.
Examples
var library = [
{
title: 'The Road Ahead',
author: 'Bill Gates',
libraryID: 1254
},
{
title: 'Walter Isaacson',
author: 'Steve Jobs',
libraryID: 4264
},
{
title: 'Mockingjay: The Final Book of The Hunger Games',
author: 'Suzanne Collins',
libraryID: 3245
}];
Expected Output:
[{
author: "Walter Isaacson",
libraryID: 4264,
title: "Steve Jobs"
}, [object Object] {
author: "Suzanne Collins",
libraryID: 3245,
title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
author: "The Road Ahead",
libraryID: 1254,
title: "Bill Gates"
}]
Resources -
https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt */

var library = [
    {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
    },
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
    }];

library.