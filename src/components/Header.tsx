import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nairapulseLogo from "../static_files/logo-nairapulse.png";
import '../styles/header.css';

const Header: React.FC = () => {
    return (
        <header id="header-container">
            <div className="uniform-margin">
                <Link href="/">
                    <Image 
                        id="header-logo"
                        src={nairapulseLogo} alt="NAIRAPULSE"
                        width={200}
                        height={80}
                    />
                </Link>
                <nav id="header-nav">
                    <Link href="/tools"><h3 className="header-nav-item">Tools</h3></Link>
                    <Link href="/news"><h3 className="header-nav-item">News</h3></Link>
                    <Link href="/analytics"><h3 className="header-nav-item">Analytics</h3></Link>
                    <Link href="/currency_api"><h3 className="header-nav-item">Currency API</h3></Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
