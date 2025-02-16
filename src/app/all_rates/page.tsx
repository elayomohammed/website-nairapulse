import AllRates from "@/components/AllRates";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Live Exchange Rates | Naira Pulse Nigeria",
    description: "Discover up-to-the-second Naira exchange rates on Naira Pulse. Get live updates on NGN trends, daily highs and lows, and market movements across Abuja, Lagos, and Nigeria’s major financial centers."
}
const RateList: React.FC = () => {
    return (
        <>
            <p hidden>
                Experience Nigeria’s Most Accurate Naira Exchange Rates – From Abuja to Lagos, Track Live Rates for NGN Against Global Currencies.
            </p>
            <div className="uniform-margin">
                <AllRates />
            </div>
        </>
    )
}

export default RateList;
