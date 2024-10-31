"use client";

// components/CurrencyPairWidget.tsx
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import axios from 'axios';
import styles from '../styles/CurrencyPairWidget.module.css';

interface CurrencyPairProps {
  pair: string;  // E.g. 'USD/NGN', 'BTC/USD'
  logoUrl: string | StaticImageData; // URL of asset logo
  baseCurrency: string; // E.g. 'USD', 'BTC'
  quoteCurrency: string; // E.g. 'NGN', 'USD'
}

interface PriceData {
  price: number;
  change24h?: number;
}

const CurrencyPairWidget: React.FC<CurrencyPairProps> = ({ pair, logoUrl, baseCurrency, quoteCurrency }) => {
  const [priceData, setPriceData] = useState<PriceData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${baseCurrency}&tsyms=${quoteCurrency}`, {
            headers: {
              authorization: `Apikey ${process.env.CRYPTOCOMPARE_API_KEY}`
            }
          });
        const response24h = await axios.get(`https://min-api.cryptocompare.com/data/generateAvg?fsym=${baseCurrency}&tsym=${quoteCurrency}&e=CCCAGG`, {
            headers: {
              authorization: `Apikey ${process.env.CRYPTOCOMPARE_API_KEY}`
            }
          });

        const price = response.data[quoteCurrency];
        const change24h = response24h.data.DISPLAY ? response24h.data.DISPLAY.CHANGE24HOUR : undefined;

        setPriceData({
          price: price,
          change24h: change24h,
        });
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    };

    fetchData();
  }, [baseCurrency, quoteCurrency]);

  return (
    <section className={styles.widgetContainer}>
        <div className={styles.header}>
            <Image src={logoUrl} alt={`${pair} logo`} className={styles.logo} width={30} height={30} />
            <h2>{pair}</h2>
        </div>

        {priceData && (
            <div className={styles.priceSection}>
              <p className={styles.price}>{priceData.price}</p>
              <p className={styles.change24h}>{priceData.change24h !== undefined ? priceData.change24h : "N/A"}</p>
            </div>
        )}

        {/* TradingView Sparkline iframe */}
        <div className={styles.sparklineChart}>
            <iframe
            src={`https://s.tradingview.com/widgetembed/?symbol=${baseCurrency}${quoteCurrency}&interval=D&theme=light&style=2&hide_top_toolbar=true&hide_side_toolbar=true&hide_legend=true&withdateranges=false&hidevolume=true&autosize=true&studies=[]&show_popup_button=false&hideideas=true&saveimage=false&hide_crosshair=true&hide_symbol=true&locale=en&width=200&height=50`}
            style={{ width: 'max-content', height: '50px', border: 'none' }}
            title={`${pair} sparkline chart`}
            ></iframe>
        </div>
    </section>
  );
};

export default CurrencyPairWidget;
