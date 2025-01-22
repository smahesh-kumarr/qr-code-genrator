import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [img, setImg] = useState("https://api.qrserver.com/v1/create-qr-code/?data=Hello&size=150x150");
  const [load, setLoad] = useState(false);
  const [qrData, setQrData] = useState("");
  const [size, setSize] = useState(150);

  function handleQrGeneration() {
    try {
      setLoad(true);
      const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=${size}x${size}`;
      setImg(url);
    } catch (error) {
      console.log("Error in generating the QR Code:", error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <div className="container">
      <div className="qr-container">
        <h1>QR CODE GENERATOR</h1>
        <div className="qr-image-container">
          {load ? (
            <p className="loading-text">Please Wait...</p>
          ) : (
            <img src={img} alt="QR Code" className="qr-image" />
          )}
        </div>

        <div className="input-group">
          <label className="input-label">
            Data For QR Code
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter data for QR Code"
            onChange={(e) => setQrData(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            Image Size (px)
          </label>
          <input
            type="number"
            className="input-field"
            placeholder="Enter Image Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>

        <button className="generate-btn" onClick={handleQrGeneration}>
          Generate QR Code
        </button>
      </div>
    </div>
  );
};

export default App;
