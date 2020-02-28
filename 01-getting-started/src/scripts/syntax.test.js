import syntax from './syntax'

test('Does decimal position work?', () => {
    expect(syntax.decimalPosition(-1)).toBe("Ones");
    expect(syntax.decimalPosition(0)).toBe("Ones");
    expect(syntax.decimalPosition(1)).toBe("Ones");
    expect(syntax.decimalPosition(9)).toBe("Ones");
    expect(syntax.decimalPosition(-9)).toBe("Ones");
    expect(syntax.decimalPosition(-10)).toBe("Tens");
    expect(syntax.decimalPosition(10)).toBe("Tens");
    expect(syntax.decimalPosition(19)).toBe("Tens");
    expect(syntax.decimalPosition(-19)).toBe("Tens");
    expect(syntax.decimalPosition(100)).toBe("Greater than TENS");
    expect(syntax.decimalPosition(-100)).toBe("Greater than TENS");
});

test('Does the add function work?', () => {
    expect(syntax.add3(0,0,0)).toBe(0);
    expect(syntax.add3(0,2,0)).toBe(2);
    expect(syntax.add3(1,2,3)).toBe(6);
    expect(syntax.add3(101,202,303)).toBe(606);
    expect(syntax.add3(-1,2,-3)).toBe(-2);
    expect(syntax.add3(-3,-3,-3)).toBe(-9);
});

test('Does absolute value work?', () => {
    expect(syntax.absVal(0)).toBe(0);
    expect(syntax.absVal(2)).toBe(2);
    expect(syntax.absVal(-2)).toBe(2);
});