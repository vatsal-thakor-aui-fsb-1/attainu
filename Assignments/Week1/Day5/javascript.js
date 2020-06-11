/* 1. Find the square of a given number and print it on the console */
var square=5;
console.log("square of a 5 is:" + square*square);

/* 2. Look at the time of the day and tell whether it's time for breakfast, lunch or
dinner and print it on the console
06hrs-12hrs breakfast
12hrs-16hrs lunch
16hrs-20hrs dinner
outside this - sleep time */

var date=new Date();
var hr= date.getHours();

if(hr>=6 && hr<=12){
    console.log("Time for Breakfast");
    }
    else if(hr>=12 && hr<=16){
    console.log("Time for Lunch");  
    }  
    else if(hr>=16 && hr<=20){
    console.log("Time for Dinner");
    }
else{
    console.log("Sleep time");
}

/* 3. Given a number, find whether the number is odd or even and print on the console*/

var num=10;
if(num%2==1){
    console.log("Given number " + num + " is: " + "Odd number");
    }  
else{
    console.log("Given number " + num + " is: " + "Even number");
}

/* 4. In your full name, find the number of vowel letters and consonant letters and
print on the console */

var fullName="Vatsal Thakor",vowel=0,consonant=0;
for(var i=0; i<fullName.length; i++){
    if(fullName[i]=="a" || fullName[i]=="e" || fullName[i]=="i" || fullName[i]=="o" || fullName[i]=="u"){
        vowel++;
    }
    else if(fullName[i]==" "){
        consonant--;
    }
    else{
        consonant++;
    }
}
console.log("Vowel letters:" + vowel +"; Consonant letters:" + consonant);


/* 5. Take a number and print the first 10 multiples of that number eg. Let's take
number 2, first 10 multiples would be -> 2,4,6,8,10,12,14,16,18,20 */

var mul=10;
for(var i=1;i<=10;i++){
console.log(i*mul);
}