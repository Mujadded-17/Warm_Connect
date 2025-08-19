import React from 'react';
import '../css/browse.css';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Clothes', img: '/images/items/clothes.jpg' },
  { id: 2, name: 'Furniture', img: '/images/items/furniture.jpg' },
  { id: 3, name: 'Stationary', img: '/images/items/stationary.jpg' },
  { id: 4, name: 'Gadgets', img: '/images/items/gadgets.jpg' },
  { id: 5, name: 'Grains', img: '/images/items/grains.jpg' },
  { id: 6, name: 'Makeup', img: '/images/items/makeup.jpg' },
  { id: 7, name: 'Accessories', img: '/images/items/accessories.jpg' },
];

export default function Browse() {
  return (
    <div className="browse-container">
      <h2>Explore Categories</h2>

      <div className="item-list">
        {categories.map(cat => (
          <div key={cat.id} className="item-card">
            <img src={cat.img} alt={cat.name} />
            <div className="overlay">
              <span>{cat.name}</span>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="back-btn">
        Back to Home
      </Link>
    </div>
  );
}
