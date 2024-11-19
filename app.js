import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div style={{ textAlign: 'center', alignItems:'center', padding: '20px' }}>
      <h1>Halo nama ku, Anonymous</h1>
      <p>Umur ku, {count} tahun</p>
      <p>{count}</p>

      <button onClick={handleIncrement} style={buttonStyle}>INCREMENT</button>
      <button onClick={handleDecrement} style={buttonStyle}>DECREMENT</button>
      <button onClick={handlePassValue} style={buttonStyle}>PASS VALUE</button>

      <br />
    </div>
  );
}

const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',

};

const inputStyle = {
  marginTop: '10px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

export default App;
