import React from 'react';
import PriceCarousel from './PriceCarousel';
import '../styles/hero.css';

const Hero: React.FC = () => {
    return (
        <section id="hero-section">
            <PriceCarousel />
            <p className="uniform-margin" id="hero-note">
                Your Go-To Platform for Accurate, Up-to-Date Exchange Rates, Historical Currency
                Trends, and Fast, Reliable Conversion Tools – All in One Place.
            </p>
            <h1>LIVE EXCHANEGE RATES</h1>
        </section>
    )
}

export default Hero;