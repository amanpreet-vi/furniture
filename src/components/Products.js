import React from "react";
import "./Products.css";
// Import the images
import sofaImg from "../assets/sofa.jpg";
import tableImg from "../assets/table.jpg";
import chairImg from "../assets/chair.jpg";

const Products = () => {
  const furniture = [
    { id: 1, name: "Sofa", price: "$300", img: sofaImg },
    { id: 2, name: "Dining Table", price: "$400", img: tableImg },
    { id: 3, name: "Chair", price: "$50", img: chairImg },
  ];

  return (
    <section id="products" className="products-section">
      <h2>Our Products</h2>
      <div className="product-list">
        {furniture.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
