import queue from './Queue.js'

let consoleLog = [];
let consoleLine = 0;

test('140d: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('140d: Testing Queue Class Instantiation and Pointers', () => {

    const queFIFO = new queue.Queue("FIFO");

    expect(queFIFO.head.subject).toBe("FIFO");
    expect(queFIFO.head.amount).toBe(0);
    expect(queFIFO.tail.subject).toBe("FIFO");
    expect(queFIFO.current.subject).toBe("FIFO");

    const queLIFO = new queue.Queue("LIFO");

    expect(queLIFO.head.subject).toBe("LIFO");
    expect(queLIFO.head.amount).toBe(0);
    expect(queLIFO.tail.subject).toBe("LIFO");
    expect(queLIFO.current.subject).toBe("LIFO");    

    const queDefaultFIFO = new queue.Queue();

    expect(queDefaultFIFO.head.subject).toBe("FIFO");
    expect(queDefaultFIFO.head.amount).toBe(0);
    expect(queDefaultFIFO.tail.subject).toBe("FIFO");
    expect(queDefaultFIFO.current.subject).toBe("FIFO");

    const queBadParamFIFO = new queue.Queue("BADPARAM");

    expect(queBadParamFIFO.head.subject).toBe("FIFO");
    expect(queBadParamFIFO.head.amount).toBe(0);
    expect(queBadParamFIFO.tail.subject).toBe("FIFO");
    expect(queBadParamFIFO.current.subject).toBe("FIFO");

    expect(queFIFO.head.showNode()).toBe("Subject = FIFO; " +
        "Amount = 0; " + 
        "Previous = null; " +
        "Next = null");

});
//
// Note that the next 2 tests are almost the same using same methods, but since one 
// is testing FIFO and other testing LIFO, the order pushed into the queue be different
// even though pushed in same chronological order, as is the order that they "pop".
//
test('140d: Testing Queue Class FIFO push and pop', () => {

    const queFIFO = new queue.Queue("FIFO");
    let nextPopNode = [];
    let popResult = [];

    expect(queFIFO.push("Duane", 57)).toEqual(queFIFO.current);
    expect(queFIFO.tail.showNode()).toBe("Subject = Duane; " +
        "Amount = 57; " + 
        "Previous = FIFO; " +
        "Next = null");

    expect(queFIFO.push("Suzanne", 25)).toEqual(queFIFO.current);
    expect(queFIFO.tail.showNode()).toBe("Subject = Suzanne; " +
        "Amount = 25; " + 
        "Previous = Duane; " +
        "Next = null");    

    expect(queFIFO.push("Sasha", 17)).toEqual(queFIFO.current);
    expect(queFIFO.tail.showNode()).toBe("Subject = Sasha; " +
        "Amount = 17; " + 
        "Previous = Suzanne; " +
        "Next = null");

    nextPopNode[0] = queFIFO.head.nextPtr.subject;
    nextPopNode[1] = queFIFO.head.nextPtr.amount;
    expect(nextPopNode[0]).toBe("Duane");
    expect(nextPopNode[1]).toBe(57);
    
    popResult = queFIFO.pop();

    expect(popResult[1]).toBe(nextPopNode[0]);
    expect(popResult[2]).toBe(nextPopNode[1]);
    expect(queFIFO.first().showNode()).toBe("Subject = Suzanne; " +
        "Amount = 25; " + 
        "Previous = FIFO; " +
        "Next = Sasha");
    expect(popResult[0]).toEqual(queFIFO.current);

    nextPopNode[0] = queFIFO.head.nextPtr.subject;
    nextPopNode[1] = queFIFO.head.nextPtr.amount;
    expect(nextPopNode[0]).toBe("Suzanne");
    expect(nextPopNode[1]).toBe(25);
    
    popResult = queFIFO.pop();

    expect(popResult[1]).toBe(nextPopNode[0]);
    expect(popResult[2]).toBe(nextPopNode[1]);
    expect(queFIFO.first().showNode()).toBe("Subject = Sasha; " +
        "Amount = 17; " + 
        "Previous = FIFO; " +
        "Next = null");
    expect(popResult[0]).toEqual(queFIFO.current);

    nextPopNode[0] = queFIFO.current.subject;
    nextPopNode[1] = queFIFO.current.amount;
    expect(nextPopNode[0]).toBe("Sasha");
    expect(nextPopNode[1]).toBe(17);
    
    popResult = queFIFO.pop();

    expect(popResult[1]).toBe(nextPopNode[0]);
    expect(popResult[2]).toBe(nextPopNode[1]);
    expect(queFIFO.first().showNode()).toBe("Subject = FIFO; " +
        "Amount = 0; " + 
        "Previous = null; " +
        "Next = null");
    expect(popResult[0]).toEqual(queFIFO.head);
});

test('140d: Testing Queue Class LIFO push and pop', () => {

    const queLIFO = new queue.Queue("LIFO");
    let nextPopNode = [];
    let popResult = [];

    expect(queLIFO.push("Duane", 57)).toEqual(queLIFO.current);
    expect(queLIFO.tail.showNode()).toBe("Subject = Duane; " +
        "Amount = 57; " + 
        "Previous = LIFO; " +
        "Next = null");

    expect(queLIFO.push("Suzanne", 25)).toEqual(queLIFO.current);
    expect(queLIFO.tail.showNode()).toBe("Subject = Suzanne; " +
        "Amount = 25; " + 
        "Previous = Duane; " +
        "Next = null");    

    expect(queLIFO.push("Sasha", 17)).toEqual(queLIFO.current);
    expect(queLIFO.tail.showNode()).toBe("Subject = Sasha; " +
        "Amount = 17; " + 
        "Previous = Suzanne; " +
        "Next = null");

    nextPopNode[0] = queLIFO.tail.subject;
    nextPopNode[1] = queLIFO.tail.amount;
    expect(nextPopNode[0]).toBe("Sasha");
    expect(nextPopNode[1]).toBe(17);

    queLIFO.first();
    popResult = queLIFO.pop();

    expect(popResult[1]).toBe(nextPopNode[0]);
    expect(popResult[2]).toBe(nextPopNode[1]);
    expect(queLIFO.tail.showNode()).toBe("Subject = Suzanne; " +
        "Amount = 25; " + 
        "Previous = Duane; " +
        "Next = null");

    nextPopNode[0] = queLIFO.current.subject;
    nextPopNode[1] = queLIFO.current.amount;
    expect(nextPopNode[0]).toBe("Suzanne");
    expect(nextPopNode[1]).toBe(25);

    queLIFO.first();
    popResult = queLIFO.pop();

    expect(popResult[1]).toBe(nextPopNode[0]);
    expect(popResult[2]).toBe(nextPopNode[1]);
    expect(queLIFO.tail.showNode()).toBe("Subject = Duane; " +
        "Amount = 57; " + 
        "Previous = LIFO; " +
        "Next = null");
    
    nextPopNode[0] = queLIFO.current.subject;
    nextPopNode[1] = queLIFO.current.amount;
    expect(nextPopNode[0]).toBe("Duane");
    expect(nextPopNode[1]).toBe(57);

    queLIFO.first();
    popResult = queLIFO.pop();

    expect(popResult[1]).toBe(nextPopNode[0]);
    expect(popResult[2]).toBe(nextPopNode[1]);
    expect(queLIFO.tail.showNode()).toBe("Subject = LIFO; " +
        "Amount = 0; " + 
        "Previous = null; " +
        "Next = null");
});