import React from 'react';
import './App.module.scss';
import {TopLine} from './components/topLine/TopLine';
import {TopSection} from "./components/topSection/TopSection";

function App() {
  return (
    <div className="App">
      <TopLine />
      <TopSection/>
    </div>
  );
}

export default App;
