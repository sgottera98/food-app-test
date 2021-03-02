import React from 'react'

import Smartphone from '../../../assets/images/payment.png'

const FourthSection = () => {
    return (
        <section>
            <div className="container">
                <div className="section">
                    <div className="wrap-section-text-right">
                        <h3 className="section-subtitle">Checkout</h3>
                        <h2 className="section-title">When you done check out and get it delivered.</h2>
                        <h4 className="section-description">When you done check out and get it delivered with ease.</h4>
                    </div>
                    <div className="image-section-left">
                        <img src={Smartphone} alt="Smartphone com aplicação em tela"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FourthSection