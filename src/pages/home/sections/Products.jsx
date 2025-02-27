import React from 'react';
import '../../../styles/Product.css';

const Products = () => {
  return (
    <div id="products" className="product-section">
      <div className="product-container">
        <h2 className="section-title">Our Products</h2>
        <div className="product-grid">
          {[
            { name: "Mushroom Spice Blend A", image: "src/assets/IMG-20250225-WA0004.jpg", description: "A savory mix for hearty dishes." },
            { name: "Mushroom Spice Blend B", image: "src/assets/bottlepack1.webp", description: "Perfect for soups and stews." },
            { name: "Mushroom Spice Blend C", image: "src/assets/bottlepack2.webp", description: "Adds a bold flavor to grills." },
            { name: "Mushroom Spice Blend D", image: "src/assets/kraftpack1.webp", description: "A versatile blend for everyday use." },
            { name: "Mushroom Spice Blend E", image: "src/assets/kraftpack2.webp", description: "A versatile blend for everyday use." },
            { name: "Mushroom Spice Blend F", image: "src/assets/kraftpack3.webp", description: "A versatile blend for everyday use." },
            { name: "Mushroom Spice Blend G", image: "src/assets/bottlepack1.webp", description: "A versatile blend for everyday use." },
            { name: "Mushroom Spice Blend H", image: "src/assets/kraftpack1.webp", description: "A versatile blend for everyday use." },
          ].map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Products;
