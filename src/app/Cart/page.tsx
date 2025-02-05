'use client'; // Add this line at the top

import React, { useState } from "react";
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const page: React.FC = () => { // Component name updated to start with an uppercase letter
  const [quantity, setQuantity] = useState(1);
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  // Increase quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Decrease quantity
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };




  return (
    <div className="relative">
    {/* Cart Toggle Button */}
    <button
      onClick={toggleCart}
      className="fixed top-4 right-4 bg-[#2A254B] text-white px-4 py-2 rounded-md z-10"
    >
      {isCartVisible ? "Hide Cart" : "Show Cart"}
    </button>

    {/* Cart Section */}
    {isCartVisible && (
      <div className="fixed top-16 right-4 w-[300px] bg-white shadow-lg rounded-md p-4 z-10">
        <h3 className="text-lg font-bold mb-2">Your Cart</h3>
        <p>No items in your cart.</p>
      </div>
    )}

    {/* Product Details Section */}
    <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row bg-white text-[#2A254B]">
      {/* Product Image */}
      <div className="w-[721px] h-[759px]">
        <Image
          src="/images/danty chair.png"
          alt="Dandy Chair"
          width={721}
          height={759}
          className="object-cover w-[721px] h-[759px]"
        />
      </div>

       {/* Product Details */}
       <div className="w-full lg:w-1/2 p-6 sm:p-12 flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl font-bold">The Dandy Chair</h1>
          <p className="text-sm sm:text-base leading-relaxed">
            A timeless design with premium materials. The Dandy Chair is one of
            our most popular pieces, featuring beech legs and lambskin leather
            upholstery.
          </p>

          {/* Features */}
          <ul className="text-sm sm:text-base">
            <li>• Premium material</li>
            <li>• Handmade upholstery</li>
            <li>• Quality timeless classic</li>
          </ul>

          {/* Dimensions */}
          <div>
            <h3 className="text-base font-bold">Dimensions</h3>
            <p className="text-sm sm:text-base">
              Height: 110cm | Width: 75cm | Depth: 50cm
            </p>
          </div>

          {/* Quantity Selector & Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-2">
              <button
                className="text-lg sm:text-xl font-bold"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="text-lg sm:text-xl font-bold"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <button className="bg-[#2A254B] text-white px-6 py-2 rounded-lg w-full sm:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

     

 {/* Features Section */}
      <section className="relative w-full max-w-[1440px] mx-auto bg-white mt-[40px] text-[#2A254B] px-4 md:px-8 py-12">
        <div className="text-center pt-16">
          <h3 className="text-[24px] leading-[33.6px] font-[Clash Display] mx-auto w-full max-w-[366px]">
            What makes our brand different
          </h3>
        </div>
        <div className="flex justify-center gap-8 mt-12 flex-wrap">
          {[ 
            { icon: "/images/icon1.png", title: "Next day as standard", desc: "Order before 3pm and get your order the next day at standard." },
            { icon: "/images/icons2.png", title: "Made by true artisans", desc: "Handmade crafted goods made with real passion and craftsmanship." },
            { icon: "/images/icon3.png", title: "Unbeatable prices", desc: "For our materials and quality, you won’t find better prices anywhere." },
            { icon: "/images/icon4.png", title: "Recycled packaging", desc: "We use 100% recycled packaging to ensure our footprint is manageable." }
          ].map((item, index) => (
            <div key={index} className="text-center w-full sm:w-[250px] md:w-[300px] lg:w-[200px] mb-8">
              <Image src={item.icon} alt={item.title} width={40} height={40} className="mx-auto mb-4" />
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-sm leading-[20px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full max-w-[1440px] h-auto bg-[#F9F9F9] flex justify-center items-center py-8">
  <div className="w-full max-w-[1273px] h-auto bg-white mx-auto px-6 sm:px-[93px] py-[40px] flex flex-col items-center text-[#2A254B]">
    {/* Heading */}
    <h1 className="w-full sm:w-[571px] text-[24px] sm:text-[36px] font-ClashDisplay font-normal leading-[36px] sm:leading-[50.4px] text-center">
      Join the club and get the benefits
    </h1>

    {/* Subheading */}
    <h2 className="w-full sm:w-[470px] mt-4 text-[14px] sm:text-[16px] font-Satoshi leading-[20px] sm:leading-[24px] text-center">
      Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
    </h2>

    {/* Form */}
    <div className="mt-[40px] flex flex-col sm:flex-row items-center gap-[10px] sm:gap-[16px] w-full">
      <input
        type="email"
        placeholder="your@email.com"
        className="w-full sm:w-[472px] h-[56px] p-4 bg-[#F9F9F9] text-[#2A254B] outline-none"
      />
      <button className="w-full sm:w-[118px] h-[56px] bg-[#2A254B] text-white text-center">
        Signup
      </button>
    </div>
  </div>
</section>



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
