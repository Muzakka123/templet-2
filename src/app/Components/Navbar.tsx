'use client'; // Add this line at the very top

import React, { useState } from 'react'; // Keep your imports
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isCartVisible, setCartVisible] = useState(false); // Hook to manage cart visibility

  // Toggle cart visibility
  const toggleCart = () => setCartVisible(!isCartVisible);

  return (
    <div>
      <nav className="p-4" style={{ fontFamily: 'Clash Display' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left side - Search bar */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center px-1 py-1">
              <FaSearch className="text-black" />
            </div>
          </div>

          {/* Center - Logo */}
          <div className="text-[#2A254B] font-[Clash Display] text-3xl mx-auto">
            <Link href="/">Avion</Link>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-black">
              <FaUser />
            </button>

            <button className="text-black" onClick={toggleCart}>
              <FaShoppingCart />
            </button>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-black my-2"></div>

        {/* Navigation Links */}
        <div className="max-w-7xl mx-auto flex justify-center py-2">
          <ul className="flex space-x-10">
            <li>
              <Link href='/Home' className="text-[#2A254B] text-sm font-[Satoshi] font-normal">
                Home
              </Link>
            </li>
            <li>
              <Link href='/About' className="text-[#2A254B] text-sm font-[Satoshi] font-normal">
                About
              </Link>
            </li>
            <li>
              <Link href='/Brand' className="text-[#2A254B] text-sm font-[Satoshi] font-normal">
                Brand
              </Link>
            </li>
            <li>
              <Link href='/Cart' className="text-[#2A254B] text-sm font-[Satoshi] font-normal">
                Cart
              </Link>
            </li>
            <li>
              <Link href='/Shop' className="text-[#2A254B] text-sm font-[Satoshi] font-normal">
                Shop
              </Link>
            </li>
            <li>
              <Link href='/Product' className="text-[#2A254B] text-sm font-[Satoshi] font-normal">
                Product
              </Link>
            </li>
          </ul>
        </div>
 
      </nav>
    </div>
  );
};

export default Navbar;