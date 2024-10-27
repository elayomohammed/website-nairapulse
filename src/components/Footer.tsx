import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CurrencyProfile from './CurrencyProfile';
require('../styles/footer.css');

const Footer: React.FC = () => {
    return (
        <>
        <CurrencyProfile />
        <footer id="footer-container">
            <div className="uniform-margin">
                <p>
                    Connect with Naira Pulse for Comprehensive Currency Market Data, Accurate 
                    Conversions, and Timely News on Global Financial Movements. Stay Informed, Stay Ahead.
                </p>
                <nav id="footer-nav">
                    <Link href="/tools"><h4 className="footer-nav-item">ABOUT US</h4></Link>
                    <Link href=""><h4 className="footer-nav-item">TOOLS</h4></Link>
                    <Link href=""><h4 className="footer-nav-item">NEWS</h4></Link>
                    <Link href=""><h4 className="footer-nav-item">ANALYTICS</h4></Link>
                    <Link href=""><h4 className="footer-nav-item">CURRENCY API</h4></Link>
                    <Link href=""><h4 className="footer-nav-item">TERMS OF SERVICE</h4></Link>
                    <Link href=""><h4 className="footer-nav-item">PRIVACY POLICY</h4></Link>
                </nav>

                <div id="footer-contact-container">
                    <h3 id="footer-contact-heading">Contact Us</h3>
                    <nav id="footer-contact-nav">
                        <div className="footer-contact-nav-item">
                            <Image height={22} width={22} src={require("../static_files/icon-email.png")} alt="icon-email" className="footer-contact-nav-item-url" />
                            <Link href="mailto: pulsenaira@gmail.com" className="footer-contact-nav-item-url" target="_blank">email</Link>
                        </div>
                        <div className="footer-contact-nav-item">
                            <Image height={22} width={22} src={require("../static_files/icon-ig.png")} alt="icon-ig" className="footer-contact-nav-item-url" />
                            <Link href="https://instagram.com/nairapulse" className="footer-contact-nav-item-url" target="_blank">@nairapulse</Link>
                        </div>
                        <div className="footer-contact-nav-item">
                            <Image height={22} width={22} src={require("../static_files/icon-phone.png")} alt="icon-phone" className="footer-contact-nav-item-url" />
                            <Link href="" className="footer-contact-nav-item-url" target="_blank">phone</Link>
                        </div>
                        <div className="footer-contact-nav-item">
                            <Image height={22} width={22} src={require("../static_files/icon-x.png")} alt="icon-x" className="footer-contact-nav-item-url" />
                            <Link href="" className="footer-contact-nav-item-url" target="_blank">@nairapulse</Link>
                        </div>
                        <div className="footer-contact-nav-item">
                            <Image height={22} width={22} src={require("../static_files/icon-fb.png")} alt="icon-fb" className="footer-contact-nav-item-url" />
                            <Link href="" className="footer-contact-nav-item-url" target="_blank">@nairapulse</Link>
                        </div>
                        <div className="footer-contact-nav-item">
                            <Image src="" alt="" className="footer-contact-nav-item-url" />
                            <Link href="" className="footer-contact-nav-item-url" target="_blank">@nairapulse</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
