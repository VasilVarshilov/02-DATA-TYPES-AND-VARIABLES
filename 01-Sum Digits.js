function sumDigits(number) {

    let string = number.toString();
    let sum = 0;

    for (let index = 0; index < string.length; index++) {
        sum += Number(string[index]);
        
    } 
    
    console.log(sum);
    
}
sumDigits(245678);

//////////////////////////////////////

function sumDigits(number) {
    
    console.log(number.toString().split(""))
}
sumDigits(245678);

////////////////////////////////////////

function sumDigits(number) {
    
    let result = number
        .toString
        .split("")
        .map(Number)
        .reduce((a,b) => a+b)

        console.log(result);
        
}
sumDigits(); // reduce събира двете числа примерно 2 и 3 след това 4 и 5 и тнт

////////////////////////////////////////////

function sumDigits(number) {
    
    let sum = 0;

    while (number !== 0) {
        
        sum += number % 10;

        number = parseInt(number / 10);

    }
    
    console.log(sum);
    
}
sumDigits(245678); //////