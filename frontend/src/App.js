import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Loading...');

  useEffect(() => {
    fetch('/api/health')
      .then(response => response.json())
      .then(data => setBackendStatus(data.status))
      .catch(error => setBackendStatus('Error connecting to backend'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App!</h1>
        <p>This application is running on DigitalOcean App Platform</p>
        <p>Backend Status: {backendStatus}</p>
      </header>
    </div>
  );
}

export default App; 