import React, { useState, useEffect } from 'react';
import './BackgroundChanger.css'; // Import a separate CSS file for styling

export default function BackgroundChanger() {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="background-changer-container">
      <div className="color-buttons">
        <button className="color-button blue" onClick={() => changeColor('blue')}>
          Blue
        </button>
        <button className="color-button green" onClick={() => changeColor('green')}>
          Green
        </button>
        <button className="color-button yellow" onClick={() => changeColor('yellow')}>
          Yellow
        </button>
        <button className="color-button emerald" onClick={() => changeColor('#2ecc71')}>
          Emerald
        </button>
      </div>
    </div>
  );
}
