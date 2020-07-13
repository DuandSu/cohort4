import React, { useState, useEffect } from 'react';
import './Play.css';

function Play(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Click Count: ${count}`;
  });
  
  return (
    <div>
      <p className="clPlay">{props.sMessageArea}</p>
      <p className="clPlay">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Play;