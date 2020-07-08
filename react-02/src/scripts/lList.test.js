import lList from './lList.js'

let consoleLog = [];
let consoleLine = 0;

test('140d: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('140d: Testing Node Class Instantiation and Pointers', () => {

    const nullLNode = new lList.Node ("OneParameter");

    // console.log(nullLNode);

    expect(nullLNode.subject).toBe("OneParameter");
    expect(nullLNode.amount).toBe(0);
    expect(nullLNode.prevPtr).toBe(null);
    expect(nullLNode.nextPtr).toBe(null);

    expect(nullLNode.showNode()).toBe("Subject = OneParameter; " +
        "Amount = 0; " + 
        "Previous = null; " +
        "Next = null");
    
    const nameLNode1 = new lList.Node ("Duane", 57, null, null);

    // console.log(nameLNode1);

    expect(nameLNode1.subject).toBe("Duane");
    expect(nameLNode1.amount).toBe(57);
    expect(nameLNode1.prevPtr).toBe(null);
    expect(nameLNode1.nextPtr).toBe(null);
    
    expect(nameLNode1.showNode()).toBe("Subject = Duane; " +
        "Amount = 57; " + 
        "Previous = null; " +
        "Next = null");

    const nameLNode2 = new lList.Node ("Suzanne", 25, nameLNode1, null);
    
    // console.log(nameLNode2);
    
    expect(nameLNode2.subject).toBe("Suzanne");
    expect(nameLNode2.amount).toBe(25);

    expect(nameLNode2.prevPtr.subject).toBe("Duane");
    expect(nameLNode2.nextPtr).toBe(null);
    
    expect(nameLNode2.showNode()).toBe("Subject = Suzanne; " +
        "Amount = 25; " + 
        "Previous = Duane; " +
        "Next = null");

    nameLNode1.nextPtr = nameLNode2;
    
    // console.log(nameLNode1);

    expect(nameLNode1.nextPtr.subject).toBe("Suzanne");

    expect(nameLNode1.showNode()).toBe("Subject = Duane; " +
        "Amount = 57; " + 
        "Previous = null; " +
        "Next = Suzanne");

});

test('140d: Testing LinkedList Class Instantiation and Pointers', () => {

    const nameList = new lList.LinkedList ();

    expect(nameList.head.subject).toBe("llHead");
    expect(nameList.head.amount).toBe(0);
    expect(nameList.tail.subject).toBe("llHead");
    expect(nameList.current.subject).toBe("llHead");

    expect(nameList.head.showNode()).toBe("Subject = llHead; " +
        "Amount = 0; " + 
        "Previous = null; " +
        "Next = null");

});

test('140d: Testing LinkedList Class insertAfter ', () => {

    const nameList = new lList.LinkedList ();

    let currentNode;

    currentNode = nameList.insertAfter("Duane", "57");

    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Duane; " +
        "Amount = 57; " + 
        "Previous = llHead; " +
        "Next = null");

    expect(nameList.tail).toEqual(nameList.current);

    currentNode = nameList.insertAfter("Suzanne", "25");

    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Suzanne; " +
        "Amount = 25; " + 
        "Previous = Duane; " +
        "Next = null");

    expect(nameList.tail).toEqual(nameList.current);

    let chkTail = nameList.tail;
    nameList.current = nameList.current.prevPtr;
    
    expect(nameList.insertAfter("Sasha", "17").showNode()).toBe("Subject = Sasha; " +
        "Amount = 17; " + 
        "Previous = Duane; " +
        "Next = Suzanne");

    expect(nameList.tail).toEqual(chkTail);
});

test('140d: Testing LinkedList Class insertBefore ', () => {

    const nameList = new lList.LinkedList ();

    expect(nameList.head).toEqual(nameList.current);
    expect(nameList.tail).toEqual(nameList.current);

    let currentNode;

    currentNode = nameList.insertBefore("Duane", "57");

    expect(currentNode).toEqual(nameList.current);
    expect(nameList.head.showNode()).toBe("Subject = llHead; " +
        "Amount = 0; " + 
        "Previous = null; " +
        "Next = Duane");
    expect(nameList.current.showNode()).toBe("Subject = Duane; " +
        "Amount = 57; " + 
        "Previous = llHead; " +
        "Next = null");
    expect(nameList.head.nextPtr).toEqual(nameList.current);
    expect(nameList.tail).toEqual(nameList.current);

    currentNode = nameList.insertBefore("Suzanne", "25");
    expect(currentNode).toEqual(nameList.current);

    expect(nameList.head.showNode()).toBe("Subject = llHead; " +
    "Amount = 0; " + 
    "Previous = null; " +
    "Next = Suzanne");
    expect(nameList.current.showNode()).toBe("Subject = Suzanne; " +
        "Amount = 25; " + 
        "Previous = llHead; " +
        "Next = Duane");
    expect(nameList.current.nextPtr.showNode()).toBe("Subject = Duane; " +
        "Amount = 57; " + 
        "Previous = Suzanne; " +
        "Next = null");
 
    nameList.next();
    currentNode = nameList.insertBefore("Sasha", "17");

    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Sasha; " +
    "Amount = 17; " + 
    "Previous = Suzanne; " +
    "Next = Duane");

    nameList.last();
    currentNode = nameList.insertBefore("Christopher", "15");    

    //
    // Note can only insert after last node using insertAfter().
    //

    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Christopher; " +
    "Amount = 15; " + 
    "Previous = Sasha; " +
    "Next = Duane");
});

