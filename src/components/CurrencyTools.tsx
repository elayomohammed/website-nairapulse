import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/currencyTools.css';
import calculatorIcon from "../static_files/icon-calculator.png";
import chartIcon from "../static_files/icon-chart.png";
import alertIcon from "../static_files/icon-alert.png";

const CurrencyTools: React.FC = () => {
    return (
        <div className="uniform-margin">
            <div id="currency-tools-container">
                <h1 id="currency-tools-header">Popular Currency Tools</h1>
                <div id="tools-container">
                    <div className="tool-item">
                        <Image src={calculatorIcon} alt="" className="tool-item-icon" />
                        <p className="tool-item-tagline">
                            Effortlessly convert currencies with our intuitive currency calculator. Stay up-to-date
                            with real-time exchange rates and convert between a wide range of global currencies in just a few clicks.conversions
                        </p>
                        <Link className="tool-item-btn" href="/converter">Use Calculator</Link>
                    </div>
                    <div className="tool-item">
                        <Image src={chartIcon} alt="" className="tool-item-icon" />
                        <p className="tool-item-tagline">
                            Create a chart for any currency pair in the world to see their currency history. These currency charts use live
                            mid-market rates, are easy to use, and are very reliable.
                        </p>
                        <Link className="tool-item-btn" href="/view_chart">View Charts</Link>
                    </div>
                    <div className="tool-item">
                        <Image src={alertIcon} alt="" className="tool-item-icon" />
                        <p className="tool-item-tagline">
                            Need to know when a currency hits a specific rate? The Naira pulse Rate Alerts will let you know
                            when the rate you need is triggered on your selected currency pairs.
                        </p>
                        <Link className="tool-item-btn" href="/alert">Create Alerts</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyTools;
