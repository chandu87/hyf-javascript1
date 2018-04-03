// Week 2 assignment javascript

//1. Question 
function add(a,b,c){
    return a+b+c;
}
console.log("Answer 1");
console.log("Sum of 1,2,3 is "+add(1,2,3));

// 2. Create a function named colorCar that receives a color, and prints out, "a red car" for example. (Hint: put it in your file and run it like before.)
 function colorCar(color){
    console.log("a "+ color+" car");
 }
 console.log("Answer 2");
colorCar("yellow")
// 3. Create an object and a function that takes the object as a parameter and prints out all of its names and values.
console.log("Answer 3");
var fruitsObj= {
            "apples":1,
            "oranges":2,
            "mangos":5
};
function printObject(fruitsObj){
    console.log("number of apples are "+fruitsObj.apples);
    console.log("number of oranges are "+fruitsObj.oranges);
    console.log("number of mangos are "+fruitsObj.mangos);
}
printObject(fruitsObj);


// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2)
console.log("Answer 4");
function vehicleType(color,code){
    if(code == 1){
        console.log("a "+color+" motorbike");
    }
    else if(code == 2)
        {
        console.log("a "+color+ " car");
        }
}
vehicleType("red",1);
vehicleType("blue",2);

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

// if (3 == 3) {
//     console.log("true")
// } else {
//     console.log("false")
// }
console.log("Answer 5");
console.log(3===3);

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints "a blue used car"

//arrow functions
var vehicle =(color,code,age)=>{
    if(code==1 && age==5){
        console.log("a "+color+" used motorbike");
    }
    else if(code==2 && age==5){
        console.log("a "+color+" used car");
    }
 };
 console.log("Answer 6");
vehicle("red",2,5);

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
var vehicles = ["motorbike", "caravan", "bike", "jeep"];

// 8. How do you get the third element from that list?
console.log("Answer 8");
console.log(vehicles[2]);

// 9. Change the function vehicle to use the list of question 4. So that vehicle("green", 3, 1) prints "a green new caravan".
console.log("Answer 9");
var vehicleAge = ["5 years old","3 years old","1 year old","new"];

var vehicle=(color,age,model)=>{
     console.log("a "+color+" "+vehicleAge[age]+" "+vehicles[model] );
}

vehicle("green",3,1);

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
console.log("Answer 10");
function advertiseFunction(){
var advertise = "Amazing Joe's Garage, we service";

for(i=0; i < vehicles.length; i++){
        if(i != (vehicles.length - 1)){       
            advertise += " "+vehicles[i]+"s";
        }
        else{
            advertise += " and "+vehicles[i]+"s";
        }
    }
    console.log(advertise);
}
advertiseFunction();

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 7?

console.log("Answer 11");
vehicles.push("Sports car","Van");
advertiseFunction();

// 12. Create an empty object
var emptyObj = {};

// 13. Create a function that takes two objects as parameters and compares them. You will actually need to write two functions — one that compares with == and one that compares with ===. Remember that objects can have objects inside of them so you'll need to find a way to compare every element of every object (types and values). For example:
// In our example we'll say that `obj1 == obj2` is `true` and `obj1 === obj2` is `false`. Make sure you can see why before you write any code!
// Note: give this exercise your best shot but don’t spend more than, say, one hour on it.

console.log("Answer 13");
var obj1 = {
  a: 1,
  b: "this is the letter b",
  c: {
    foo: "what is a foo anyway",
    bar: [1, 2, 3, 4]
  }
};

var obj2 = {
  a: "1",
  b: "this is the letter b",
  c: {
    foo: "what is a foo anyway",
    bar: [1, 2, 3, 4]
  }
};
function compareObjects(obj1,obj2){
    if((obj1["a"] == obj2["a"]) && (obj1["b"] == obj2["b"]) && (obj1["c"].foo == obj2["c"].foo) && (obj1["c"].bar == obj2["c"].bar))
    {
        console.log(true);
    }
    else{
        console.log(false);
    }
}
compareObjects(obj1,obj2);

// 14. We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.
console.log("Answer 14");
function foo(func) {
        // What to do here? 
        func();
    }
    
    function bar() {
        console.log('Hello, I am bar!');
    }
    
    foo(bar);


//15. Write some code to test two arrays for equality using == and ===. Test the following:
console.log("Answer 15");
var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
// Don't cheat! Seriously - try it first.
// Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. Press the Run button in the upper right corner to run the code.
// More insights from this Stack Overflow question.

console.log("array comparision");
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

console.log(JSON.stringify(x)== JSON.stringify(y));
console.log(JSON.stringify(z)== JSON.stringify(x));
console.log(JSON.stringify(x)=== JSON.stringify(y));

function compareArray(array1,array2){
    var result;
    if(!(array1.length===array2.length)){
         result = false }
    else {
        result = true;
        for(var i=0;result !== false && i < array1.length; i++) {
            if(array1[i] !== array2[i]) {
                result = false;
            }
        }
    }
    return result;
}
console.log("compareArray "+ compareArray(x,y));


// 16. Take a look at the following code:
// Show that changing `o2` changes `o3` (or not) and changing ~~`o2` changes `o3`~~ `o1` changes `o3`(or not). 
// Does the order that you assign (`o3 = o2` or `o2 = o3`) matter? {Jim Cramer: ???}

console.log("Answer 16");
var o1 = { foo: 'bar' };
var o2 = { foo: 'bar' };
var o3 = o2;
console.log(o3);

var o2 = { foo: 'jar' };
var o3 = o2;
console.log(o3);

var o3 = { foo: 'caar' };
var o3 = o2;
console.log(o2);

//The order we assign matters



// 17.  What does the following code return? (And why?)

console.log("Answer 17");
let numberOne = 42; 
typeof typeof bar;
console.log("typeof typeof");
console.log(typeof numberOne);
//here we are asking for typeof string number so result is string
console.log(typeof typeof numberOne);

// ‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.