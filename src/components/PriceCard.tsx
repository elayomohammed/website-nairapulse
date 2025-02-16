"use client";

// components/PriceCard.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/PriceCard.module.css';

interface PriceCardProps {
    symbol: string;       // e.g., "BTC/USD"
    baseCurrency: string; // e.g., "BTC"
    quoteCurrency: string; // e.g., "USD"
}

const PriceCard: React.FC<PriceCardProps> = ({ symbol, baseCurrency, quoteCurrency }) => {
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await axios.get(
                    `https://min-api.cryptocompare.com/data/price?fsym=${baseCurrency}&tsyms=${quoteCurrency}`
                );
                setPrice(response.data[quoteCurrency]);
            } catch (error) {
                console.error('Error fetching price data:', error);
            }
        };
        fetchPrice();
    }, [baseCurrency, quoteCurrency]);

    return (
        <div className={styles.priceCard}>
            <div className={styles.symbol}>{symbol}</div>
            <div className={styles.price}>
                {price !== null ? price : 'Loading...'}
            </div>
        </div>
    );
};

export default PriceCard;
