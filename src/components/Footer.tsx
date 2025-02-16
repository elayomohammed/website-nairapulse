import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CurrencyProfile from './CurrencyProfile';
import emailIcon from "../static_files/icon-email.png";
import igLogo from "../static_files/icon-ig.png";
import phoneIcon from "../static_files/icon-phone.png";
import xLogo from "../static_files/icon-x.png";
import fbLogo from "../static_files/icon-fb.png";
import '../styles/footer.css';

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
                        <Link href="/tools"><h4 className="footer-nav-item">About Us</h4></Link>
                        <Link href=""><h4 className="footer-nav-item">Tools</h4></Link>
                        <Link href=""><h4 className="footer-nav-item">News</h4></Link>
                        <Link href=""><h4 className="footer-nav-item">Analytics</h4></Link>
                        <Link href=""><h4 className="footer-nav-item">Currency API</h4></Link>
                        <Link href=""><h4 className="footer-nav-item">Terms of Service</h4></Link>
                        <Link href=""><h4 className="footer-nav-item">Privacy Policy</h4></Link>
                    </nav>

                    <div id="footer-contact-container">
                        <h3 id="footer-contact-heading">Contact Us</h3>
                        <nav id="footer-contact-nav">
                            <div className="footer-contact-nav-item">
                                <Image height={22} width={22} src={emailIcon} alt="icon-email" className="footer-contact-nav-item-img" />
                                <Link href="mailto: pulsenaira@gmail.com" className="footer-contact-nav-item-url" target="_blank">email</Link>
                            </div>
                            <div className="footer-contact-nav-item">
                                <Image height={22} width={22} src={igLogo} alt="icon-ig" className="footer-contact-nav-item-img" />
                                <Link href="https://instagram.com/nairapulse" className="footer-contact-nav-item-url" target="_blank">@nairapulse</Link>
                            </div>
                            <div className="footer-contact-nav-item">
                                <Image height={22} width={22} src={phoneIcon} alt="icon-phone" className="footer-contact-nav-item-img" />
                                <Link href="" className="footer-contact-nav-item-url" target="_blank">phone</Link>
                            </div>
                            <div className="footer-contact-nav-item">
                                <Image height={22} width={22} src={xLogo} alt="icon-x" className="footer-contact-nav-item-img" />
                                <Link href="https://x.com/nairapulse" className="footer-contact-nav-item-url" target="_blank">@nairapulse</Link>
                            </div>
                            <div className="footer-contact-nav-item">
                                <Image height={22} width={22} src={fbLogo} alt="icon-fb" className="footer-contact-nav-item-img" />
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
