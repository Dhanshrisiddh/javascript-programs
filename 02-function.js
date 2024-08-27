
console.log("==============1.Function with no arguments and no return value================");

function show()
 {
    console.log("Inside show function");
    
 } 
 show();


 console.log("=============2.Function with argument and no return value================");

 function multiply(n1,n2)
  {
    
    console.log("Given Numbers are :",n1,n2);
    var result = n1 * n2;
    console.log("Multiplication is :",result);
    
} 
multiply(10,6);
multiply(5,3);
multiply(2.5,6.9);
multiply(100,300);
multiply(60);

console.log("==========3.Function with no argument and return value=========");
function demo()
{
    console.log("Inside Demo Function...");
    return "Good Morning";
}
demo();
var result=demo();
console.log(result);

//For Square
function square(num)
{
    console.log("Given Number for Square is :",num);
    var result=num * num;
    return result;
}
var returnValue=square(5);      // For 5 Square
console.log("Square is :",returnValue);

var returnValue=square(25);     // For 25 Square
console.log("Sqaure is :",returnValue);

// For Cube
function cube(num)
{
   console.log("Given Number for Cube :",num);
   var result=num*num*num;
   return result;
}
var returnValue=cube(2);          // For Cube of 2
console.log("Cube is :",returnValue);

var returnValue=cube(9);         // For Cube of 9
console.log("Cube is :",returnValue);




