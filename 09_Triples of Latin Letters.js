function solve  (num) {
    let c = 0;
    for (let i = 97; 97 + num > i; i++) {
        for (let d = 97; (97 + num) > d; d++) {
            for (let f = 97; (97 + num) > f; f++) {
                c++;
                console.log(`${String.fromCharCode(i ,d ,f)+ c}`);
            }
        }
    }
}
solve(9)