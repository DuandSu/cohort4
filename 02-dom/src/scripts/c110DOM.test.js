import c110DOM from './c110DOM'

test('Does Display li Element array work?', () => {

    const liElement = document.querySelectorAll("li");
    console.log(liElement);
    expect(c110DOM.displayliElements(liElement)).toBe("[]");
    //tempArray = [0];
    //expect(c110DOM.displayArray(tempArray)).toBe("[0]");
    //tempArray = [0,1];
    //expect(c110DOM.displayArray(tempArray)).toBe("[0,1]");
    //tempArray = [0,1,99];
    //expect(c110DOM.displayArray(tempArray)).toBe("[0,1,99]");

});