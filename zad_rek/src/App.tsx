import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { Products } from './pages/Products';
import { ErrorPage } from './pages/ErrorPage';
import { Home } from './components/Home';
import { TrashCan } from './components/TrashCan';
import { useEffect, useState } from 'react';
import type { FetchedData } from './types/types';

function App() {
  const [cart, setCart] = useState<FetchedData[]>(() => {
    // cannot malipulate api/server so we gotta use localStorage
    const saved = localStorage.getItem('cart');

    console.log(saved + 'localstorage');
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  });

  const addToCart = (item: FetchedData) => {
    // making a copy of what was before and adding a new item

    const cartCopied = [...cart, item];

    setCart(cartCopied);
  };

  const deleteFromCart = (item: FetchedData) => {
    // finding first index of an item inside our cart that matches the kind of item we want to delete
    const firstIndex = cart.findIndex((el) => el.id === item.id);

    // if that kind of item exists we cut
    if (firstIndex !== -1) {
      const cartCopy2 = [...cart];

      // we cut the 1 item at that index
      cartCopy2.splice(firstIndex, 1);

      setCart(cartCopy2);
    }

    // if we want 2 delete all items based on an id
    // const cartCopied = cart.filter((cartid) => cartid.id !== item.id);
    // setCart(cartCopied);
  };

  // when cart changes gotta save to localStorage

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart.length);
  }, [cart]);

  return (
    <div className=" relative min-h-screen flex flex-col w-full max-w-2xl mx-auto">
      <Navigation></Navigation>

      <TrashCan count={cart.length}></TrashCan>

      <div className="p-4">
        <Routes>
          {/* Main path */}
          <Route path="/" element={<Home />} />

          {/* Products path  */}
          <Route path="/products" element={<Products addToCartFunc={addToCart} deleteFromCart={deleteFromCart} />} />

          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
