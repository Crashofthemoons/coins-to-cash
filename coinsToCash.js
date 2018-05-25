const piggyBank = {
    quarters: 100,
    nickels: 50,
    dimes: 25,
    pennies: 10
};
let dollarAmount = 0;


let totalValue = () => {
    let dollarAmount = (piggyBank.quarters / 4) + (piggyBank.nickels / 20) + (piggyBank.dimes / 10) + (piggyBank.pennies / 100);
    return dollarAmount;
}

console.log(`$${totalValue()}`)