var word = "Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char= word.charAt(index);
    if (char=='e'){
        count++;
    }
}
console.log(`count of char e = ${count}`);


var word = " I am a web Developer";  // ========= my method =========
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char= word.charAt(index);
    if (char=='e' || char=='a' || char=='i' || char=='o' || char=='u'){
        count++;
    }
}
console.log(`count of char aeiou = ${count}`);


console.log(`======= Sum of 1 to 5================`); // ========== class method ==========
var sum = 0;
for (let index = 1; index <=5; index++) {
    sum = sum + index;   
}
console.log(`Summation is ${sum}`);



var cube=0;             // ========= my method =========
for (let index = 0; index <+5; index++) {
    var cube=index*index*index;
    var res = 0+cube;
    console.log(res);
    
    
}

