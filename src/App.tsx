import React from 'react';
import MainBlock from './components/MainBlock';
import './styles/App.css'
import Navbar from './components/UI/Navbar/Navbar';
import HowBlock from './components/HowBlock';

function App() {
  return (
    <>
      <Navbar/>
      <MainBlock/>
      <HowBlock/>
    </>
  );
}

export default App;
