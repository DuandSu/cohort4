import ArraysDictionaries from './arraysdictionaries'

test('Does Add to Array work?', () => {

    let tempArray = [];
    expect(ArraysDictionaries.addToArray(tempArray,0)).toStrictEqual([0]);
    tempArray = [0];
    expect(ArraysDictionaries.addToArray(tempArray,1)).toStrictEqual([0,1]);
    tempArray = [0,1];
    expect(ArraysDictionaries.addToArray(tempArray,2)).toStrictEqual([0,1,2]);

});

test('Does Display Array work?', () => {

    let tempArray = [];
    expect(ArraysDictionaries.displayArray(tempArray)).toBe("[]");
    tempArray = [0];
    expect(ArraysDictionaries.displayArray(tempArray)).toBe("[0]");
    tempArray = [0,1];
    expect(ArraysDictionaries.displayArray(tempArray)).toBe("[0,1]");
    tempArray = [0,1,99];
    expect(ArraysDictionaries.displayArray(tempArray)).toBe("[0,1,99]");

});

test('Does Total Array work?', () => {

    let tempArray = [];
    expect(ArraysDictionaries.totalArray(tempArray)).toBe(0);
    tempArray = [0];
    expect(ArraysDictionaries.totalArray(tempArray)).toBe(0);
    tempArray = [0,1];
    expect(ArraysDictionaries.totalArray(tempArray)).toBe(1);
    tempArray = [0,1,99];
    expect(ArraysDictionaries.totalArray(tempArray)).toBe(100);
    tempArray = [-1];
    expect(ArraysDictionaries.totalArray(tempArray)).toBe(-1);
    tempArray = [0,-1];
    expect(ArraysDictionaries.totalArray(tempArray)).toBe(-1);
    tempArray = [0,1,-99];
    expect(ArraysDictionaries.totalArray(tempArray)).toBe(-98);

});

test('Does Clear Array work?', () => {

    let tempArray = [];
    expect(ArraysDictionaries.clearArray(tempArray)).toStrictEqual([]);
    tempArray = [1];
    expect(ArraysDictionaries.clearArray(tempArray)).toStrictEqual([]);
    tempArray = [1,99];
    expect(ArraysDictionaries.clearArray(tempArray)).toStrictEqual([]);

});

test('Does Lookup Province Description work?', () => {

    expect(ArraysDictionaries.lookupProvDesc("AB")).toBe("Alberta");
    expect(ArraysDictionaries.lookupProvDesc("BC")).toBe("British Columbia");
    expect(ArraysDictionaries.lookupProvDesc("MB")).toBe("Manitoba");
    expect(ArraysDictionaries.lookupProvDesc("NB")).toBe("New Brunswick");
    expect(ArraysDictionaries.lookupProvDesc("NL")).toBe("Newfoundland/Labrador");
    expect(ArraysDictionaries.lookupProvDesc("NS")).toBe("Nova Scotia");
    expect(ArraysDictionaries.lookupProvDesc("NT")).toBe("North West Territories");
    expect(ArraysDictionaries.lookupProvDesc("NU")).toBe("Nunavit");
    expect(ArraysDictionaries.lookupProvDesc("ON")).toBe("Ontario");
    expect(ArraysDictionaries.lookupProvDesc("PE")).toBe("Prince Edward Island");
    expect(ArraysDictionaries.lookupProvDesc("QC")).toBe("Quebec");
    expect(ArraysDictionaries.lookupProvDesc("SK")).toBe("Saskatchewan");
    expect(ArraysDictionaries.lookupProvDesc("YT")).toBe("Yukon");
    expect(ArraysDictionaries.lookupProvDesc(" AB ")).toBe("Alberta");
    expect(ArraysDictionaries.lookupProvDesc(" AB")).toBe("Alberta");
    expect(ArraysDictionaries.lookupProvDesc("AB ")).toBe("Alberta");
    expect(ArraysDictionaries.lookupProvDesc("ab")).toBe("Alberta");
    expect(ArraysDictionaries.lookupProvDesc("aB")).toBe("Alberta");
    expect(ArraysDictionaries.lookupProvDesc("Ab")).toBe("Alberta");

});