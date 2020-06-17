/* 1. Taking any five random names, find the person with the longest name */
var names=["Avinash", "Priyanka", "Manoj", "Veena", "Sarfaraz M.", "Akhror", "Vatsal"];
var nameLength=4; /* Lets take this length as initial reference */
var name;
for(var i=0;i<names.length;i++){
    if(names[i].length>=nameLength){ /* if name's length is greater than nameLength then set this as new lenght reference and set new name */
        name=names[i];
        nameLength=names[i].length;
    }
}
console.log(name);

/* For the same five names, find the person with the most no. of vowels in his/her
name */

var names=["Aaaaaaaa", "Ae", "AE", "aei", "aeio", "AEIOU", "aAEIO"];
var vowelCount=0;
var vowelsLength=2; /* Lets take this length as initial reference */
var name;
for(var i=0;i<names.length;i++){    
    for(var y=0;y<names[i].length;y++){
        if(names[i][y]=="a" || names[i][y]=="e" || names[i][y]=="i" || names[i][y]=="o" || names[i][y]=="u" || names[i][y]=="A" || names[i][y]=="E" || names[i][y]=="I" || names[i][y]=="O" || names[i][y]=="U"){
            vowelCount++;
        }
    }
    
    if(vowelCount>=vowelsLength){
    vowelsLength=vowelCount;
    name=names[i];
    
    }
    vowelCount=0;
}
console.log(name);

/* For a random set of names, say 10 names, find all the unique names
ex. "Avinash", "Priyanka", "Manoj", "Veena", "Priyanka", "Akhror", "Vatsal",
"Avinash" */

var setOfName=["Avinash", "Priyanka", "Manoj", "Veena", "Priyanka", "Akhror", "Vatsal", "Avinash"];
var innerLoop=1;

for(var i=0;i<setOfName.length;i++){
    for(j=innerLoop;j<setOfName.length;j++){
        if(setOfName[i]==setOfName[j]){
            setOfName.splice(j);
        }
        innerLoop++;
    }
    
}
console.log(setOfName);