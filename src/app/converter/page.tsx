import React from "react";
import CurrencyCalculator from "@/components/CurrencyCalculator";
import type { Metadata } from "next";
import "../../styles/converter.css";

export const metadata: Metadata = {
    title: "Currency Converter | Naira Pulse Nigeria",
    description: "Convert currencies instantly on Naira Pulse. Our real-time converter gives you accurate NGN conversion rates for transactions in Nigeria, from Abuja to Lagos, ensuring reliable and up-to-date results."
}

const Converter: React.FC = () => {
    return (
        <>
            <p hidden>
                Instant Naira Currency Conversion – Convert NGN with Accuracy, Serving Nigeria’s Financial Community from Abuja to Lagos.
            </p>
            <div id="converter-container">
                <CurrencyCalculator />
                <div id="conversion-history-container" className="uniform-margin">
                    <h1 id="conversion-history-title">Conversion history</h1>
                    <p id="conversion-history-tagline">
                        Keep track of your recent conversions for easy reference. Review past transactions and access
                        the information you need to make smarter financial choices.
                    </p>
                    <ul id="conversion-history"></ul>
                </div>
            </div>
        </>
    );
}

export default Converter;
