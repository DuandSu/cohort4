import taxCalculator from './taxcalculator'

test('Check Federal Tax Calculation of Gross Income', () => {
    expect(taxCalculator.calculateFederalTax(1)).toBe(0.15);
    expect(taxCalculator.calculateFederalTax(2)).toBe(0.30);
    expect(taxCalculator.calculateFederalTax(50000)).toBe(7580.325);
    expect(taxCalculator.calculateFederalTax(100000)).toBe(17992.06);
    expect(taxCalculator.calculateFederalTax(150000)).toBe(30992.06);
    expect(taxCalculator.calculateFederalTax(250000)).toBe(61403.56);
});