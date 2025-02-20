import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Loading...');
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Use environment variable if provided, otherwise use default path
    const apiUrl = process.env.REACT_APP_API_URL || '/api';
    fetch(`${apiUrl}/health`)
      .then(response => response.json())
      .then(data => setBackendStatus(data.status))
      .catch(error => setBackendStatus('Error connecting to backend'));
  }, []);

  // Add random sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%'
      };
      setSparkles(prev => [...prev.slice(-20), newSparkle]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="unicorn">🦄</div>
        <h1 className="blinking-text">✨ Welcome to RapidWeb! ✨</h1>
        <p style={{color: '#ff69b4'}}>Built with FastAPI + React on DigitalOcean App Platform</p>
        <p style={{color: '#ff1493'}}>Backend Status: {backendStatus}</p>
        <div className="unicorn">🦄</div>
      </header>
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.left,
            top: sparkle.top
          }}
        />
      ))}
    </div>
  );
}

export default App; 