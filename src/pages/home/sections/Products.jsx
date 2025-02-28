import React, { useState } from 'react';
import '../../../styles/Product.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      name: "Shiitake Umami Blend", 
      price: 25.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730523/bottlepack2_y1er8v.webp", 
      description: "Rich umami flavor enhancer with premium shiitake mushrooms.",
      detailedDescription: "Our signature Shiitake Umami Blend combines premium dried shiitake mushrooms with carefully selected herbs and spices. This blend brings out the natural savory umami flavor in any dish, making it perfect for soups, stews, and marinades.",
      ingredients: "Dried shiitake mushrooms, organic herbs, garlic powder, onion powder, sea salt",
      usage: "Add 1-2 teaspoons to soups, stews, or marinades. Can be used as a seasoning before or during cooking.",
      weight: "50g",
    },
    { 
      name: "Porcini Truffle Seasoning", 
      price: 29.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730524/kraftpack2_qxg6rr.webp", 
      description: "Luxurious blend of porcini and black truffle.",
      detailedDescription: "A premium blend featuring dried porcini mushrooms and black truffle essence. This sophisticated combination adds depth and earthy richness to any dish, perfect for pasta, risotto, and grilled meats.",
      ingredients: "Dried porcini mushrooms, black truffle powder, Mediterranean herbs, mineral-rich sea salt",
      usage: "Use sparingly as a finishing spice or during cooking. Perfect for pasta, risotto, and meat dishes.",
      weight: "45g",
    },
    { 
      name: "Maitake Wellness Mix", 
      price: 27.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack1_f1lhyo.webp", 
      description: "Immune-boosting blend with maitake mushrooms.",
      detailedDescription: "Our Maitake Wellness Mix combines the health benefits of maitake mushrooms with complementary herbs. Known for its immune-boosting properties, this blend adds both flavor and nutritional value to your meals.",
      ingredients: "Dried maitake mushrooms, turmeric, black pepper, ginger, herbs",
      usage: "Add to soups, stews, or grain dishes. Can be used in teas or broths for an immunity boost.",
      weight: "55g",
    },
    { 
      name: "Reishi Calm Seasoning", 
      price: 24.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack3_rbstrq.webp", 
      description: "Stress-relieving blend with reishi mushrooms.",
      detailedDescription: "A unique blend featuring reishi mushrooms, known for their stress-relieving properties. Combined with calming herbs, this seasoning adds a subtle earthy flavor while promoting relaxation.",
      ingredients: "Dried reishi mushrooms, lavender, chamomile, lemon balm, pink Himalayan salt",
      usage: "Perfect for evening meals, teas, and broths. Use 1-2 teaspoons per serving.",
      weight: "50g",
    },
    { 
      name: "Lion's Mane Focus Blend", 
      price: 26.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730524/kraftpack2_qxg6rr.webp", 
      description: "Cognitive-enhancing blend with Lion's Mane.",
      detailedDescription: "Featuring Lion's Mane mushroom, known for supporting cognitive function and mental clarity. This blend combines brain-boosting mushrooms with aromatic herbs for a delicious and functional seasoning.",
      ingredients: "Dried Lion's Mane mushroom, rosemary, sage, thyme, sea salt",
      usage: "Add to morning smoothies, breakfast dishes, or any meal. Can be used in teas or coffee.",
      weight: "45g",
    },
    { 
      name: "Cordyceps Energy Spice", 
      price: 28.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack1_f1lhyo.webp", 
      description: "Energizing blend with cordyceps mushrooms.",
      detailedDescription: "A revitalizing blend featuring cordyceps mushrooms, known for enhancing energy and stamina. Perfect for active individuals looking to add both flavor and function to their meals.",
      ingredients: "Dried cordyceps mushrooms, cayenne, ginger, cinnamon, natural spices",
      usage: "Add to pre-workout smoothies, energy bowls, or any dish needing a boost.",
      weight: "50g",
    },
    { 
      name: "Chaga Antioxidant Mix", 
      price: 23.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730523/bottlepack2_y1er8v.webp", 
      description: "Antioxidant-rich blend with chaga mushrooms.",
      detailedDescription: "Our antioxidant-rich blend features chaga mushrooms, known as the 'King of Medicinal Mushrooms.' This mix provides powerful antioxidant support while adding a rich, earthy flavor to your dishes.",
      ingredients: "Dried chaga mushrooms, cacao, cinnamon, vanilla, natural herbs",
      usage: "Perfect for hot beverages, smoothies, and desserts. Can be used in both sweet and savory dishes.",
      weight: "50g",
    },
    { 
      name: "Oyster Mushroom Seasoning", 
      price: 25.99, 
      image: "https://res.cloudinary.com/dbyeirmqw/image/upload/v1740730526/kraftpack3_rbstrq.webp", 
      description: "Versatile blend with oyster mushrooms.",
      detailedDescription: "A versatile seasoning featuring oyster mushrooms, known for their delicate flavor and nutritional benefits. This everyday blend adds a subtle umami taste to any dish while providing essential nutrients.",
      ingredients: "Dried oyster mushrooms, garlic, herbs, mineral-rich sea salt",
      usage: "Use as an all-purpose seasoning for vegetables, meats, or any savory dish.",
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
