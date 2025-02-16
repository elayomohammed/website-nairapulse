import React from "react";
import CurrencyTools from "@/components/CurrencyTools";
import './index.css';
import CurrencyCalculator from "@/components/CurrencyCalculator";

const Tools: React.FC = () => {
    return (
        <>
            <div  className="uniform-margin" style={{marginTop: '100px'}}>
                <p className="tools-tagline">
                    Get access to top currency tools...<br />
                    Explore Naira Pulse currency tools services from anywhere in the world.
                </p>
            </div>

            <CurrencyTools />

            <div id="tools-currency-calculator">
                <div className="uniform-margin">
                    <p className="converter-tagline">
                        Convert Currencies Instantly and Accurately with Our Advanced Currency Converter 
                        Tool. Input Your Amount, Select Currencies, and See the Real-Time Conversion – All in a Few Clicks
                    </p>
                </div>
                <CurrencyCalculator />
                <div id="converter-history" className="uniform-margin">
                    <p className="converter-tagline">
                        Keep Track of Your Recent Conversions for Easy Reference. Review Past Transactions 
                        and Access the Information You Need to Make Smarter Financial Choices
                    </p>
                    <h1 id="conversion-history-header">Conversions History</h1>
                </div>
            </div>

            <div id="tools-currency-alert"></div>
        </>
    )
}

export default Tools;
