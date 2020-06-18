/* 1. Return the Sum of Two Numbers
Create a function called "addition" that takes two numbers as arguments
and return their sum.
Examples
addition(3, 2) ➞ 5
addition(-3, -6) ➞ -9
addition(7, 3) ➞ 10 */

function addition(x,y){
    return x + y
}
console.log(addition(2,4));
/*2. Convert Minutes into Seconds
Write a function called "convert" that takes an integer minutes and
converts it to seconds.
Examples
convert(5) ➞ 300
convert(3) ➞ 180
convert(2) ➞ 120 */

function convert(x){
    return x * 60
}
console.log(convert(5));

/* 3. Return the Next Number from the Integer Passed
Create a function called "addition" that takes a number as an argument,
increments the number by +1 and returns the result.
Examples
addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2 */

function addition(x){
    return x + 1
}
console.log(addition(-3));

/* 4. Area of a Triangle
Write a function called "triArea" that takes the base and height of a
triangle and return its area.
Examples
triArea(3, 2) ➞ 3
triArea(7, 4) ➞ 14
triArea(10, 10) ➞ 50
The area of a triangle is: (base * height) / 2 */

function triArea(x,y){
    return (x*y)/2
}
console.log(triArea(10, 10));

/*5. Using the "&&" Operator
JavaScript has a logical operator &&. The && operator takes two boolean
values, and returns true if both values are true.
Consider a && b:
a is checked if it is true or false.
If a is false, false is returned.
b is checked if it is true or false.
If b is false, false is returned.
Otherwise, true is returned (as both a and b are therefore true ).
The && operator will only return true for true && true.
Make a function using the && operator.
Examples
and(true, false) ➞ false
and(true, true) ➞ true
and(false, true) ➞ false
and(false, false) ➞ false */

function and(x,y){
    return x && y
}
console.log(and(true, false));

/* 6. Maximum Edge of a Triangle
Create a function that finds the maximum range of a triangle's third
edge, where the side lengths are all integers.
Examples
nextEdge(8, 10) ➞ 17
nextEdge(5, 7) ➞ 11
nextEdge(9, 2) ➞ 10
(side1 + side2) - 1 = maximum range of third edge.
The side lengths of the triangle are positive integers. */

function nextEdge(x,y){
    return (x + y) - 1
}
console.log(nextEdge(9, 2));

/* 7. Return the Remainder from Two Numbers
There is a single operator in JavaScript, capable of providing the
remainder of a division operation. Two numbers are passed as parameters.
The first parameter divided by the second parameter will have a
remainder, possibly zero. Return that value.
Examples
remainder(1, 3) ➞ 1
remainder(3, 4) ➞ 3
remainder(-9, 45) ➞ -9
remainder(5, 5) ➞ 0
remainder(11, 3) -> 2 */

function remainder(x,y){
    return x % y
}
console.log(remainder(11, 3));

/* 8. Football Points
Create a function that takes the number of wins, draws and losses and
calculates the number of points a football team has obtained so far. A
win receives 3 points, a draw 1 point and a loss 0 points.
Examples
footballPoints(3, 4, 2) ➞ 13
footballPoints(5, 0, 2) ➞ 15
footballPoints(0, 0, 1) ➞ 0
NOTE - Inputs will be numbers greater than or equal to 0. */

function footballPoints(x,y,z){
    return (x*3) + (y*1) - (z*0)
}
console.log(footballPoints(3, 4, 2));

/* 9. Less Than 100?
Given two numbers, return true if the sum of both numbers is less than
100. Otherwise return false.
Examples
lessThan100(22, 15) ➞ true
// 22 + 15 = 37
lessThan100(83, 34) ➞ false
// 83 + 34 = 117 */

function lessThan100(x,y){
    return (x + y > 100)
}
console.log(lessThan100(22, 15));

/*
10. Are the Numbers Equal?
Create a function that returns true when num1 is equal to num2; otherwise
return false.
Examples
isSameNum(4, 8) ➞ false
isSameNum(2, 2) ➞ true
isSameNum(2, "2") ➞ false */

function isSameNum(x,y){
    return (x === y)
}
console.log(isSameNum(2, 2));


/*11. The Farm Problem
In this challenge, a farmer is asking you to tell him how many legs can
be counted among all his animals. The farmer breeds three species:
chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each
species. You have to implement a function that returns the total number
of legs of all the animals.
Examples
animals(2, 3, 5) ➞ 36
animals(1, 2, 3) ➞ 22
animals(5, 2, 8) ➞ 50
The order of animals passed is animals(chickens, cows, pigs).
Remember that the farmer wants to know the total number of legs and not
the total number of animals.*/

function animals(x,y,z){
    return (x*2) + (y*4) + (z*4)
}
console.log(animals(2, 3, 5));

/* 12. Convert Hours and Minutes into Seconds
Write a function that takes two integers (hours, minutes) and converts
them into seconds.
Examples
convert(1, 3) ➞ 3780
convert(2, 0) ➞ 7200
convert(0, 0) ➞ 0 */

function convert(x,y){
    return (x*3600) + (y*60)
}
console.log(convert(1, 3));

/* 13. Return a String as an Integer
Create a function that takes a string and returns it as an integer.
Examples
stringInt("6") ➞ 6
stringInt("1000") ➞ 1000
stringInt("12") ➞ 12 */ 

function stringInt(x){
    return parseInt(x)
}
console.log(stringInt("6"));

/* 14. Compare Strings by Count of Characters
Create a function that takes two strings as arguments and return either
true or false depending on whether the total number of characters in the
first string is equal to the total number of characters in the second
string.
Examples
comp("AB", "CD") ➞ true
comp("ABC", "DE") ➞ false
comp("hello", "edabit") ➞ false */

function comp(x,y){
    return (x.length == y.length)
}
console.log(comp("AB", "CD"));

/* 15. Divides Evenly
Given two integers, a and b, return true if a can be divided evenly by b.
Return false otherwise.
Examples
dividesEvenly(98, 7) ➞ true
# 98/7 = 14
dividesEvenly(85, 4) ➞ false
# 85/4 = 21.25
NOTE - a will always be greater than or equal to b. */

function dividesEvenly(x,y){
    return (x%y==0)
}
console.log(dividesEvenly(98, 7));