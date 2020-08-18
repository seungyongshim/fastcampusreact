import React from 'react';
import logo from './logo.svg';
import Hello from './Hello'
import './App.css';

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
      {/* 어쩌고 */}
      <div style= {style} // 어쩔려고
      >{name}</div>
      <Hello/>
      <div className="gray-box">hello2</div>
    </>
  );
}

export default App;
