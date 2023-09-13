import React, { useState } from 'react';
import tudo from '../images/images.png';

const TudoApp = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const addItem = () => {
    if (inputData) {
      setItems([...items, inputData]);
      setInputData('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <figure>
        <img
          src={tudo}
          alt="Logo"
          width="100"
          height="100"
          style={{ marginBottom: '20px' }}
        />
        <figcaption style={{ textAlign: 'center', fontSize: '16px' }}>
          Add your list here ✌
        </figcaption>
      </figure>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <input
          type="text"
          placeholder=" ✍  Add an item"
          value={inputData}
          onChange={handleInputChange}
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: 'none',
            outline: 'none',
          }}
        />
        <button
          style={{
            backgroundColor: '#0073e6',
            color: '#ffffff',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            marginLeft: '10px',
            cursor: 'pointer',
          }}
          onClick={addItem}
        >
          +
        </button>
      </div>
      <br></br>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <input
            type="text"
            value={item}
            readOnly
            style={{
              flex: 1,
              padding: '10px',
              fontSize: '16px',
              border: 'none',
              outline: 'none',
            }}
          />
          <button
            style={{
              backgroundColor: 'red',
              color: '#ffffff',
              padding: '10px 20px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
            onClick={() => removeItem(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <div
        style={{
          marginTop: '20px',
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            backgroundColor: '#0073e6',
            color: '#ffffff',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={removeAll}
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default TudoApp;
