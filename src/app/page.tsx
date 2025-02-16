import React from 'react';
import CurrencyApi from "@/components/CurrencyApi";
import CurrencyCalculator from "@/components/CurrencyCalculator";
import CurrencyTools from "@/components/CurrencyTools";
import ExchangeRates from "@/components/ExchangeRates";
import Hero from "@/components/Hero";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Home() {
  return (
    <>

      <main>
        <p hidden>
          Empowering Nigerians from Abuja to Lagos with Real-Time Naira Exchange Rates, Comprehensive Market
          Insights, and Seamless Currency Conversion.
        </p>
        <Hero />
        <ExchangeRates />
        <hr className="general-hr" />
        <CurrencyCalculator />
        <hr className="general-hr" />
        <CurrencyTools />
        <hr className="general-hr" />
        <CurrencyApi />
        <hr className="general-hr" />
      </main>
    </>
  );
}
