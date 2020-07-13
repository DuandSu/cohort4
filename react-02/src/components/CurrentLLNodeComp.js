import React from 'react';

function CurrentLLNodeComp(props) {

    const subjectsLL = props.subjects;

    return (
        <div>
            <h1>Current Subject Node: </h1>
            <div className="clPanel-2">
                <div className="clItem-1">Subject:</div>
                <div className="clItem-2">{subjectsLL.current === subjectsLL.head 
                    ? "Empty" : subjectsLL.current.subject}
                </div>

                <div className="clItem-1">Amount:</div>
                <div className="clItem-2">{subjectsLL.current.amount}</div>
            </div>
            <br/>
            <button className="clButton" todo="first"> {`[<==`}  
                {subjectsLL.head.nextPtr === null ? null : subjectsLL.head.nextPtr.subject}
            </button>
            <button className="clButton" todo="prev"> {`<==`}  
                {(subjectsLL.current === subjectsLL.head || subjectsLL.current.prevPtr === subjectsLL.head) 
                    ? null : subjectsLL.current.prevPtr.subject}
            </button>
            <button className="clButton" todo="next"> 
                {subjectsLL.current.nextPtr === null ? null : subjectsLL.current.nextPtr.subject} {`==>`}
            </button>
            <button className="clButton" todo="last"> 
                {(subjectsLL.tail === null || subjectsLL.tail === subjectsLL.head) 
                    ? null : subjectsLL.tail.subject} {`==>]`} 
            </button>
            <br></br>
            <button className="clButton" todo="total">Total</button>
            <h1>Click Total Button to Update: {props.ptotalAmount}</h1>
        </div>
    )
}

export default CurrentLLNodeComp;