import React, { useEffect, useState, useRef } from 'react';

function TestPage() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  // Returns null
  console.log('1. canvasRef', canvasRef);
  console.log('6. contextRef', contextRef);

  useEffect(() => {
    // returns <context>
    const canvas = canvasRef.current;
    console.log('2. canvas', canvas);
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // set canvas to visible colour
    canvas.style.backgroundColor = '#bee0ec';

    console.log('3. canvas.width', canvas.width);
    console.log('4. canvas.style', canvas.style);

    const context = canvas.getContext('2d');
    console.log('5. context', context);

    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
    console.log('7. contextRef', contextRef);
    console.log('8. contextRef.current', contextRef.current);
    
  }, []);

  const createMarker = ({ nativeEvent }) => {
    console.log('nativeEvent', nativeEvent);
    contextRef.current.beginPath();
    contextRef.current.arc(50, 50, 1, 0, 2 * Math.PI, true);
    contextRef.current.stroke();
  }

  return <canvas ref={canvasRef} onMouseUp={createMarker} />;
}

export default TestPage;
