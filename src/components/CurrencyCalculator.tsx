'use client';
// components/CurrencyCalculator.tsx
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Dinero from 'dinero.js';
import axios from 'axios';
import "../styles/currencyCalculator.css";
import convertLogo from '../static_files/icon-convert.png'

const API_KEY = process.env.CRYPTOCOMPARE_API_KEY; // CryptoCompare API key

export const getCurrencyRate = async (from: string, to: string): Promise<number> => {
  try {
    const response = await axios.get(
      `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`,
      {
        headers: {
          Authorization: `Apikey ${API_KEY}`
        }
      }
    );
    return response.data[to];
  } catch (error) {
    console.error('Error fetching data from CryptoCompare:', error);
    return 0;
  }
};


const CurrencyCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const rate = await getCurrencyRate(fromCurrency, toCurrency);
      setExchangeRate(rate);
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const handleConversion = () => {
    if (exchangeRate !== null) {
      const dineroAmount = Dinero({ amount: amount * 100 });
      const result = dineroAmount.multiply(exchangeRate);
      setConvertedAmount(result.toUnit());
    }
  };

  return (
    <div className="uniform-margin">
      <div id="currency-calculator-top-container">
        <p id="converter-tagline">
          Convert Currencies Quickly and Accurately with Our Real-Time Converter Tool. Simply Enter an 
          Amount, Select Your Currencies, and Get Instant Results for Your Global Transactions.
        </p>
        <div id="currency-calculator-container">
          <h2 id="title">Currency Converter</h2>
          <div id="currency-calculator">
            <div className="green-bg-w-tx">
              <h3>From - </h3>
              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                <option value="NGN">Naira (NGN)</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
                <option value="CNY">Chinese Yen (CNY)</option>
                {/* Add more currencies as needed */}
              </select>
            </div>
            <Image id="convert-icon" src={convertLogo} alt="Convert Icon" height={14} width={50} />
            <div className="green-bg-w-tx">
              <h3>To - </h3>
              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                <option value="NGN">Naira (NGN)</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">British Pound (GBP)</option>
                <option value="CNY">Chinese Yen (CNY)</option>
                {/* Add more currencies as needed */}
              </select>
            </div>
            <div>
              <input
                id="convert-amount"
                type="number"
                placeholder="enter an amount"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <div id="converted-to">
              {convertedAmount !== null && (
              <p>
                {amount} {fromCurrency} = {convertedAmount} {toCurrency}
              </p>
              )}
            </div>
          </div>
          <button id="convert" onClick={handleConversion}>Convert Now</button>
        </div>
        <small>This is for informational purposes only</small>
      </div>
    </div>
  );
};

export default CurrencyCalculator;
