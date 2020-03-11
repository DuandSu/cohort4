import c110DOM from './c110DOM'

test('Does series of display and add li Elements work?', () => {

    document.body.innerHTML =
	'<div id="div1">' +
		'<h1>Basic DOM</h1>' +
		'<p>This is a list of stuff</p>' +
		'<ol id="ol1">' +
  			'<li>Item 1</li>' +
  			'<li>Item 2</li>' +
  			'<li>Item 3</li>' +
		'</ol>' +
    	'<button type="button" id="showBtn">Show</button>' +
    	'<button type="button" id="addBtn">Add</button>' +
    	'<button type="button" id="addToStartBtn">Add to Start</button>' +
	'</div>';

    let liElement = document.querySelectorAll("li");
    expect(c110DOM.displayliElements(liElement)).toBe("[Item 1, Item 2, Item 3]");
    expect(c110DOM.addliElement("END")).toBe("Item 1Item 2Item 3Item 4");
    expect(c110DOM.addliElement("START")).toBe("Item 5Item 1Item 2Item 3Item 4");
    expect(c110DOM.addliElement("END")).toBe("Item 5Item 1Item 2Item 3Item 4Item 6");
    expect(c110DOM.addliElement("END")).toBe("Item 5Item 1Item 2Item 3Item 4Item 6Item 7");
    expect(c110DOM.addliElement("START")).toBe("Item 8Item 5Item 1Item 2Item 3Item 4Item 6Item 7");
    expect(c110DOM.addliElement("START")).toBe("Item 9Item 8Item 5Item 1Item 2Item 3Item 4Item 6Item 7");
    liElement = document.querySelectorAll("li");
    expect(c110DOM.displayliElements(liElement)).toBe("[Item 9, Item 8, Item 5, Item 1, Item 2, Item 3, Item 4, Item 6, Item 7]");
    liElement = document.body.firstElementChild.children[2].children[1];
    expect(c110DOM.removeTargetLIFromOL(liElement)).toBe(1);
    liElement = document.querySelectorAll("li");
    expect(c110DOM.displayliElements(liElement)).toBe("[Item 9, Item 5, Item 1, Item 2, Item 3, Item 4, Item 6, Item 7]");
    liElement = document.body.firstElementChild.children[2].children[0];
    expect(c110DOM.removeTargetLIFromOL(liElement)).toBe(1);
    liElement = document.querySelectorAll("li");
    expect(c110DOM.displayliElements(liElement)).toBe("[Item 5, Item 1, Item 2, Item 3, Item 4, Item 6, Item 7]");
    liElement = document.body.firstElementChild.children[2].children[6];
    expect(c110DOM.removeTargetLIFromOL(liElement)).toBe(1);
    liElement = document.querySelectorAll("li");
    expect(c110DOM.displayliElements(liElement)).toBe("[Item 5, Item 1, Item 2, Item 3, Item 4, Item 6]");

});

//test('Does next array work?', () => {

    //const liElement = document.querySelectorAll("li");
    //console.log(liElement);
    //expect(c110DOM.displayliElements(liElement)).toBe("[]");
    //tempArray = [0];
    //expect(c110DOM.displayArray(tempArray)).toBe("[0]");
    //tempArray = [0,1];
    //expect(c110DOM.displayArray(tempArray)).toBe("[0,1]");
    //tempArray = [0,1,99];
    //expect(c110DOM.displayArray(tempArray)).toBe("[0,1,99]");

//});