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