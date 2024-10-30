import TradingViewChart from "@/components/TradingViewChart";
import React from "react";
require("../../styles/viewChart.css");

const ViewCharts: React.FC = () => {
    return (
        <div className="uniform-margin">
            <div id="view-charts-container">
                <p id="view-chart-tagline">
                    Explore a comprehensive, real-time charting experience with Naira Pulse – track trends, analyze 
                    performance, and make informed decisions across forex, crypto, stocks, and more. From futures to 
                    bonds, dive into global markets with seamless precision and clarity.
                </p>
                <TradingViewChart symbol={"USDNGN"} width="100%" height={500} />
                <small id="chart-title">Pulse Charting Tool, powered by TradingView</small>
            </div>
        </div>
    )
}

export default ViewCharts;