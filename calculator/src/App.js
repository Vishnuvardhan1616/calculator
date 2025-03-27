import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  // Handle number and operator clicks
  const handleClick = (value) => {
    if (display === 'Error') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  // Clear display
  const clearDisplay = () => {
    setDisplay('');
  };

  // Calculate the result of the expression
  const calculate = () => {
    try {
      // Using eval for simplicity; consider using a safer alternative for production
      // eslint-disable-next-line no-eval
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display || '0'}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={clearDisplay} className="clear">
          C
        </button>
      </div>
    </div>
  );
}

export default App;
