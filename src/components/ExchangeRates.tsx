import React from 'react';
import Link from 'next/link';
import CurrencyPairWidget from '../components/CurrencyPairWidget';
import '../styles/exchangeRates.css';
import usdLogo from "../static_files/logo-usd.jpeg";
import eurLogo from "../static_files/logo-euro.png";
import gbpLogo from "../static_files/logo-gbp.png";
import cnyLogo from "../static_files/logo-yuan.jpeg";
import btcLogo from "../static_files/logo-btc.jpeg";

const ExchangeRates: React.FC = () => {
    return (
        <div className="uniform-margin">
            <div id="exchange-rates-container">
                <Link href="/view_chart/USDNGN"><CurrencyPairWidget pair="USD/NGN" logoUrl={usdLogo} baseCurrency="USD" quoteCurrency="NGN" /></Link>
                <Link href="/view_chart/EURNGN"><CurrencyPairWidget pair="EUR/NGN" logoUrl={eurLogo} baseCurrency="EUR" quoteCurrency="NGN" /></Link>
                <Link href="/view_chart/GBPNGN"><CurrencyPairWidget pair="GBP/NGN" logoUrl={gbpLogo} baseCurrency="GBP" quoteCurrency="NGN" /></Link>
                <Link href="/view_chart/CNYNGN"><CurrencyPairWidget pair="CNY/NGN" logoUrl={cnyLogo} baseCurrency="CNY" quoteCurrency="NGN" /></Link>
                <Link href="/view_chart/BTCNGN"><CurrencyPairWidget pair="BTC/NGN" logoUrl={btcLogo} baseCurrency="BTC" quoteCurrency="NGN" /></Link>
                <Link href="/view_chart/BTCUSD"><CurrencyPairWidget pair="BTC/USD" logoUrl={btcLogo} baseCurrency="BTC" quoteCurrency="USD" /></Link>
                <Link href="./all_rates" id="more-rates-btn">Explore More Rates</Link>
                <p id="rates-tag-line">
                    Dive Deeper into Global Exchange Markets – See Detailed Rates, Historical Data, and Track Market Trends Across Currencies Worldwide
                </p>
            </div>
            
        </div>
    )
}

export default ExchangeRates;
