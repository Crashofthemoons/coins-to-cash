const dollarAmount = 1.27
const piggyBank = {
    quarters: 4,
    dimes: 10,
    nickels: 20,
    pennies: 100
}


const coins = (dollar) => {
    currentCoins = (dollar * piggyBank.quarters)
    currentCoins -= (currentCoins * piggyBank.dimes)
    currentCoins -= (currentCoins * piggyBank.nickles)
    currentCoins -= (currentCoins * piggyBank.pennies)

    return currentCoins.toFixed(2);
}

// const toQuarters = (dollar) => {
//     dollar = dollar * coinValue[0];
//     return dollar.toFixed(2);
// }
coins(dollarAmount)

console.log(piggyBank)

