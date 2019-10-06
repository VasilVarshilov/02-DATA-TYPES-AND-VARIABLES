function solve(firstStr, symbol, secondStr) {
    let newStr = firstStr.replace('_', symbol);
    let result = newStr === secondStr ?
        "Matched" : "Not Matched";

    console.log(result);
}
