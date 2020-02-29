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

test('Does Negative Number check work?', () => {
    expect(syntax.isNumNegative(0)).toBe(false);
    expect(syntax.isNumNegative(2)).toBe(false);
    expect(syntax.isNumNegative(-2)).toBe(true);
});

test('Does Create Simple Array work?', () => {
    expect(syntax.createSimpleArray(1)).toStrictEqual([0]);
    expect(syntax.createSimpleArray(2)).toStrictEqual([0,1]);
    expect(syntax.createSimpleArray(5)).toStrictEqual([0,1,2,3,4]);
});

test('Does Add to Front Of Array work?', () => {
    expect(syntax.addToFrontOfArray(syntax.createSimpleArray(1),99)).toStrictEqual([99,0]);
    expect(syntax.addToFrontOfArray(syntax.createSimpleArray(2),99)).toStrictEqual([99,0,1]);
    expect(syntax.addToFrontOfArray(syntax.createSimpleArray(5),99)).toStrictEqual([99,0,1,2,3,4]);
});

test('Does Add to End Of Array work?', () => {
    expect(syntax.addToEndOfArray(syntax.createSimpleArray(1),99)).toStrictEqual([0,99]);
    expect(syntax.addToEndOfArray(syntax.createSimpleArray(2),99)).toStrictEqual([0,1,99]);
    expect(syntax.addToEndOfArray(syntax.createSimpleArray(5),99)).toStrictEqual([0,1,2,3,4,99]);
});

test('Does For Each work for Fruits?', () => {
    expect(syntax.addFruitPrefixSuffix(0,"apple")).toBe("0-apple fruit");
    expect(syntax.addFruitPrefixSuffix(1,"orange")).toBe("1-orange fruit");
    expect(syntax.addFruitPrefixSuffix(2,"cherry")).toBe("2-cherry fruit");
});