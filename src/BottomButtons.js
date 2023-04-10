import React from 'react'
import { Store } from './Context';
import { useState, useEffect, useContext } from 'react';
import './BottomButtons.css'

function BottomButtons() {
    const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4 } = useContext(Store)

    function handleW4W6(){
        setButton1(true)
        setButton2(false)
        setButton3(false)
        return
    }

    function handleW4M12(){
        setButton1(false)
        setButton2(true)
        setButton3(false)
        return
    }


    function handleAllDataButton(){
        setButton1(false)
        setButton2(false)
        setButton3(true)
        return
    }


    useEffect(()=>{
    },[Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4])

    return (
        <div className='buttonsContainer'>
            <div className='buttonContainer'>
                <button onClick={() => handleW4W6()}
                className={Button1 ?  'buttonOff' : 'buttonOn' }
                >
                    WEEK 4 - MONTH 6
                </button>
            </div>
            <div className='buttonContainer'>
                <button onClick={() => handleW4M12()}
                className={Button2 ?  'buttonOff' : 'buttonOn' }
                >
                    WEEK 4 - MONTH 12
                </button>
            </div>
            <div className='buttonContainer'>
                <button onClick={() =>handleAllDataButton()}
                className={Button3 ?  'buttonOff' : 'buttonOn' }
                >
                    ALL DATA
                </button>
            </div>
            <div className='buttonContainer'>
                <button onClick={() => setButton4(!Button4)}
                className={Button4 ?  'buttonOff' : 'buttonOn' }
                >
                    SHOW DATA
                </button>
            </div>
        </div>
    )
}

export default BottomButtons