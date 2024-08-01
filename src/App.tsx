import React from 'react';
import MainBlock from './components/MainBlock';
import './styles/App.css'
import Navbar from './components/UI/Navbar/Navbar';
import HowBlock from './components/HowBlock';
import ThirdBlock from './components/ThirdBlock';
import CommnetsBlock from './components/CommetsBlock';

function App() {
  return (
    <>
      <Navbar/>
      <MainBlock/>
      <HowBlock/>
      <ThirdBlock/>
      <CommnetsBlock/>
    </>
  );
}

export default App;
