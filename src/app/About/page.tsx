'use client';

import { CheckCircle } from "lucide-react";



import Image from "next/image";



import React from 'react';
import { IoLogoSkype } from 'react-icons/io';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from 'react-icons/fa';

import { useRouter } from 'next/navigation';


const Page: React.FC = () => {
  return (
    <div>
<section className="relative w-full">
  {/* Background Image */}
  <div className="w-full">
    <Image
      src="/images/banner.png"
      alt="Banner Image"
      width={1440}
      height={704}
      className="object-cover w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[704px]"
    />
  </div>

  {/* Text Box */}
  <div className="absolute top-[50%] sm:top-[60%] md:top-[50%] lg:top-[130px] left-1/2 lg:left-[730px] 
                  transform -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:translate-x-0 
                  w-[90%] sm:w-[80%] md:w-[70%] lg:w-[500px] bg-white shadow-lg p-6 sm:p-8 md:p-10 
                  flex flex-col justify-start gap-4 text-center lg:text-left">
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-ClashDisplay">
      Luxury Homeware for People Who Love Timeless Design Quality
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-black">
      Shop from the New Spring 2022 Collection
    </p>
    <button className="h-10 sm:h-12 w-36 sm:w-40 bg-gray-300 text-white rounded-md hover:bg-gray-400 transition-all mx-auto lg:mx-0">
      View Collection
    </button>
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
   
      <section
      className="relative w-full h-[444px] flex justify-center items-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/images/image1.png')" }} // Fixed path
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative w-full max-w-[630px] flex flex-col items-center text-white text-center px-6 sm:px-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          Join the club and get the benefits
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>

        {/* Benefits List with Icons */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-white w-5 h-5" /> Exclusive offers
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-white w-5 h-5" /> Free events
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-white w-5 h-5" /> Large discounts
          </div>
        </div>

        {/* Email Input & Sign Up Button */}
        <div className="mt-6 flex flex-col sm:flex-row items-center w-full gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-[400px] h-[50px] px-4 rounded-md text-black outline-none"
          />
          <button className="w-full sm:w-[120px] h-[50px] bg-[#2A254B] text-white rounded-md hover:bg-[#3A365D] transition-all">
            Sign up
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

export default Page;

