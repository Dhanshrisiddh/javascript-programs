// If-else Condition


var votingChecker=function (age,person){
    
    if (age>=18) {
        
    console.log(`Hey ${person} your age is ${age} and you are eligible for vote `);
    
    } else {
        
    console.log(` Unfortunately , Hey ${person} your age is ${age} and you are not eligible for vote `);
    
    }

}
votingChecker(21,"Dhanshri");
votingChecker(17,"Rutuja");