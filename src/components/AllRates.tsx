import React from "react";
import Link from 'next/link';
import CurrencyPairWidget from '../components/CurrencyPairWidget';
require("../styles/all_rates.css");

const AllRates: React.FC = () => {
    return (
        <div id="all-rates-container">
            <Link href="/view_chart/USDNGN"><CurrencyPairWidget pair="USD/NGN" logoUrl={require("../static_files/logo-usd.jpeg")} baseCurrency="USD" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/EURNGN"><CurrencyPairWidget pair="EUR/NGN" logoUrl={require("../static_files/logo-euro.png")} baseCurrency="EUR" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/GBPNGN"><CurrencyPairWidget pair="GBP/NGN" logoUrl={require("../static_files/logo-gbp.png")} baseCurrency="GBP" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/CNYNGN"><CurrencyPairWidget pair="CNY/NGN" logoUrl={require("../static_files/logo-yuan.jpeg")} baseCurrency="CNY" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/JPYNGN"><CurrencyPairWidget pair="JPY/NGN" logoUrl={require("../static_files/logo-jpy.png")} baseCurrency="JPY" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/BTCNGN"><CurrencyPairWidget pair="BTC/NGN" logoUrl={require("../static_files/logo-btc.jpeg")} baseCurrency="BTC" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/BTCUSD"><CurrencyPairWidget pair="BTC/USD" logoUrl={require("../static_files/logo-btc.jpeg")} baseCurrency="BTC" quoteCurrency="USD" /></Link>
            <></>
            <Link href="/view_chart/CADNGN"><CurrencyPairWidget pair="CAD/NGN" logoUrl={require("../static_files/logo-cad.png")} baseCurrency="CAD" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/RUBNGN"><CurrencyPairWidget pair="RUB/NGN" logoUrl={require("../static_files/logo-rub.png")} baseCurrency="RUB" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/INRNGN"><CurrencyPairWidget pair="INR/NGN" logoUrl={require("../static_files/logo-inr.png")} baseCurrency="INR" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/AEDNGN"><CurrencyPairWidget pair="AED/NGN" logoUrl={require("../static_files/logo-aed.jpeg")} baseCurrency="AED" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/ZARNGN"><CurrencyPairWidget pair="ZAR/NGN" logoUrl={require("../static_files/logo-zar.png")} baseCurrency="ZAR" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/ETHUSD"><CurrencyPairWidget pair="ETH/USD" logoUrl={require("../static_files/logo-eth.png")} baseCurrency="ETH" quoteCurrency="USD" /></Link>
            <Link href="/view_chart/BNBUSD"><CurrencyPairWidget pair="BNB/USD" logoUrl={require("../static_files/logo-bnb.png")} baseCurrency="BNB" quoteCurrency="USD" /></Link>
            <Link href="/view_chart/TONUSD"><CurrencyPairWidget pair="TON/USD" logoUrl={require("../static_files/logo-ton.png")} baseCurrency="TON" quoteCurrency="USD" /></Link>
        </div>
    )
}

export default AllRates;
