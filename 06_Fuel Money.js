function fuelMoney(distance, passengers, dieselPrice) {
    let fuel = distance / 100;
    let fuelNeeded = fuel * 7;
    fuelNeeded += 0.100 * passengers;
    let moneyNeed = fuelNeeded * dieselPrice;
    console.log(`Needed money for that trip is ${moneyNeed}lv.`);
}