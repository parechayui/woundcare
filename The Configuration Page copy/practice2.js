// while loop practice 
var apple = 1;

while(apple <= 10) {
    console.log(apple);
    apple += 2;
}

//1 apple
//3 ""
//5 ""
//7 ""
//9 ""

var grapes = 1;

while(grapes <= 20){
    if(grapes % 4 === 0){
        console.log(grapes);
    }
    grapes++;
}
//4 grapes
//8
//12
//16
//20

var ants = 100;

while(ants < 150) {
    console.log(ants + 1);
    ants--;
}

//101
//100
//101
//100
//101
//100
//Infinit


//Print all numbers between -10 and 19

var marbles = -10;

while(marbles <= 19){
    console.log("number of marbles in the jar " +marbles);
    marbles ++
}

//Print all even numbers between 10 and 40

var kitKat = 10;

while(kitKat <= 40){
    if(kitKat % 2 === 0){
        console.log("This candy alsways comes in pairs like " +kitKat);
        kitKat++;
    }
}
// another way 

var kitKat = 10;

while(kitKat <= 40){
    console.log("this while print out the evens " +kitKat);
    kitKat += 2;
}
//Print all odd numbers between 300 and 333

var oddNum = 300;

while(oddnum <= 333){
    if(oddNum % 2 !== 0){
        console.log("TSA picks out every odd person in line " +oddnum);
        oddnum++;
    }
}

//Print all numbers divisible by 5 AND 3 between 5 and 50

var groups = 5;

while(groups <= 50){
    if (groups % 5 === 0 && groups % 3 === 0){
        console.log("Here are the groups by size " + groups);
        groups++;
    }
}

// Annoyo Matic Script

var answer = prompt("Are we there yet?");

while(answer !== "yes" && answer !== "yeah"){
 var answer = prompt("Are we there yet?");   
}

alert("Yess, we made it!");

// For loops Section

//for(init; condition; step) {
    //run code
//}


for(var i = 0; i < 16; i+=8){
    console.log(i);
}
// 0
// 8

var str = "ahceclwlxo";

for(var i = 1; i < str.length; i+=2){
    console.log(str[i]);
}

//h
//e
//l
//l
//o


for(var i = -10; i <=19; i++){
    console.log(i);
}

for(var i = 10; i <=40; i++){
    if(i % 2 === 0){
    console.log(i);   
    }
   
}

for(var i = 300; i <= 333; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

for(var i = 5; i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
}

// Functions

//--Declare it---

// function doSomething() {
// console.log("Hello World");
// }
// -- Then Call It --

// doSomething();

function sayHello(name) {
    console.log("hello there " + name + "!");
}



function test (x,y){
    return y-x;
}

test(10, 40);

//  This returns 30


function test(x) {
    return x*2;
    console.log(x);
    return x/2;
}

test(40);

// This returns 80 as soon as the func returns the excution of the code stops.

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }else {
     return false
    }
}
// or

function isEven(num){
    return num % 2 === 0;
}
 
// Factorial 
function factorial(num){
 //define a result variable
    var result = 1;
//calculate factorial and store value inside result
    for(var i = 2; i <= num; i++){
        result *= i;
    }
// return the result variable    
return result;
}

// factorial(4) 4 x 3 x 2 x 1 



// Replacing Characters

function kebobToSnake(str){
  // replace all "-" with "_" 
    var newStr = str.replace(/-/g , "_");
  //return str
    return newStr;
}


var num = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i < num.length; i++){
    if(i % 3 === 0){
        console.log(num[i]);
    }
}



function sumArray(arr){
    
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total; 
}


// Js Objects

var person = {
    name: "Keron",
    age: 31,
    city: "West Palm Beach"
};

// to print out the name 
console.log(person["name"]);

// or 
console.log(person.name);

// prints out Keron 


//******** Updating data inside a Obeject *******
// Using the previous code
// ------------------------------------------ //
// to update age
person["age"] += 1;
// to update city
person.city = "Orlando";

person.name = "KDW";
preson["name"] = "Wolverine";

 
// Comparison of array to objects example

var dogs = ["Rust", "Lucky", "Bubba"]
// I want to add ben to the the array
dogs.push("Ben")
//console.log prints dogs = ["Rust", "Lucky", "Bubba", "Ben"]

//I want to get Lucky out of the array
dogs[1];
//console.log prints -- "Lucky"

// doing this with Objects

var dogs = {
    name: "trixy",
    breed: "Lab" 
}
//console.log prints -- Object {name: "trixy", breed: "Lab"}

// I want to target trixy in the object

dogs["name"]
// or
dogs.name
// Console prints "trixy"

//Adding to the  onject

dogs.age = 6;
//or 
dogs["age"] = 6;
//console will print -- Object{name : "trixy", breed: "Lab", age: 6}

//----------------------------------------------------------------------------------------------------//
//Objects nesting

var post = [
    {
        title: "The Wolverine",
        Author: "Keron",
        Comments: ["Logans the name", "He's a beast"]
    },
    {
        title: "Find you loving",
        Author: "Drake",
        Comments: ["Biggest artist in the wolrd", "Canadian superstar"]
        
    }  
]


// Practice Quiz 1.)
var someObject = {};
    someObject._name = "Hedwig";
    someObject.age = 6;
var prop = "color"
    someObject[prop] = "red";
someObject.123 = true;


// Practice Quiz 2.)

var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

//Write code to retrieve "Malfoy" from someOject
//Go one  "layer" at a time!

someObject.friends[0]




var movies = [
    {
     title: "The Grudge",
     hasWatched: false,
     rating: 3.5
    },
    {
     title: "Transformers",
     hasWatched: true,
     rating: 3.5
    },
  
]

movies.forEach(function(movie){
   var results = "You have ";
    if(movie.hasWatched){
        results += "watched ";
    } else {
      results += "not seen ";
    }
    results += "\"" + movie.title + "\" - ";
    results +=  movie.rating + " stars";
   console.log(results) 
});

/* --- This is how to clean this up -- */

function buildString(movie){
    var results = "You have ";
    if(movie.hasWatched){
        results += "watched ";
    } else {
      results += "not seen ";
    }
    results += "\"" + movie.title + "\" - ";
    results +=  movie.rating + " stars";
    return result;
}

/* now call the function in the forEach loop*/

movies.forEach(function(movie){
    console.log(buildString(movie))
});


/* ------------- JS Methods -----------------*/
 
/*--------- DOM Selection ----------*/

document.getElementById("first");
document.querySelector("#first");
document.getElementsByClassName("special")[0];
document.querySelector(".special");
document.querySelectorAll(".special")[0];
document.getElementsByTagName("p")[0];
document.querySelector("p");
document.querySelectorAll("p")[0];


/*-------------- DOM Manipulation ----------------*/

  

