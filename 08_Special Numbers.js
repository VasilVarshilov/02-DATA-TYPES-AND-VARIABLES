function solve(input) {
    let resultBoolean = '';

    for (let i = 1; i <= input; i++) {
        let resultNum = i;
        i = i.toString();
        if (i.length == 1) {
            let bool0 = false
            if (resultNum == 5 || 7 == resultNum || resultNum == 11) {
                bool0 = true;
            }
            bool0 == true ? resultBoolean = 'True':resultBoolean = 'False';
            console.log(resultNum + ' -> ' +resultBoolean)
        }

        if (i.length >= 2) {
            let numberToUse = +i[0] + +i[1];
            let bool = false
            if (numberToUse == 5 || 7 == numberToUse || numberToUse == 11) {
                bool = true;
            }
            bool == true ? resultBoolean = 'True':resultBoolean = 'False';
                console.log(resultNum + ' -> ' + resultBoolean);
        }

    }
}