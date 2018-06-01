// Now do the reverse. Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies.

let dollarAmount = 1.19
let coinValue = {

}



const toCoin = (coin) => {

    let remainingCoins = (coin * 100)
    console.log(remainingCoins)

    let toQuarters = Math.floor(remainingCoins / 25)
    coinValue.quarters = toQuarters
    remainingCoins -= toQuarters * 25
    console.log(remainingCoins)

    let toDimes = Math.floor(remainingCoins / 10)
    coinValue.dimes = toDimes
    remainingCoins -= toDimes * 10
    console.log(remainingCoins)
    
    let toNickels = Math.floor(remainingCoins / 5)
    coinValue.nickels = toNickels
    remainingCoins -= toNickels * 5
    console.log(remainingCoins)
                
    let toPennies = Math.floor(remainingCoins / 1)
    coinValue.pennies = toPennies
    remainingCoins -= toPennies * 1
    console.log(remainingCoins)

    

}

console.log(toCoin(dollarAmount))
console.log(coinValue)


