import React from 'react';
import '../../../styles/Product.css';

const Products = () => {
  return (
    <div id="products" className="product-section">
      <div className="product-container">
        <h2 className="section-title">Our Products</h2>
        <div className="product-grid">
          {[
            { name: "Mushroom Spice Blend A", image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730523/bottlepack2_y1er8v.webp", description: "A savory mix for hearty dishes." },
            { name: "Mushroom Spice Blend B", image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730524/kraftpack2_qxg6rr.webp", description: "Perfect for soups and stews." },
            { name: "Mushroom Spice Blend C", image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack1_f1lhyo.webp", description: "Adds a bold flavor to grills." },
            { name: "Mushroom Spice Blend D", image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack3_rbstrq.webp", description: "A versatile blend for everyday use." },
            { name: "Mushroom Spice Blend E", image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730524/kraftpack2_qxg6rr.webp", description: "A versatile blend for everyday use." },
            { name: "Mushroom Spice Blend F", image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack1_f1lhyo.webp", description: "A versatile blend for everyday use." },
            { name: "Mushroom Spice Blend G", image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730523/bottlepack2_y1er8v.webp", description: "A versatile blend for everyday use." },
            { name: "Mushroom Spice Blend H", image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack3_rbstrq.webp", description: "A versatile blend for everyday use." },
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
