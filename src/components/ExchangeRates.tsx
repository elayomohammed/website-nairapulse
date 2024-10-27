import React from 'react';
import Link from 'next/link';
import CurrencyPairWidget from '../components/CurrencyPairWidget';
require('../styles/exchangeRates.css');

const ExchangeRates: React.FC = () => {
    return (
        <div className="uniform-margin">
            <div id="exchange-rates-container">
                <CurrencyPairWidget pair="USD/NGN" logoUrl={require("../static_files/logo-usd.jpeg")} baseCurrency="USD" quoteCurrency="NGN" />
                <CurrencyPairWidget pair="EUR/NGN" logoUrl={require("../static_files/logo-euro.png")} baseCurrency="EUR" quoteCurrency="NGN" />
                <CurrencyPairWidget pair="GBP/NGN" logoUrl={require("../static_files/logo-gbp.png")} baseCurrency="GBP" quoteCurrency="NGN" />
                <CurrencyPairWidget pair="CNY/NGN" logoUrl={require("../static_files/logo-yuan.jpeg")} baseCurrency="CNY" quoteCurrency="NGN" />
                <CurrencyPairWidget pair="BTC/NGN" logoUrl={require("../static_files/logo-ngn.png")} baseCurrency="BTC" quoteCurrency="NGN" />
                <CurrencyPairWidget pair="BTC/USD" logoUrl={require("../static_files/logo-btc.jpeg")} baseCurrency="BTC" quoteCurrency="USD" />
                <Link href="" id="more-rates-btn">Explore More Rates</Link>
                <p id="rates-tag-line">
                    Dive Deeper into Global Exchange Markets – See Detailed Rates, Historical Data, and Track Market Trends Across Currencies Worldwide
                </p>
            </div>
            
        </div>
    )
}

export default ExchangeRates;
