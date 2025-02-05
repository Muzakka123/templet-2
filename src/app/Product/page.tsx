'use client';

import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from 'react-icons/fa';
import { IoLogoSkype } from 'react-icons/io';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
 
    
        <div>
          {/* Hero Section */}
          <section
            className="w-full h-[146px] sm:h-[209px] bg-cover bg-center flex items-center justify-start px-6 sm:px-10 md:px-20 relative"
            style={{ backgroundImage: "url('/images/tabel.png')" }}
          >
            <h2 className="absolute text-white font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl top-[50%] left-6 sm:left-10 md:left-20 transform -translate-y-1/2">
              All products
            </h2>
          </section>
    
          {/* Filters */}
          <div className="flex flex-wrap sm:flex-nowrap justify-between px-4 py-4 gap-2 sm:gap-4">
            {["Category", "Product type", "Price", "Brand", "Sorting by"].map(
              (filter, index) => (
                <select
                  key={index}
                  className="p-2 border rounded w-full sm:w-auto text-sm sm:text-base"
                >
                  <option>{filter}</option>
                </select>
              )
            )}
          </div>

    
             {/* New Ceramics Section */}
             <section className="w-full max-w-[1440px] mx-auto bg-white text-[#2A254B] px-4 md:px-8 py-12">
              
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
              
             
             </section>
                      {/* New Ceramics Section */}
                      <section className="w-full max-w-[1440px] mx-auto bg-white text-[#2A254B] px-4 md:px-8 py-12">
                       
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                          {/* Product 1 */}
                          <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
                            <Image src="/images/lamp.png" alt="chair" width={305} height={375} className="object-cover w-full h-[80%]" />
                            <div className="mt-4 text-center">
                              <p className="font-medium">The Dendy Chair</p>
                              <p className="text-sm">$250</p>
                            </div>
                          </div>
                
                          {/* Product 2 */}
                          <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
                            <Image src="/images/cup.png" alt="vase" width={305} height={375} className="object-cover w-full h-[80%]" />
                            <div className="mt-4 text-center">
                              <p className="font-medium">Rustic Vase Set</p>
                              <p className="text-sm">$155</p>
                            </div>
                          </div>
                
                          {/* Product 3 */}
                          <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
                            <Image src="/images/yellow tabel2.png" alt="silky vase" width={305} height={375} className="object-cover w-full h-[80%]" />
                            <div className="mt-4 text-center">
                              <p className="font-medium">The Silky Vase</p>
                              <p className="text-sm">$125</p>
                            </div>
                          </div>
                
                          {/* Product 4 */}
                          <div className="w-full max-w-[305px] h-[462px] flex flex-col items-center">
                            <Image src="/images/3 chair.png" alt="lamp" width={305} height={375} className="object-cover w-full h-[80%]" />
                            <div className="mt-4 text-center">
                              <p className="font-medium">The Lucky Lamp</p>
                              <p className="text-sm">$399</p>
                            </div>
                          </div>
                        </div>
                        
                      </section>
                      

         {/* New Ceramics Section */}
         <section className="w-full max-w-[1440px] mx-auto bg-white text-[#2A254B] px-4 md:px-8 py-12">
          
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
