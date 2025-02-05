'use client'; // Add this line at the top

import React from "react";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import Image from "next/image";  // Import next/image for optimized image usage

const page: React.FC = () => {
  return (
   <div>




    {/* Content Section */}
    <div className="w-full mx-auto px-8 sm:px-16 md:px-32 py-[60px] space-y-[60px] bg-[#F9F9F9]">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {/* Text Block */}
          <div className="bg-[#2A254B] text-white px-[64px] py-[88px] flex flex-col justify-between">
            <div>
              <h1 className="font-[Clash Display] text-[32px] font-medium leading-[39.36px] mb-[12px]">
                It started with a small idea
              </h1>
              <p className="font-[Satoshi] text-[18px] leading-[24.3px]">
                A global brand with local beginnings, our story began in a small studio in South London in early 2014.
              </p>
            </div>
            <button className="bg-gray-500 text-white  w-[170px] h-[56px]">
              View collection
            </button>
          </div>
          {/* Image */}
          <div>
            <Image src="/images/yellow sofa.png" alt="Yellow Sofa" width={500} height={500} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          <div>
            <Image src="/images/black sofa.png" alt="Black Sofa" width={500} height={500} className="w-full h-full object-cover" />
          </div>
          <div className="bg-white text-[#2A254B] px-[64px] py-[88px] flex flex-col justify-between">
            <div>
              <h1 className="font-[Clash Display] text-[32px] font-medium leading-[39.36px] mb-[12px]">
                Our service isn’t just personal, it’s actually hyper personally exquisite
              </h1>
              <p className="font-[Satoshi] text-[18px] leading-[24.3px]">
                Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
                our Chelsea boutique became the hotbed for the London interior design community.
              </p>
            </div>
            <button className="bg-[#2A254B] text-white px-[32px] py-[16px] w-[170px] h-[56px] rounded-md mt-[24px]">
              Get in touch
            </button>
          </div>
        </div>
      </div>

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
