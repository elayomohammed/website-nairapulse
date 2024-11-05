'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nairapulseLogo from '../static_files/logo-nairapulse.png';
import '../styles/header.css';

const Header: React.FC = () => {
  useEffect(() => {
    const menuOpenBtn = document.querySelector('#menu-open-btn') as HTMLElement;
    const menuCloseBtn = document.querySelector('#menu-close-btn') as HTMLElement;
    const mobileNav = document.querySelector('#mobile-header-nav') as HTMLElement;

    const handleOpenMenuBtns = (e: Event) => {
      if (e && mobileNav) {
        mobileNav.style.display = mobileNav.style.display === 'none' ? 'block' : 'none';
        menuOpenBtn.style.display = 'none';
        menuCloseBtn.style.display = 'block';
      }
    };

    const handleCloseMenuBtns = (e: Event) => {
        if (e && mobileNav) {
          mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
          menuOpenBtn.style.display = 'block';
          menuCloseBtn.style.display = 'none';
        }
      };

    if (menuOpenBtn && menuCloseBtn) {
      menuOpenBtn.addEventListener('click',  handleOpenMenuBtns);
    }

    if (menuOpenBtn && menuCloseBtn) {
        menuCloseBtn.addEventListener('click', handleCloseMenuBtns);
      }

    // Clean up event listeners on component unmount
    return () => {
      if (menuOpenBtn) menuOpenBtn.removeEventListener('click', handleOpenMenuBtns);
      if (menuCloseBtn) menuCloseBtn.removeEventListener('click', handleCloseMenuBtns);
    };
  }, []);


  return (
    <header id="header-container">
      <div className="uniform-margin">
        <Link href="/">
          <Image
            id="header-logo"
            src={nairapulseLogo}
            alt="NAIRAPULSE"
            width={200}
            height={80}
          />
        </Link>
        <nav id="header-nav">
          <Link href="/tools">
            <h3 className="header-nav-item">Tools</h3>
          </Link>
          <Link href="/news">
            <h3 className="header-nav-item">News</h3>
          </Link>
          <Link href="/analytics">
            <h3 className="header-nav-item">Analytics</h3>
          </Link>
          <Link href="/currency_api">
            <h3 className="header-nav-item">Currency API</h3>
          </Link>
        </nav>
        <div id="mobile-nav-and-menu-btns">
          <div id="menu-btns-container">
            <Image
              className="menu-btns"
              id="menu-open-btn"
              src="/menu-open.png"
              alt="Menu Open Button"
              width={50}
              height={40}
            />
            <Image
              className="menu-btns"
              id="menu-close-btn"
              src="/menu-close.png"
              alt="Menu Close Button"
              width={50}
              height={40}
            />
          </div>
          <div id="mobile-header-nav" style={{display: 'none'}}>
            <Link href="/tools">
              <h3 className="mobile-header-nav-item">Tools</h3>
            </Link>
            <Link href="/news">
              <h3 className="mobile-header-nav-item">News</h3>
            </Link>
            <Link href="/analytics">
              <h3 className="mobile-header-nav-item">Analytics</h3>
            </Link>
            <Link href="/currency_api">
              <h3 className="mobile-header-nav-item">Currency API</h3>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
