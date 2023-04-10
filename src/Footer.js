import React from 'react'
import './Footer.css'

function Footers() {
    return (
        <div className='footerContainer'>
            <div className='footer'>
                <div>{`Phase 1/2, prospective, 24-month, dose-ranging, paired-eye controlled clinical trial.`}<sup>7</sup></div>  
                <div><sup>a</sup> {`Preplanned nalysis with data censored from the start of rescue or re-treatment.`}<sup>7</sup></div>
                <div>{`Bimatoprost implant is under investigation. The safety and efficacy of this product have not been established.`}</div> 
                <div>{'\n'}</div>
                <div>{" "}</div>
                <div style={{marginTop: '10px'}}>Refernces:</div>
                <div>7. Craven ER, et al. Drugs. 2020;80(2):167-179`</div>
                </div>
        </div>
    )
}

export default Footers