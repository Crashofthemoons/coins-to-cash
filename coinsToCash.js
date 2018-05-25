const piggyBank = {
    quarters: 100,
    nickels: 50,
    dimes: 25,
    pennies: 10
};
let dollarAmount = 0;

let quarterValue = () => {
    let dollarAmount = piggyBank.quarters / 4;
    return dollarAmount;
}

let nickelValue = () => {
    let dollarAmount = piggyBank.nickels / 20;
    return dollarAmount;
}

let dimeValue = () => {
    let dollarAmount = piggyBank.dimes / 10;
    return dollarAmount;
}

let pennyValue = () => {
    let dollarAmount = piggyBank.pennies / 100;
    return dollarAmount;
}
console.log(`$${quarterValue()}`)
console.log(`$${nickelValue()}`)
console.log(`$${dimeValue()}`)
console.log(`$${pennyValue()}`)
