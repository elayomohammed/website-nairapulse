import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "../styles/currencyProfile.css";
import ngnLogo from "../static_files/logo-ngn.png";
import usdLogo from "../static_files/logo-usd.jpeg";
import gbpLogo from "../static_files/logo-gbp.png";
import eurLogo from "../static_files/logo-euro.png";
import cnyLogo from "../static_files/logo-yuan.jpeg";
import btcLogo from "../static_files/logo-btc.jpeg";

const CurrencyProfile: React.FC = () => {
    return (
        <div className="uniform-margin">
            <div id="currency-profile-container">
                <h1 id="currency-profile-header">Currency Profiles</h1>
                <div id="currency-profile-items">
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={ngnLogo} alt="" className="profile-item-img" height={35} width={40} />
                            <p className="profile-item-name">NGN - Nigerian Naira</p>
                        </Link>
                    </div>
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={usdLogo} alt="" className="profile-item-img" height={35} width={40} />
                            <p className="profile-item-name">USD - US Dollar</p>
                        </Link>
                    </div>
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={gbpLogo} alt="" className="profile-item-img" height={35} width={40} />
                            <p className="profile-item-name">GBP - Great British Pound</p>
                        </Link>
                    </div>
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={eurLogo} alt="" className="profile-item-img" height={35} width={40} />
                            <p className="profile-item-name">EUR - Euro</p>
                        </Link>
                    </div>
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={cnyLogo} alt="" className="profile-item-img" height={35} width={40} />
                            <p className="profile-item-name">CNY - Chinese Yen</p>
                        </Link>
                    </div>
                    <div className="profile-link">
                        <Link href="" className="currency-profile-item">
                            <Image src={btcLogo} alt="" className="profile-item-img" height={35} width={40} />
                            <p className="profile-item-name">BTC - Bitcoin</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyProfile;
