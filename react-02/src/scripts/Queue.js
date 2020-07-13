import lList from './lList.js'

class Queue extends lList.LinkedList {

    constructor (queueType) {

        super();

        if (typeof queueType === 'undefined') 
            queueType = "FIFO";
        else if (queueType !== "FIFO" && queueType !== "LIFO")
            queueType = "FIFO";

        this.head.subject = queueType;
    }

    push (subject, amount) {

        this.last();
        return this.insertAfter(subject, amount);
    }

    pop () {
        let sub = "";
        let amt = 0;
        let cur;

        if (this.head.subject === "LIFO") {
            this.last();
            sub = this.current.subject;
            amt = this.current.amount;
            cur = this.delete();

            return [cur, sub, amt];
        }
        else {
            this.first();
            sub = this.current.subject;
            amt = this.current.amount;
            cur = this.delete();

            return [cur, sub, amt];
        }
    }
}

export default {Queue};