import React, { useState, useEffect } from 'react';
import './QueCom.css';
import ButtonsQueComp from './ButtonsQueComp';
import CurrentQueNodeComp from './CurrentQueNodeComp';
import NewQueNodeComp from './NewQueNodeComp';
import queue from '../scripts/Queue.js'

const subjectListFIFO = new queue.Queue ("FIFO");
const subjectListLIFO = new queue.Queue ("LIFO");
let totalAmountLIFO = 0;
let totalAmountFIFO = 0;
let messageArea = "";

function QueCom(props) {

  //
  // Using Larry's idea of "todo", again, for state since it is dictating most of
  // the screen change renders.
  //

  const [todo, setToDo] = useState("");
  
  //
  // Added "currentNode" into state since "todo" doesn't change for when
  // performing more than one next or previous in a row. Only need to set
  // "currentNode" state for these navigational calls. "todo" works for all
  // other renders.
  //
  const [currentLIFONode, setCurrentLIFONode] = useState();
  const [currentFIFONode, setCurrentFIFONode] = useState();

  const onSaveQueNode = (s, a) => {
    if (todo === "push") {
      subjectListFIFO.push(s, a);
      subjectListLIFO.push(s, a);
      messageArea = `Put In FIFO: ${s} LIFO: ${s}`;
    }
    // else if (todo === "pop") {
    //   subjectListFIFO.pop();
    //   subjectListLIFO.pop();
    // }
    setToDo('show');
  }
 
  const onClick = async (e) => {
    const todo = e.target.getAttribute('todo');
    
    console.log('onClick', todo);
    if (todo) {
      setToDo(todo);
      
      if (todo === 'firstFIFO') {
        subjectListFIFO.first();
      }
      else if (todo === 'firstLIFO') {
        subjectListLIFO.first();
      }  
      else if (todo === 'nextFIFO') {
        subjectListFIFO.next();
      }
      else if (todo === 'nextLIFO') {
        subjectListLIFO.next();
      } 
      else if (todo === 'prevFIFO') {
        subjectListFIFO.previous();
      }
      else if (todo === 'prevLIFO') {
        subjectListLIFO.previous();
      }
      else if (todo === 'lastFIFO') {
        subjectListFIFO.last();
      }
      else if (todo === 'lastLIFO') {
        subjectListLIFO.last();
      }
      else if (todo === "pop") {
        console.log("QueCom: Ready to Pop:")
        const popFIFOResult = subjectListFIFO.pop();
        const popLIFOResult = subjectListLIFO.pop();
        messageArea = `Take Out FIFO: ${popFIFOResult[1]} LIFO: ${popLIFOResult[1]}`;
        
      }
      else if (todo === 'total') {
        totalAmountLIFO = subjectListLIFO.total();
        totalAmountFIFO = subjectListFIFO.total();
      }
      if (subjectListLIFO.current !== null) setCurrentLIFONode(subjectListLIFO.current);
      if (subjectListFIFO.current !== null) setCurrentFIFONode(subjectListFIFO.current);
    }
  }

  let output = [];

  if (todo === "push") {
    output.push(<NewQueNodeComp key="push" onSave={onSaveQueNode} />);
  }
  else {
    if (subjectListFIFO.current !== subjectListFIFO.head &&
      subjectListLIFO.current !== subjectListLIFO.head) {
      // setCurrentNode(subjectList.current);
      output.push(<CurrentQueNodeComp 
        key="current" 
        subjectsLIFO={subjectListLIFO} 
        subjectsFIFO={subjectListFIFO} 
        ptotalAmountLIFO={totalAmountLIFO}
        ptotalAmountFIFO={totalAmountFIFO}
        pMessage={messageArea}
      />);
    }
    output.push(<ButtonsQueComp key="buttons" />);
  }

  return (
    <div>
      <div onClick={onClick} className="App clBox">
        <h1>{props.sMessageArea} for Queues - Competency 140D</h1>
          {output}
      </div>
    </div>
  );
}

export default QueCom;