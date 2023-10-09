import React, {useState} from 'react';
import './App.css';

const getRandomDarkColor = (): string => {
    const r = Math.floor(Math.random() * 128);
    const g = Math.floor(Math.random() * 128);
    const b = Math.floor(Math.random() * 128);
    return `rgb(${r},${g},${b})`;
}

const App: React.FC = () => {
    const [color, setColor] = useState<string>(getRandomDarkColor());

    const pressButton = (): void => {
        const randomColor = getRandomDarkColor();
        setColor(randomColor);
        addSparkles(50);
    };

    const addSparkles = (count: number): void => {
        const container = document.querySelector(".App");
        for (let i = 0; i < count; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.top = Math.random() * 100 + 'vh';
            container?.appendChild(sparkle);
            setTimeout(() => {
                sparkle.remove();
            }, 1500);
        }
    };

    const cursorStyle = {cursor: `url(${process.env.PUBLIC_URL}/cursor.png), auto`};

    return (
        <div className="App" style={{...cursorStyle, backgroundColor: color}}>
            <header className="App-header">
                <p className="outlined-text">Press the magic button to make everything okay!</p>
                <button style={cursorStyle} onClick={pressButton}>
                    Magic Button
                </button>
            </header>
        </div>
    );
}

export default App;

