console.log("step 1");

// Declare a variable x and initialize it with an integer.
var number1 = 1;
console.log(number1);
document.getElementById("dispint").innerHTML=number1;

// How do you round the number 7.25, to the nearest integer?
var number2 = 7.25;
console.log(number2 +" rounded value is "+ Math.round(number2));
document.getElementById("roundnumber").innerHTML=Math.round(number2);

// Create a array called colors with the strings red, green and blue inside.
var colors = ["red","green","blue"];
console.log(colors);
document.getElementById("colorsarray").innerHTML=colors;

// How can you find the length of the string you just created?
var firstName = "Claus";
console.log(firstName.length);
document.getElementById("stringlength").innerHTML="Length of string "+firstName+" is "+firstName.length;

// Write a program that checks the types of two variables and prints out SAME TYPE 
// if they are the same type.
let x = 9;
let y = 'Hello';

if (typeof x == typeof y) {
        console.log("x is "+ typeof x);
        console.log("y is "+ typeof y);
        console.log('SAME TYPE');
        
    }
    else{
        console.log("x is "+ typeof x);
        console.log("y is "+ typeof y);
        console.log('NOT SAME TYPE');
        document.getElementById("sametype").innerHTML= "x is "+ typeof x +" & " + "y is "+ typeof y +" They are not same type";
    }

//If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
var x2 = 7;
x2 = x2 % 3;
console.log(x2);
document.getElementById("newvalue").innerHTML = "New value is "+ x2;


// Write a program to answer the following questions:

// A. Can you store multiple types in an array? Numbers and strings?
var books = [12,"Javascript","React"];
console.log(books);
document.getElementById("multipletype").innerHTML = books;

// B. Can you compare inifities? (Not in Eyad's world) - does 6/0 == 10/0? How can you test this?

var x3 = 6/0;
var y3 = 10/0;
if(x3 == Infinity){
    console.log("x3 is equal to Infinity");
}
if(x3 == y3){
    console.log("x3 is " + x3 + " & y3 is " + y3 + " Both are equal");
    document.getElementById("compare").innerHTML = "x3 is " + x3 + " & y3 is " + y3 + " Both are equal";
}
