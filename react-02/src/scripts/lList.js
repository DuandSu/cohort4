//
// This is Linked List and Node classes for Competency 140D.
//
// Changes to consider before attempting presentation in React JS:
//
//  1. Make head simply a reference to null, rather than having a control headNode "llHead" node
//      as the head. headNode is not really necessary since have controller class. Though
//      NOT hurting anything. Presentation logic won't be affected. Probably OK to leave for now.
//

class LinkedList {

    constructor () {

        const headNode = new Node ("llHead");
        this.head = headNode;
        this.tail = headNode;
        this.current = headNode;

    }

    first() {

        this.current = this.head.nextPtr === null ? this.head : this.head.nextPtr;

        return this.current;

    }

    last() {

        this.current = this.tail;

        return this.current;
    }

    next() {

        this.current = this.current.nextPtr === null ? this.current : this.current.nextPtr;

        return this.current;
    }

    previous() {

        this.current = this.current.prevPtr === this.head ? this.current : this.current.prevPtr;

        return this.current;
    }

    insertAfter(subject, amount) {

        const newNode = new Node (subject, amount, this.current,
            this.current.nextPtr === null ? null : this.current.nextPtr);

        if (this.current.nextPtr !== null) this.current.nextPtr.prevPtr = newNode;
        this.current.nextPtr = newNode;

        this.current = newNode;

        if (this.current.nextPtr === null) this.tail = newNode;

        return this.current;

    }

    insertBefore(subject, amount) {

        const newNode = new Node (subject, amount, 
            this.current.prevPtr === null ? this.head : this.current.prevPtr,
            this.current === this.head ? null : this.current);

        if (this.current.prevPtr === null) {
            this.current.nextPtr = newNode;
        }
        else {
            this.current.prevPtr.nextPtr = newNode;
            this.current.prevPtr = newNode;
        }
        
        this.current = newNode;

        if (this.current.nextPtr === null) this.tail = newNode;

        return this.current;

    }

    delete() {

        const tempCurrent = this.current;
        if (this.current.nextPtr !== null) this.current.nextPtr.prevPtr = this.current.prevPtr;
        this.current.prevPtr.nextPtr = this.current.nextPtr;
        
        if (tempCurrent.nextPtr === null && tempCurrent.prevPtr === this.head) this.current = this.head;
        else if (tempCurrent.prevPtr === this.head) this.current = tempCurrent.nextPtr;
        else this.current = tempCurrent.prevPtr;

        if (this.current.nextPtr === null) this.tail = this.current;

        return this.current;
    }

    //
    // total all the amounts of all nodes. Receive the "START", which is the default, 
    // as a parameter to jump to first node. Cycle through remaining nodes recursively.
    //

    total(nodeFlg) {

        if (typeof nodeFlg === 'undefined') nodeFlg = "START";

        if (nodeFlg === "START") {
            this.first();
        }
        else {
            this.next();
        }

        let sumTotal = 0;
        if (this.current.nextPtr === null) 
            sumTotal = Number(this.current.amount);
        else
            sumTotal = Number(this.current.amount) + Number(this.total("NEXT"));

        return sumTotal;
    }
}

class Node {

    constructor (subject, amount, prevPtr, nextPtr) {

        this.subject = subject;
        this.amount = amount;
        this.prevPtr = prevPtr;
        this.nextPtr = nextPtr;

        if (typeof this.amount === 'undefined') this.amount = 0;
        if (typeof this.prevPtr === 'undefined') this.prevPtr = null;
        if (typeof this.nextPtr === 'undefined') this.nextPtr = null;

    }

    //
    // Simple "show" method for now. See how competency wants this used before getting fancy. Wish List:
    //

    showNode () {

        return `Subject = ${this.subject}; ` +
            `Amount = ${this.amount}; ` + 
            `Previous = ${this.prevPtr === null ? null : this.prevPtr.subject}; ` +
            `Next = ${this.nextPtr === null ? null : this.nextPtr.subject}`;

    }
}

export default {Node, LinkedList};