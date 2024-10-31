import React from "react";
import Link from 'next/link';
import CurrencyPairWidget from '../components/CurrencyPairWidget';
import usdLogo from "../static_files/logo-usd.jpeg";
import eurLogo from "../static_files/logo-euro.png";
import gbpLogo from "../static_files/logo-gbp.png";
import cnyLogo from "../static_files/logo-yuan.jpeg";
import jpyLogo from "../static_files/logo-jpy.png";
import btcLogo from "../static_files/logo-btc.jpeg";
import cadLogo from "../static_files/logo-cad.png";
import rubLogo from "../static_files/logo-rub.png";
import inrLogo from "../static_files/logo-inr.png";
import aedLogo from "../static_files/logo-aed.jpeg";
import zarLogo from "../static_files/logo-zar.png";
import ethLogo from "../static_files/logo-eth.png";
import bnbLogo from "../static_files/logo-bnb.png";
import tonLogo from "../static_files/logo-ton.png";
import "../styles/all_rates.css";

const AllRates: React.FC = () => {
    return (
        <div id="all-rates-container">
            <Link href="/view_chart/USDNGN"><CurrencyPairWidget pair="USD/NGN" logoUrl={usdLogo} baseCurrency="USD" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/EURNGN"><CurrencyPairWidget pair="EUR/NGN" logoUrl={eurLogo} baseCurrency="EUR" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/GBPNGN"><CurrencyPairWidget pair="GBP/NGN" logoUrl={gbpLogo} baseCurrency="GBP" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/CNYNGN"><CurrencyPairWidget pair="CNY/NGN" logoUrl={cnyLogo} baseCurrency="CNY" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/JPYNGN"><CurrencyPairWidget pair="JPY/NGN" logoUrl={jpyLogo} baseCurrency="JPY" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/BTCNGN"><CurrencyPairWidget pair="BTC/NGN" logoUrl={btcLogo} baseCurrency="BTC" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/BTCUSD"><CurrencyPairWidget pair="BTC/USD" logoUrl={btcLogo} baseCurrency="BTC" quoteCurrency="USD" /></Link>
            <Link href="/view_chart/CADNGN"><CurrencyPairWidget pair="CAD/NGN" logoUrl={cadLogo} baseCurrency="CAD" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/RUBNGN"><CurrencyPairWidget pair="RUB/NGN" logoUrl={rubLogo} baseCurrency="RUB" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/INRNGN"><CurrencyPairWidget pair="INR/NGN" logoUrl={inrLogo} baseCurrency="INR" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/AEDNGN"><CurrencyPairWidget pair="AED/NGN" logoUrl={aedLogo} baseCurrency="AED" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/ZARNGN"><CurrencyPairWidget pair="ZAR/NGN" logoUrl={zarLogo} baseCurrency="ZAR" quoteCurrency="NGN" /></Link>
            <Link href="/view_chart/ETHUSD"><CurrencyPairWidget pair="ETH/USD" logoUrl={ethLogo} baseCurrency="ETH" quoteCurrency="USD" /></Link>
            <Link href="/view_chart/BNBUSD"><CurrencyPairWidget pair="BNB/USD" logoUrl={bnbLogo} baseCurrency="BNB" quoteCurrency="USD" /></Link>
            <Link href="/view_chart/TONUSD"><CurrencyPairWidget pair="TON/USD" logoUrl={tonLogo} baseCurrency="TON" quoteCurrency="USD" /></Link>
        </div>
    )
}

export default AllRates;
