'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';

import { StateContext } from '../context/StateContext';
import { Footer, NavBar, ToastProvider } from '../components';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: 'Delicious Brew',
  description: 'Developed by Kayden Grant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateContext>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider>
            <NavBar />
            <div className="content-container">
              {children}
              <Footer />
            </div>
          </ToastProvider>
        </body>
      </html>
    </StateContext>
  );
}