test('140d: Testing LinkedList Class first, last, next, previous and delete', () => {

    let currentNode;

    const nameList = new lList.LinkedList ();
    nameList.insertAfter("Duane", "57");
    nameList.insertAfter("Suzanne", "25");
    nameList.insertAfter("Sasha", "17");
    nameList.insertAfter("Christopher", "15");

    expect(nameList.current.showNode()).toBe("Subject = Christopher; " +
        "Amount = 15; " + 
        "Previous = Sasha; " +
        "Next = null");

    currentNode = nameList.first();

    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Duane; " +
    "Amount = 57; " + 
    "Previous = llHead; " +
    "Next = Suzanne");
    
    expect(nameList.last().showNode()).toBe("Subject = Christopher; " +
    "Amount = 15; " + 
    "Previous = Sasha; " +
    "Next = null");
    
    nameList.first();
    currentNode = nameList.next();
    
    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Suzanne; " +
        "Amount = 25; " + 
        "Previous = Duane; " +
        "Next = Sasha");

    nameList.next();

    expect(nameList.current.showNode()).toBe("Subject = Sasha; " +
        "Amount = 17; " + 
        "Previous = Suzanne; " +
        "Next = Christopher");

    expect(nameList.last()).toEqual(nameList.tail);

    expect(nameList.next()).toEqual(nameList.tail);
    expect(nameList.current.showNode()).toBe("Subject = Christopher; " +
        "Amount = 15; " + 
        "Previous = Sasha; " +
        "Next = null");

    currentNode = nameList.previous();

    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Sasha; " +
    "Amount = 17; " + 
    "Previous = Suzanne; " +
    "Next = Christopher");

    currentNode = nameList.previous();

    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Suzanne; " +
    "Amount = 25; " + 
    "Previous = Duane; " +
    "Next = Sasha");

    expect(nameList.first()).toEqual(nameList.head.nextPtr);
    
    expect(nameList.current.showNode()).toBe("Subject = Duane; " +
    "Amount = 57; " + 
    "Previous = llHead; " +
    "Next = Suzanne");

    nameList.next();

    currentNode = nameList.delete();

    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Duane; " +
    "Amount = 57; " + 
    "Previous = llHead; " +
    "Next = Sasha");    
    
    currentNode = nameList.delete();
    
    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Sasha; " +
    "Amount = 17; " + 
    "Previous = llHead; " +
    "Next = Christopher"); 
    
    nameList.next();
    
    currentNode = nameList.delete();
    
    expect(currentNode).toEqual(nameList.current);
    expect(nameList.current.showNode()).toBe("Subject = Sasha; " +
    "Amount = 17; " + 
    "Previous = llHead; " +
    "Next = null");
    
    expect(nameList.delete().showNode()).toBe("Subject = llHead; " +
    "Amount = 0; " + 
    "Previous = null; " +
    "Next = null"); 
});

test('140d: Testing LinkedList Class total', () => {

    const nameList = new lList.LinkedList ();
    nameList.insertAfter("Duane", "57");
    nameList.insertAfter("Suzanne", "25");
    nameList.insertAfter("Sasha", "17");
    nameList.insertAfter("Christopher", "15");

    expect(nameList.total()).toBe(114);

    nameList.last();
    nameList.insertAfter("Diesel", "3");

    expect(nameList.total()).toBe(117);
    
    nameList.first();
    nameList.insertAfter("Rose", "90");

    expect(nameList.total("START")).toBe(207);

    //
    // NOTE: Can only insert before first node with insertBefore().
    //

    expect(nameList.first().showNode()).toBe("Subject = Duane; " +
    "Amount = 57; " + 
    "Previous = llHead; " +
    "Next = Rose");

});