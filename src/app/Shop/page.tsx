'use client';

import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { IoLogoSkype } from 'react-icons/io';
import Image from 'next/image'; // Import Image component from Next.js

const page: React.FC = () => {
  return (
    <div>
      {/* Cart Section */}
      <div className="bg-white w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-gray-800">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl text-center font-medium">
          Your shopping cart
        </h1>

        {/* Table-like Layout */}
        <div className="mt-10">
          {/* Header Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-semibold border-b pb-2 text-sm">
            <p>Product</p>
            <p className="text-center">Quantity</p>
            <p className="text-right hidden sm:block">Total</p>
          </div>

          {/* Product 1 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center mt-6">
            <div className="flex items-start">
              <Image
                src="/images/pot.png"
                alt="Graystone vase"
                width={80} // Adjust width
                height={80} // Adjust height
                className="w-20 h-20"
              />
              <div className="ml-4">
                <h2 className="font-medium">Graystone vase</h2>
                <p className="text-sm text-gray-500 mt-1">
                  A timeless ceramic vase with a tri-color grey glaze.
                </p>
                <p className="mt-2 font-semibold">£85</p>
              </div>
            </div>
            <p className="text-center">1</p>
            <p className="text-right hidden sm:block font-semibold">£85</p>
          </div>

          {/* Product 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center mt-6">
            <div className="flex items-start">
              <Image
                src="/images/plant.png"
                alt="Basic white vase"
                width={80} // Adjust width
                height={80} // Adjust height
                className="w-20 h-20"
              />
              <div className="ml-4">
                <h2 className="font-medium">Basic white vase</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Beautiful and simple, this is one for the classics.
                </p>
                <p className="mt-2 font-semibold">£125</p>
              </div>
            </div>
            <p className="text-center">1</p>
            <p className="text-right hidden sm:block font-semibold">£125</p>
          </div>
        </div>

        {/* Subtotal and Checkout */}
        <div className="flex flex-col items-end mt-10">
          <div className="text-lg font-medium">
            <span className="mr-4">Subtotal</span>
            <span className="font-semibold">£210</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="bg-[#2A254B] text-white py-2 px-6 mt-4">
            Go to checkout
          </button>
        </div>
      </div>

      
      
            {/* Footer */}
            <div className="px-6 py-8 bg-[#2A254B] mt-8 w-full text-white">
              <div className="flex flex-wrap justify-between gap-6">
                {[
                  { title: "Menu", links: ["New Arrivals", "Best sellers", "Recently viewed", "Popular this week", "All Products"] },
                  { title: "Categories", links: ["Crockery", "Furniture", "Homeware", "Plant pots", "Chairs"] },
                  { title: "Our Company", links: ["About us", "Vacancies", "Contact us", "Privacy", "Return policy"] },
                ].map((section, index) => (
                  <div key={index}>
                    <h1 className="text-lg font-bold">{section.title}</h1>
                    <div className="space-y-2 text-sm">
                      {section.links.map((link, linkIndex) => (
                        <h1 key={linkIndex}><a href="#">{link}</a></h1>
                      ))}
                    </div>
                  </div>
                ))}
      
                {/* Mailing List */}
                <div className="w-full md:w-auto">
                  <h1 className="text-lg font-bold">Join our mailing list</h1>
                  <div className="mt-4 flex flex-col sm:flex-row items-center">
                    <input type="text" placeholder="your@email.com" className="w-full sm:w-[250px] p-2 bg-transparent border border-white rounded-md text-white" />
                    <button className="mt-2 sm:mt-0 sm:ml-2 w-[100px] h-[40px] bg-white text-[#2A254B] rounded-md">
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
      
              <hr className="my-4 border-t border-[#4E4D93]" />
      
              {/* Footer Bottom */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
                <h1 className="text-sm">Copyright 2022 Avion LTD</h1>
                <div className="flex gap-4">
                  {[FaLinkedin, FaFacebookSquare, FaInstagram, FaTwitter, IoLogoSkype, FaPinterest].map((Icon, index) => (
                    <a key={index} href="#"><Icon size={20} /></a>
                  ))}
                </div>
              </div>
            </div>
    </div>
  );
};

export default page;