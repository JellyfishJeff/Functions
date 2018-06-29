function add (num1, num2) {
    return(num1+num2);
} 

function multiply (num1,num2) {
    var count = 0;
    for (var i = 0; i<num1; i++ )
{
   count = add(count,num2); 
    
}
return(count);
}

function power (x,n) {
var exponent = 1;
for (var i = 1; i<=n; i++ )
{
   exponent = multiply(exponent,x); 
}
return(exponent);
}

function factorial(x) {
var fact = 1;
for (var i = 1; i<=x; i++){
fact = multiply(i,fact);
}
return(fact);
}

function fibonacci (x){
var One = 0;
var Two = 1;
var track = 0;
 for ( var i=2; i<x; i++){
     track = add(One,Two);
     One = Two;
     Two = track;
 }
 return(track);
}



document.write(JSON.stringify(add(2,4))+ "<br />");
document.write(JSON.stringify(multiply(6,8))+ "<br />");
document.write(JSON.stringify(power(3,2))+ "<br />");
document.write(JSON.stringify(factorial(4))+ "<br />");
document.write(JSON.stringify(fibonacci(8))+ "<br />");






