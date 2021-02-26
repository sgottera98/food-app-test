import React from 'react';


// import FirstSmartphone from '../../../assets/images/smartphone-background-orange.svg';
import FirstSmartphone from '../../../assets/images/smartphone-background-orange.png';
import SecondSmartphone from '../../../assets/images/smartphone-background-white.png';

const FirstSection = () => {
    return (
        <section >
            <div className="first-section">
                {/* <div className="smartphones-first-section">
                    <img className="first-smartphone" src={FirstSmartphone} alt="Smartphone reproduzindo aplicativo Bella Olonje" />
                    <img className="second-smartphone" src={SecondSmartphone} alt="Smartphone reproduzindo aplicativo Bella Olonje" />
                </div> */}
                <div className="title-first-section">
                    <h2>How the app works</h2>
                </div>
            </div>
        </section>
    )
}

export default FirstSection