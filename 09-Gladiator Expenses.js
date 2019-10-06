function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmets = Math.floor(lostFights / 2);
    let brokenSwords = Math.floor(lostFights / 3);
    let brokenShields = Math.floor(lostFights / 6);
    let brokenArmor = Math.floor(brokenShields / 2);

    let expenses = (brokenHelmets * helmetPrice) +
        (brokenArmor * armorPrice) +
        (brokenShields * shieldPrice) +
        (brokenSwords * swordPrice);


    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}