import c110DOM from './c110DOM'

test('Does Display li Element array work?', () => {

    let tempArray = [];
    expect(c110DOM.displayliElements(tempArray)).toBe("[]");
    //tempArray = [0];
    //expect(c110DOM.displayArray(tempArray)).toBe("[0]");
    //tempArray = [0,1];
    //expect(c110DOM.displayArray(tempArray)).toBe("[0,1]");
    //tempArray = [0,1,99];
    //expect(c110DOM.displayArray(tempArray)).toBe("[0,1,99]");

});