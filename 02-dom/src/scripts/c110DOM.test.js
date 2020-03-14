import c110DOM from './c110DOM'

test('Basic DOM: Does series of display and add li Elements work?', () => {

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

test('Working With Cards: Does series of show, add and delete cards work?', () => {

    document.body.innerHTML =
    
	'<div class="divLeftPanel">' +
    	'<button type="button" id="mainAddBtn">Add Card</button>' +
		'<button type="button" id="mainShowBtn">Show</button>' +
		'<div class="clCardLS">' +
			'<p>Card 1</p>' +
			'<button type="button" id="addBeforeBtn">Add Before</button>' +
			'<button type="button" id="addAfterBtn">Add After</button>' +
    		'<button type="button" id="deleteBtn">Delete</button>' +
		'</div>' +
		'<div class="clCardLS">' +
			'<p>Card 2</p>' +
			'<button type="button" id="addBeforeBtn">Add Before</button>' +
			'<button type="button" id="addAfterBtn">Add After</button>' +
    		'<button type="button" id="deleteBtn">Delete</button>' +
		'</div>' +
	'</div>' +
	'<div class="divRightPanel">' +
		'<h1>Right Side</h1>' +
		'<div class="divRightContent">' +
			'<div class="clCardRS">' +
				'<p>Card 1</p>' +
			'</div>' +
			'<div class="clCardRS">' +
				'<p>Card 2</p>' +
			'</div>' +
			'<div class="clCardRS">' +
				'<p>Card 1</p>' +
			'</div>' +
		'</div>' +
	'</div>'

    let leftCardsElement = document.getElementsByClassName("clCardLS");
    let rightCardsElement = document.getElementsByClassName("clCardRS");
    expect(c110DOM.displayAllCardElements(leftCardsElement, rightCardsElement)).toBe("[Card 1Add BeforeAdd AfterDelete, Card 2Add BeforeAdd AfterDelete],[Card 1, Card 2, Card 1]");
    //expect(c110DOM.addliElement("END")).toBe("Item 1Item 2Item 3Item 4");
    //expect(c110DOM.addliElement("START")).toBe("Item 5Item 1Item 2Item 3Item 4");
    //expect(c110DOM.addliElement("END")).toBe("Item 5Item 1Item 2Item 3Item 4Item 6");
    //expect(c110DOM.addliElement("END")).toBe("Item 5Item 1Item 2Item 3Item 4Item 6Item 7");
    //expect(c110DOM.addliElement("START")).toBe("Item 8Item 5Item 1Item 2Item 3Item 4Item 6Item 7");
    //expect(c110DOM.addliElement("START")).toBe("Item 9Item 8Item 5Item 1Item 2Item 3Item 4Item 6Item 7");
    //liElement = document.querySelectorAll("li");
    //expect(c110DOM.displayliElements(liElement)).toBe("[Item 9, Item 8, Item 5, Item 1, Item 2, Item 3, Item 4, Item 6, Item 7]");
    //liElement = document.body.firstElementChild.children[2].children[1];
    //expect(c110DOM.removeTargetLIFromOL(liElement)).toBe(1);
    //liElement = document.querySelectorAll("li");
    //expect(c110DOM.displayliElements(liElement)).toBe("[Item 9, Item 5, Item 1, Item 2, Item 3, Item 4, Item 6, Item 7]");
    //liElement = document.body.firstElementChild.children[2].children[0];
    //expect(c110DOM.removeTargetLIFromOL(liElement)).toBe(1);
    //liElement = document.querySelectorAll("li");
    //expect(c110DOM.displayliElements(liElement)).toBe("[Item 5, Item 1, Item 2, Item 3, Item 4, Item 6, Item 7]");
    //liElement = document.body.firstElementChild.children[2].children[6];
    //expect(c110DOM.removeTargetLIFromOL(liElement)).toBe(1);
    //liElement = document.querySelectorAll("li");
    //expect(c110DOM.displayliElements(liElement)).toBe("[Item 5, Item 1, Item 2, Item 3, Item 4, Item 6]");

});