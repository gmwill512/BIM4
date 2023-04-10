
import './App.css';
import { useContext } from 'react';
import { Store } from './Context';
import { useState,useEffect } from 'react';
import SideButtons from './SideButton';
import ErrorBarChart from './ErrorBarChart';




function App() {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3 } = useContext(Store)

  useEffect(()=>{

  },[Button1, setButton1, Button2, setButton2, Button3, setButton3])
  return (
    <div className="App">
      <div className='topTitleContainer'>
        <h2>Percentage of Study Eyes Not Rescued or Re-Treated</h2>
        <h2>After a Single Administration of the Bimatoprost Implant</h2>
      </div>
      <div className='dataContainer'>
        <ErrorBarChart/>
         <SideButtons/> 
      </div>
    </div>
  );
}

export default App;


