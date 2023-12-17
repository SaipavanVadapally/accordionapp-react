import React, { useState } from 'react';
const Question = (props) => {
    const { title, info } = props;
  
    // Step 1: Add a state variable for visibility
    const [visible, setVisible] = useState(false);
  
    // Step 2: Toggle visibility
    const toggleVisibility = () => {
      setVisible(!visible);
    };
  
    return (
      <article className="question">
        <header>
          <h4>{title}</h4>
          {/* Step 3: Toggle functionality onClick */}
          <button className="btn" onClick={toggleVisibility}>
            {visible ? '-' : '+'}
          </button>
        </header>
        {/* Step 4: Conditionally render based on visibility */}
        {visible && <p>{info}</p>}
      </article>
    );
  };
export default Question;
  