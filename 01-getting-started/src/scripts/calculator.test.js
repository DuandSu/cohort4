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

test('Check the subtraction of num1 from num2', () => {
    expect(calculator.subtractTwoNumbers(2,1)).toBe(1);
    expect(calculator.subtractTwoNumbers(0,0)).toBe(0);
    expect(calculator.subtractTwoNumbers(1,0)).toBe(1);
    expect(calculator.subtractTwoNumbers(0,2)).toBe(-2);
    expect(calculator.subtractTwoNumbers(111,-111)).toBe(222);
    expect(calculator.subtractTwoNumbers(-2,2)).toBe(-4);
    expect(calculator.subtractTwoNumbers(111,111)).toBe(0);
    expect(calculator.subtractTwoNumbers(-111,-111)).toBe(0);
});

test('Check the multiplication of two numbers', () => {
    expect(calculator.multiplyTwoNumbers(2,1)).toBe(2);
    expect(calculator.multiplyTwoNumbers(0,0)).toBe(0);
    expect(calculator.multiplyTwoNumbers(1,0)).toBe(0);
    expect(calculator.multiplyTwoNumbers(-1,0)).toBe(-0);
    expect(calculator.multiplyTwoNumbers(0,2)).toBe(0);
    expect(calculator.multiplyTwoNumbers(11,-11)).toBe(-121);
    expect(calculator.multiplyTwoNumbers(-2,2)).toBe(-4);
    expect(calculator.multiplyTwoNumbers(11,11)).toBe(121);
    expect(calculator.multiplyTwoNumbers(-11,-11)).toBe(121);
});

test('Check the divide of num2 by num1', () => {
    expect(calculator.divideTwoNumbers(2,1)).toBe(2);
    expect(calculator.divideTwoNumbers(0,0)).toBe(NaN);
    expect(calculator.divideTwoNumbers(1,0)).toBe(Infinity);
    expect(calculator.divideTwoNumbers(0,-1)).toBe(-0);
    expect(calculator.divideTwoNumbers(0,2)).toBe(0);
    expect(calculator.divideTwoNumbers(11,-11)).toBe(-1);
    expect(calculator.divideTwoNumbers(-2,2)).toBe(-1);
    expect(calculator.divideTwoNumbers(11,11)).toBe(1);
    expect(calculator.divideTwoNumbers(-11,-11)).toBe(1);
});
