import Link from 'next/link';
import React from 'react';
import ERRLogo from '../ERRLogo/ERRLogo';
import Button from '../Button/Button';


const MenuBar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ERRLogo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/pages/info">
                  <p>Info</p>
                </Link>
              </li>
              <li>
                <Link href="/pages/contact">
                  <p>Contact</p>
                </Link>
              </li>
              <li>
                <Link href="/pages/calculator">
                  <p>Calculator</p>
                </Link>
              </li>              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;