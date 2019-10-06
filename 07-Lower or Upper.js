function lowerAndUpperCase(character) {
    
    let isUpperCase = character === character.toUpperCase();
    let isLowerCase = character === character.toLowerCase();

    if(isUpperCase){
        console.log("upper-case");
        
    } else if (isLowerCase) {
        console.log("lower-case");
    }

}

lowerAndUpperCase("Z");
lowerAndUpperCase("a");

// console.log(character.toUpperCase());
// console.log(character.toLowerCase());