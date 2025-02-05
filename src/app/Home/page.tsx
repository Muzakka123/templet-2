'use client';

import React from 'react';
import { IoLogoSkype } from 'react-icons/io';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
  const router = useRouter(); // Hook correctly used inside the component

  // Handle navigation to product listing
  const handleNavigation = () => {
    router.push('/productlisting'); // Navigates to the "/productlisting" page
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-[1280px] h-auto md:h-[584px] bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between">
          <h2 className="text-xl md:text-2xl font-normal text-center md:text-left">
            The furniture brand for the future,<br className="hidden md:block" /> with timeless designs
          </h2>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleNavigation}
              className="mt-6 w-full md:w-[145px] h-[56px] bg-gray-500 text-white border border-gray-600 font-bold"
            >
              View Collection
            </button>
          </div>
          <p className="text-sm md:text-base mt-6 text-center md:text-left">
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand...<br className="hidden md:block" />
            using modern web technologies.
          </p>
        </div>
        <div className="w-full md:w-[520px] h-auto flex justify-center items-center bg-white mt-6 md:mt-0">
          <Image 
            src="/images/main chair.png" 
            width={600} 
            height={700} 
            alt="chair" 
            className="max-w-full h-auto object-cover" 
          />
        </div>
      </section>
      
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

      {/* New Ceramics Section */}
      <section className="w-full max-w-[1440px] mx-auto bg-white text-[#2A254B] px-4 md:px-8 py-12">
        <h1 className="font-ClashDisplay text-[32px] font-normal leading-[39.36px] text-[#2A254B] mt-10 md:mt-12 ml-4 md:ml-20">
          New Ceramics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Product 1 */}
          <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
            <Image src="/images/main chair.png" alt="chair" width={305} height={375} className="object-cover w-full h-[80%]" />
            <div className="mt-4 text-center">
              <p className="font-medium">The Dendy Chair</p>
              <p className="text-sm">$250</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
            <Image src="/images/ceramics1.png" alt="vase" width={305} height={375} className="object-cover w-full h-[80%]" />
            <div className="mt-4 text-center">
              <p className="font-medium">Rustic Vase Set</p>
              <p className="text-sm">$155</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
            <Image src="/images/ceramics2.png" alt="silky vase" width={305} height={375} className="object-cover w-full h-[80%]" />
            <div className="mt-4 text-center">
              <p className="font-medium">The Silky Vase</p>
              <p className="text-sm">$125</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
            <Image src="/images/ceramics4.png" alt="lamp" width={305} height={375} className="object-cover w-full h-[80%]" />
            <div className="mt-4 text-center">
              <p className="font-medium">The Lucky Lamp</p>
              <p className="text-sm">$399</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="w-[192px] h-[56px] bg-gray-200 text-[#2A254B] font-medium rounded-lg hover:bg-gray-300 transition">
            View our products
          </button>
        </div>
      </section>
      <section className="w-full max-w-[1440px] h-auto mx-auto bg-white text-[#2A254B] px-4 sm:px-8 lg:px-[80px] py-8 lg:py-[134px]">
  <div className="text-center lg:text-left">
    {/* Title */}
    <h1 className="text-[20px] font-ClashDisplay leading-[28px] mb-8">Our popular products</h1>

    {/* Product Grid */}
    <div className="flex flex-col gap-[24px] lg:flex-row lg:gap-[24px]">
      {/* Product 1 */}
      <div className="w-full lg:w-[630px] h-auto lg:h-[462px] flex flex-col mx-auto lg:mx-0">
        <Image
          src="/images/big1 sofa.png"
          alt="sofa"
          width={630}
          height={375}
          className="w-full h-[375px] object-cover"
        />
        <div className="mt-4 text-center lg:text-left">
          <h4 className="text-[20px] leading-[28px] font-ClashDisplay font-normal">
            The popular suede sofa
          </h4>
          <p className="text-sm">$980</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="w-full lg:w-[305px] h-auto lg:h-[462px] flex flex-col mx-auto lg:mx-0">
        <Image
          src="/images/main chair.png"
          alt="chair"
          width={305}
          height={375}
          className="w-full h-[375px] object-cover"
        />
        <div className="mt-4 text-center lg:text-left">
          <h4 className="text-[20px] leading-[28px] font-ClashDisplay font-normal">
            The Dandy chair
          </h4>
          <p className="text-sm">$250</p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="w-full lg:w-[305px] h-auto lg:h-[462px] flex flex-col mx-auto lg:mx-0">
        <Image
          src="/images/dark chair.png"
          alt="chair"
          width={305}
          height={375}
          className="w-full h-[375px] object-cover"
        />
        <div className="mt-4 text-center lg:text-left">
          <h4 className="text-[20px] leading-[28px] font-ClashDisplay font-normal">
            The Dandy chair
          </h4>
          <p className="text-sm">$250</p>
        </div>
      </div>
    </div>

    {/* View Collection Button */}
    <div className="mt-[24px] flex justify-center lg:justify-start">
      <button
        className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B] hover:bg-[#E2E2E2]"
        onClick={handleNavigation}
      >
        View products
      </button>
    </div>
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
<section>
  <div className="py-12 bg-[#F9F9F9] text-[#2A254B] mt-12">
    <div className="flex flex-col md:flex-row w-full max-w-[1440px] mx-auto">
    
      {/* Left Content */}
      <div className="w-full md:w-[720px] px-4 md:px-[84px] py-[16px] flex flex-col justify-between">
        <div>
          {/* Heading */}
          <h1 className="text-[24px] md:text-[32px] font-ClashDisplay font-normal leading-[33.6px] text-[#2A254B] w-full md:w-[514px]">
            From a studio in London to a global brand with <br /> over 400 outlets
          </h1>

          {/* Description */}
          <h1 className="py-[24px] text-[16px] md:text-[18px] font-Satoshi leading-[22.6px] text-[#2A254B] w-full md:w-[536px]">
            When we started Avion, the idea was simple. Make high-quality furniture <br />
            affordable and available for the mass market.
          </h1>

          <h1 className="text-[16px] md:text-[18px] font-Satoshi leading-[22.6px] text-[#2A254B] w-full md:w-[536px]">
            Handmade and lovingly crafted furniture and homeware is what we live, <br />
            breathe, and design, so our Chelsea boutique became the hotbed for the <br />
            London interior design community.
          </h1>
        </div>

        {/* Button */}
        <div className="my-10">
          <button className="bg-[#F9F9F9] text-[#2A254B] py-4 px-8 rounded-[5px] w-full md:w-auto">
            Get in touch
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[720px] h-auto">
        <Image
          src='/images/side sofa.png'
          height={603}
          width={720}
          alt="chair"
          className="w-full h-auto object-cover"
        />
      </div>
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

export default Page;
