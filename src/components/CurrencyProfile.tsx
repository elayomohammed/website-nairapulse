import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
require('../styles/currencyProfile.css');

const CurrencyProfile: React.FC = () => {
    return (
        <div className="uniform-margin">
            <div id="currency-profile-container">
                <h1 id="currency-profile-header">Currency Profiles</h1>
                <div id="currency-profile-items">
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={require("../static_files/logo-ngn.png")} alt="" className="profile-item-img" />
                            <p className="profile-item-name">NGN - Nigerian Naira</p>
                        </Link>
                    </div>
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={require("../static_files/logo-usd.jpeg")} alt="" className="profile-item-img" />
                            <p className="profile-item-name">USD - US Dollar</p>
                        </Link>
                    </div>
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={require("../static_files/logo-gbp.png")} alt="" className="profile-item-img" />
                            <p className="profile-item-name">GBP - Great British Pound</p>
                        </Link>
                    </div>
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={require("../static_files/logo-euro.png")} alt="" className="profile-item-img" />
                            <p className="profile-item-name">EUR - Euro</p>
                        </Link>
                    </div>
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={require("../static_files/logo-yuan.jpeg")} alt="" className="profile-item-img" />
                            <p className="profile-item-name">CNY - Chinese Yen</p>
                        </Link>
                    </div>
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={require("../static_files/logo-btc.jpeg")} alt="" className="profile-item-img" />
                            <p className="profile-item-name">BTC - Bitcoin</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyProfile;
