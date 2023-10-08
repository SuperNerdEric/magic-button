import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [color, setColor] = useState<string>('#fff');

  const changeColor = (): void => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };

  return (
      <div className="App" style={{ backgroundColor: color }}>
        <header className="App-header">
            <p className="outlined-text">Press the magic button to make everything okay!</p>
          <button onClick={changeColor}>
            Magic Button
          </button>
        </header>
      </div>
  );
}

export default App;
