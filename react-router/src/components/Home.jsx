import React from "react";
import Headphones from "../assets/Headphones.jpg";
import Smartwatch from "../assets/Smartwatch.jpg";
import Speaker from "../assets/Speaker.jpg";

const Home = () => {
  const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1,999",
    image: Headphones,
  },

  {
    id: 2,
    name: "Smart Watch",
    price: "₹2,499",
    image: Smartwatch,
  },

  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "₹1,499",
    image: Speaker,
  },
];

  return (
    <div className="container">
      <section className="hero">
        <h1>Welcome to Ashok Store</h1>
        <p>Discover the latest gadgets at affordable prices.</p>

        <button>Shop Now</button>
      </section>

      <section className="products-section">
        <h2>Featured Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p>{product.price}</p>

              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
