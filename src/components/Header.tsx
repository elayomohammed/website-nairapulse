import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
require("../styles/header.css");

const Header: React.FC = () => {
    return (
        <header id="header-container">
            <div className="uniform-margin">
                <Link href="./" id="header-logo">
                    <Image 
                        src={require("../static_files/logo-nairapulse.png")} alt="NAIRAPULSE"
                        width={200}
                        height={100}
                    />
                </Link>
                <nav id="header-nav">
                    <Link href="/tools"><h3 className="header-nav-item">TOOLS</h3></Link>
                    <Link href=""><h3 className="header-nav-item">NEWS</h3></Link>
                    <Link href=""><h3 className="header-nav-item">ANALYTICS</h3></Link>
                    <Link href=""><h3 className="header-nav-item">CURRENCY API</h3></Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
