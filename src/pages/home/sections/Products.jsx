import React, { useState } from 'react';
import '../../../styles/Product.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      name: "Mushroom Spice Blend A", 
      price: 25.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730523/bottlepack2_y1er8v.webp", 
      description: "A savory mix for hearty dishes.",
      detailedDescription: "Our signature mushroom spice blend combines carefully selected mushroom varieties with premium herbs and spices. Perfect for enhancing soups, stews, and meat dishes. Rich in umami flavor and natural nutrients.",
      ingredients: "Dried mushrooms, organic herbs, natural spices, sea salt",
      usage: "Add 1-2 teaspoons to your dishes while cooking. Can be used as a seasoning before or during cooking.",
      weight: "50g",
    },
    { 
      name: "Mushroom Spice Blend B", 
      price: 29.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730524/kraftpack2_qxg6rr.webp", 
      description: "Perfect for soups and stews.",
      detailedDescription: "A premium blend crafted for soup lovers. This unique combination brings depth and richness to any broth-based dish. Enhanced with aromatic herbs for a complete flavor profile.",
      ingredients: "Premium mushroom mix, aromatic herbs, natural seasonings, mineral-rich sea salt",
      usage: "Stir into soups and stews while simmering. Can also be used as a flavor boost for gravies.",
      weight: "60g",
    },
    { 
      name: "Mushroom Spice Blend C", 
      price: 27.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack1_f1lhyo.webp", 
      description: "Adds a bold flavor to grills.",
      detailedDescription: "A robust blend perfect for grilling enthusiasts. This special mix adds a smoky, umami-rich flavor to any grilled dish. Ideal for marinades and dry rubs.",
      ingredients: "Smoked mushroom blend, grilling spices, natural herbs, mineral salt",
      usage: "Use as a dry rub before grilling or add to marinades. Sprinkle on meats before or after cooking.",
      weight: "55g",
    },
    { 
      name: "Mushroom Spice Blend D", 
      price: 24.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack3_rbstrq.webp", 
      description: "A versatile blend for everyday use.",
      detailedDescription: "Our most versatile blend, perfect for everyday cooking. This all-purpose seasoning adds a delicious umami flavor to any dish. Great for vegetables, meats, and pasta.",
      ingredients: "Mixed mushroom powder, everyday spices, herbs, sea salt",
      usage: "Use in any dish that needs a flavor boost. Perfect for seasoning during cooking.",
      weight: "50g",
    },
    { 
      name: "Mushroom Spice Blend E", 
      price: 26.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730524/kraftpack2_qxg6rr.webp", 
      description: "A versatile blend for everyday use.",
      detailedDescription: "A unique blend featuring exotic mushroom varieties. This premium mix brings sophisticated flavors to your dishes. Perfect for special occasions and gourmet cooking.",
      ingredients: "Exotic mushroom blend, premium spices, rare herbs, pink Himalayan salt",
      usage: "Use sparingly as a finishing spice or during cooking for special dishes.",
      weight: "45g",
    },
    { 
      name: "Mushroom Spice Blend F", 
      price: 28.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack1_f1lhyo.webp", 
      description: "A versatile blend for everyday use.",
      detailedDescription: "A delicate blend designed for vegetarian and vegan dishes. Enhances the natural flavors of vegetables while adding a rich umami taste.",
      ingredients: "Vegetable-friendly mushroom mix, garden herbs, natural spices, sea salt",
      usage: "Perfect for seasoning vegetable dishes, stir-fries, and plant-based meals.",
      weight: "50g",
    },
    { 
      name: "Mushroom Spice Blend G", 
      price: 23.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730523/bottlepack2_y1er8v.webp", 
      description: "A versatile blend for everyday use.",
      detailedDescription: "Our economy-sized blend perfect for frequent cooks. This reliable mix adds wonderful flavor to any dish while being budget-friendly.",
      ingredients: "Classic mushroom blend, essential spices, dried herbs, sea salt",
      usage: "Use generously in any dish that needs extra flavor. Great for bulk cooking.",
      weight: "75g",
    },
    { 
      name: "Mushroom Spice Blend H", 
      price: 25.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack3_rbstrq.webp", 
      description: "A versatile blend for everyday use.",
      detailedDescription: "A low-sodium option that doesn't compromise on taste. This special blend uses potassium-rich mushrooms and herbs to create full flavors without excess salt.",
      ingredients: "Low-sodium mushroom blend, salt-free spices, natural herbs, potassium chloride",
      usage: "Use as a healthy alternative to regular seasonings. Perfect for salt-conscious cooking.",
      weight: "50g",
    },
  ];

  return (
    <div id="products" className="product-section">
      <div className="product-container">
        <h2 className="section-title">Our <span className="highlight-span">Products</span></h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card"
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">GH₵ {product.price}</p>
              <a 
                href="https://paystack.shop/fatimush-natural-spice-shop" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="buy-now-button">Buy Now</button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="product-popup-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={() => setSelectedProduct(null)}>&times;</button>
            <div className="popup-content">
              <div className="popup-image-container">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="popup-details">
                <h2>{selectedProduct.name}</h2>
                <p className="popup-price">GH₵ {selectedProduct.price}</p>
                <div className="popup-section">
                  <h3>Description</h3>
                  <p>{selectedProduct.detailedDescription}</p>
                </div>
                <div className="popup-section">
                  <h3>Ingredients</h3>
                  <p>{selectedProduct.ingredients}</p>
                </div>
                <div className="popup-section">
                  <h3>Usage</h3>
                  <p>{selectedProduct.usage}</p>
                </div>
                <div className="popup-section">
                  <h3>Net Weight</h3>
                  <p>{selectedProduct.weight}</p>
                </div>
                <a 
                  href="https://paystack.shop/fatimush-natural-spice-shop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="buy-now-button">Buy Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
