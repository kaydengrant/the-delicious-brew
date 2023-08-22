'use client';
import './globals.css';
import { useEffect } from 'react';
import { Inter } from 'next/font/google';

import { StateContext } from '../context/StateContext';
import { Footer, NavBar, ToastProvider } from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
      const headerHeight = header.offsetHeight;
      main.style.top = headerHeight + 'px';
      let lastScroll = 0;

      window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;
        if (currentScroll - lastScroll > 0) {
          header.classList.add('nav-scroll-down');
          header.classList.remove('nav-scroll-up');
        } else {
          // scrolled up -- header show
          header.classList.add('nav-scroll-up');
          header.classList.remove('nav-scroll-down');
        }
        lastScroll = currentScroll;
      });
    }
  });

  return (
    <StateContext>
      <html lang="en" className={inter.className}>
        <title>The Delicious Brew</title>
        <meta
          name="description"
          content="Coffee ecommerce & blog for coffee connoisseurs"
        />
        <body>
          <ToastProvider>
            <NavBar />
            <main className="content-container">
              {children}
              <Footer />
            </main>
          </ToastProvider>
        </body>
      </html>
    </StateContext>
  );
}
