import CurrencyApi from "@/components/CurrencyApi";
import CurrencyCalculator from "@/components/CurrencyCalculator";
import CurrencyTools from "@/components/CurrencyTools";
import ExchangeRates from "@/components/ExchangeRates";
import Hero from "@/components/Hero";
import Image from "next/image";


export default function Home() {
  return (
    <main>
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
  );
}
