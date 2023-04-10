import React from 'react'
import { Store } from './Context';
import { useState, useEffect, useContext } from 'react';
import './SideButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'



function SideButtons() {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4, Button5, setButton5 } = useContext(Store)

  return (
    <div className='buttonsContainer'>
      <div className='buttonContainer'>
        <button
          className={Button1 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton1(!Button1)}
        >
          <button
            className='slider'
            onClick={() => setButton1(!Button1)}
            style={Button1 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} size="xs" color="black" style={{ height: "25px", marginLeft: "20px" }} />
        <div className='description'>Bimatoprost .03% topical (n=75)</div>
      </div>
      <div className='buttonContainer'>
        <button
          className={Button2 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton2(!Button2)}
        >
          <button
            className='slider'
            onClick={() => setButton2(!Button2)}
            style={Button2 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} style={{  height: "25px", marginLeft: "20px" }} color="blue" />
        <div className='description'>{`Bimatoprost implant 6`} &#xb5;{`g (n=18)`}</div>
      </div>
      <div className='buttonContainer'>
        <button
          className={Button3 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton3(!Button3)}
        >
          <button
            className='slider'
            onClick={() => setButton3(!Button3)}
            style={Button3 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} size="xs" color="green" style={{ height: "25px", marginLeft: "20px" }} />
        <div className='description'>{`Bimatoprost SR 15`} &#xb5;{`g (n=21)`}</div>
      </div>
      <div className='buttonContainer'>
        <button
          className={Button4 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton4(!Button4)}
        >
          <button
            className='slider'
            onClick={() => setButton4(!Button4)}
            style={Button4 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} size="xs" color="purple" style={{ height: "25px", marginLeft: "20px" }} />
        <div className='description'>{`Bimatoprost SR 15`} &#xb5;{`g (n=21)`}</div>
      </div>
      <div className='buttonContainer'>
        <button
          className={Button5 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton5(!Button5)}
        >
          <button
            className='slider'
            onClick={() => setButton5(!Button5)}
            style={Button5 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} size="xs" color="orange" style={{ height: "25px", marginLeft: "20px" }} />
        <div className='description'>{`Bimatoprost SR 15`} &#xb5;{`g (n=15)`}</div>
      </div>
      
      
    </div>
  )
}

export default SideButtons