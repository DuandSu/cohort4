import calculator from './calculator'

test('Check addition of two numbers', () => {
    expect(calculator.addTwoNumbers(1,2)).toBe(3);
    expect(calculator.addTwoNumbers(0,0)).toBe(0);
    expect(calculator.addTwoNumbers(1,0)).toBe(1);
    expect(calculator.addTwoNumbers(0,2)).toBe(2);
    expect(calculator.addTwoNumbers(111,-111)).toBe(0);
    expect(calculator.addTwoNumbers(-2,2)).toBe(0);
    expect(calculator.addTwoNumbers(111,111)).toBe(222);
    expect(calculator.addTwoNumbers(-111,-111)).toBe(-222);
});

test('Check the subtraction of num2 from num1', () => {
    expect(calculator.subtractTwoNumbers(2,1)).toBe(1);
    expect(calculator.subtractTwoNumbers(0,0)).toBe(0);
    expect(calculator.subtractTwoNumbers(1,0)).toBe(1);
    expect(calculator.subtractTwoNumbers(0,2)).toBe(-2);
    expect(calculator.subtractTwoNumbers(111,-111)).toBe(222);
    expect(calculator.subtractTwoNumbers(-2,2)).toBe(-4);
    expect(calculator.subtractTwoNumbers(111,111)).toBe(0);
    expect(calculator.subtractTwoNumbers(-111,-111)).toBe(0);
});
