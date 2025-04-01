"use strict"
function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    if (d === 0) {
        arr[0] = -b / (2 * a);
    }
    if (d > 0) {
        arr[0] = (-b + Math.sqrt(d)) / (2 * a);
        arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = typeof percent === "string" ? +percent : percent;
    contribution = typeof contribution === "string" ? +contribution : contribution;
    amount = typeof amount === "string" ? +amount : amount;
    countMonths = typeof countMonths === "string" ? +countMonths : countMonths;

    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
        return false;
    }

    percent = (percent / 100) / 12;
    let payments = amount - contribution;
    let monthlyPayment = payments * (percent + (percent / ((1 + percent) ** countMonths - 1)));
    return +((monthlyPayment * countMonths).toFixed(2));
}
