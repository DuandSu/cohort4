import React from 'react';

function CurrentQueNodeComp(props) {

    const subjectsLIFO = props.subjectsLIFO;
    const subjectsFIFO = props.subjectsFIFO;

    return (
        <div>
            <div>
                <h1>Current FIFO Subject Node: </h1>
                <div className="clPanel-2">
                    <div className="clItem-1">Subject:</div>
                    <div className="clItem-2">{subjectsFIFO.current === subjectsFIFO.head 
                        ? "Empty" : subjectsFIFO.current.subject}
                    </div>

                    <div className="clItem-1">Amount:</div>
                    <div className="clItem-2">{subjectsFIFO.current.amount}</div>
                </div>
                <br/>
                <button className="clButton" todo="firstFIFO"> 
                    {`First In [`}  
                    {subjectsFIFO.head.nextPtr === null ? null : subjectsFIFO.head.nextPtr.subject}
                    {']'}
                </button>
                <button className="clButton" todo="prevFIFO"> {`<==`}  
                    {(subjectsFIFO.current === subjectsFIFO.head || subjectsFIFO.current.prevPtr === subjectsFIFO.head) 
                        ? null : subjectsFIFO.current.prevPtr.subject}
                </button>
                <button className="clButton" todo="nextFIFO"> 
                    {subjectsFIFO.current.nextPtr === null ? null : subjectsFIFO.current.nextPtr.subject} {`==>`}
                </button>
                <button className="clButton" todo="lastFIFO">
                    {`Last In [`} 
                    {(subjectsFIFO.tail === null || subjectsFIFO.tail === subjectsFIFO.head) 
                        ? null : subjectsFIFO.tail.subject}
                    {`]`}  
                </button>
            </div>
            <div>
                <h1>Current LIFO Subject Node: </h1>
                <div className="clPanel-2">
                    <div className="clItem-1">Subject:</div>
                    <div className="clItem-2">{subjectsLIFO.current === subjectsLIFO.head 
                        ? "Empty" : subjectsLIFO.current.subject}
                    </div>

                    <div className="clItem-1">Amount:</div>
                    <div className="clItem-2">{subjectsLIFO.current.amount}</div>
                </div>
                <br/>
                <button className="clButton" todo="firstLIFO">
                    {`First In [`}  
                    {subjectsLIFO.head.nextPtr === null ? null : subjectsLIFO.head.nextPtr.subject}
                    {']'}
                </button>
                <button className="clButton" todo="prevLIFO"> {`<==`}  
                    {(subjectsLIFO.current === subjectsLIFO.head || subjectsLIFO.current.prevPtr === subjectsLIFO.head) 
                        ? null : subjectsLIFO.current.prevPtr.subject}
                </button>
                <button className="clButton" todo="nextLIFO"> 
                    {subjectsLIFO.current.nextPtr === null ? null : subjectsLIFO.current.nextPtr.subject} {`==>`}
                </button>
                <button className="clButton" todo="lastLIFO"> 
                    {`Last In [`} 
                    {(subjectsLIFO.tail === null || subjectsLIFO.tail === subjectsLIFO.head) 
                        ? null : subjectsLIFO.tail.subject}
                    {']'}                        
                </button>
            </div>
            <div>
                <p id="messageArea">{props.pMessage}</p>
                <h1>Click Total Button to Update. FIFO Total: {props.ptotalAmountFIFO}. LIFO Total: {props.ptotalAmountLIFO}</h1>
                <button className="clButton" todo="total">Total</button>
            </div>
        </div>
    )
}

export default CurrentQueNodeComp;