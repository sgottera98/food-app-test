import React from 'react';

import Smartphones from '../../../assets/images/Smartphones.png';


const FirstSection = () => {
    return (
        
        <div className="container">
            <div className="first-section">
                <div className="smartphones-first-section">
                    <img src={Smartphones} alt="Smartphone reproduzindo aplicativo Bella Olonje" />
                </div>
            </div>
        </div>
        
    )
}

export default FirstSection