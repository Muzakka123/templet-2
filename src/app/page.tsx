import Home from './Home/page';
import About from './About/page'; 
import Brand from './Brand/page';
import Cart from './Cart/page'
import Shop from './Shop/page'
import Product from './Product/page'
import React from   'react';
export default function MainPage() {
  return (
    <main>
    
      < Home/>
      < About/>
      <Brand/>
      <Cart/>
      <Shop/>
      <Product />
      </main>
  );
}