import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Issue from "./components/issue/Issue";
import Cart from "./components/cart/Cart";
import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";
import Privacy from "./components/privacy/Privacy";
import Shipping from "./components/shipping/Shipping";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header setSearch={setSearch} cartAmount={cart.length} />
      <Routes>
        <Route path="/" element={<Dashboard setSelected={setSelected} />} />
        <Route
          path="/issue"
          element={<Issue selected={selected} setCart={setCart} cart={cart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/search"
          element={<Search search={search} setSelected={setSelected} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
