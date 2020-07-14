import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

import './LinkedList.css';
import ButtonsLLComp from './ButtonsLLComp';
import CurrentLLNodeComp from './CurrentLLNodeComp';
import NewLLNodeComp from './NewLLNodeComp';
import lList from '../scripts/lList.js'

const subjectList = new lList.LinkedList ();
let totalAmount = 0;

function LinkedList(props) {

  //
  // Using Larry's idea of "todo" for state since it is dictating most of
  // the screen change renders.
  //

  const [todo, setToDo] = useState("");
  
  //
  // Added "currentNode" into state since "todo" doesn't change for when
  // performing more than one next or previous in a row. Only need to set
  // "currentNode" state for these navigational calls. "todo" works for all
  // other renders.
  //
  const [currentNode, setCurrentNode] = useState();

  const onSaveLLNodeBef = (s, a) => {
    subjectList.insertBefore(s, a);
    setToDo('show');
  }

  const onSaveLLNodeAft = (s, a) => {
    subjectList.insertAfter(s, a);
    setToDo('show');
  }
  
  const onClick = async (e) => {
    const todo = e.target.getAttribute('todo');
    
    console.log('onClick', todo);
    if (todo) {
      setToDo(todo);
      
      if (todo === 'first') {
        subjectList.first();
      } 
      else if (todo === 'next') {
        subjectList.next();
      } 
      else if (todo === 'prev') {
        subjectList.previous();
      }
      else if (todo === 'last') {
        subjectList.last();
      }
      else if (todo === 'total') {
        let tempTotal = subjectList.total();
        totalAmount = tempTotal;
      }
      if (subjectList.current !== null) setCurrentNode(subjectList.current);
    }
  }

  let output = [];

  if (todo === "newbefore") {
    output.push(<NewLLNodeComp key="newbefore" onSave={onSaveLLNodeBef} />);
  }
  else if (todo === "newafter") {
    output.push(<NewLLNodeComp key="newafter" onSave={onSaveLLNodeAft} />);
  }
  else {
    if (subjectList.current !== subjectList.head) {
      output.push(<CurrentLLNodeComp 
        key="current" 
        subjects={subjectList} 
        ptotalAmount={totalAmount}
      />);
    }
    output.push(<ButtonsLLComp key="buttons" />);
  }

  return (
    <div>
      <div onClick={onClick} className="App clBox">
        <h1 style={{color: `${React.useContext(ThemeContext)}`}}>{props.sMessageArea} for Linked List - Competency 140D</h1>
          {output}
      </div>
    </div>
  );
}

export default LinkedList;