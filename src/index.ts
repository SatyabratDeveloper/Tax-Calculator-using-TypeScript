function tax(income: number, year: number) {
    if (year >= 2020 && income < 50000)
        return income * 1.2;
    else if (year < 2020 && income < 50000)
        return income * 1.1;
    return income * 1.3;
}
console.log(tax(49000, 2019));