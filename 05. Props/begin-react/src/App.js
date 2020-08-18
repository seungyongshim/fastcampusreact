import React from 'react';
import logo from './logo.svg';
import Hello from './Hello'
import './App.css';

function App() {
  return (
    <>
      <Hello name="react" color='red'/>
      <Hello name="react" color='blue'/>
      <Hello color='blue'/>
      
    </>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}
export default App;
