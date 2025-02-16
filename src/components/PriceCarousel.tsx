"use client";

// components/PriceCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import PriceCard from './PriceCard';
import styles from '../styles/PriceCarousel.module.css';

interface Asset {
    symbol: string;
    baseCurrency: string;
    quoteCurrency: string;
}

// list of popular assets
const popularAssets: Asset[] = [
    { symbol: 'BTC/USD', baseCurrency: 'BTC', quoteCurrency: 'USD' },
    { symbol: 'ETH/USD', baseCurrency: 'ETH', quoteCurrency: 'USD' },
    { symbol: 'XRP/USD', baseCurrency: 'XRP', quoteCurrency: 'USD' },
    { symbol: 'EUR/USD', baseCurrency: 'EUR', quoteCurrency: 'USD' },
    { symbol: 'TON/USD', baseCurrency: 'TON', quoteCurrency: 'USD' },
    { symbol: 'BNB/USD', baseCurrency: 'BNB', quoteCurrency: 'USD' },
    // Add more assets as needed
];

const PriceCarousel: React.FC = () => {
    // Slider settings for continuous smooth motion
    const settings = {
        dots: true,
        infinite: true,
        speed: 7000,       // Duration (ms) for one complete slide animation
        slidesToShow: 3,   // Number of slides visible at once (adjust as needed)
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,  // Set to 0 for continuous scrolling
        cssEase: 'linear', // Creates a continuous motion effect
        pauseOnHover: true,
    };

    return (
        <div className="uniform-margin">
            <div className={styles.carouselContainer}>
                <Slider {...settings}>
                    {popularAssets.map((asset, index) => (
                        <div key={index} className={styles.slide}>
                            <PriceCard
                                symbol={asset.symbol}
                                baseCurrency={asset.baseCurrency}
                                quoteCurrency={asset.quoteCurrency}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PriceCarousel;
