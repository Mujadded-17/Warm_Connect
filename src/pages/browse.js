import React from 'react';
import '../css/browse.css';
import { Link } from 'react-router-dom';

// Import images from src/images folder
import clothesImg from '../images/clothes.jpeg';
import furnitureImg from '../images/furniture.jpeg';
import stationaryImg from '../images/stationary.jpeg';
import gadgetsImg from '../images/gadgets.jpeg';
import grainsImg from '../images/grains.jpg';  
import makeupImg from '../images/makeup.jpeg';
import accessoriesImg from '../images/accessories.jpeg';

const categories = [
  { id: 1, name: 'Clothes', img: clothesImg },
  { id: 2, name: 'Furniture', img: furnitureImg },
  { id: 3, name: 'Stationary', img: stationaryImg },
  { id: 4, name: 'Gadgets', img: gadgetsImg },
  { id: 5, name: 'Grains', img: grainsImg },
  { id: 6, name: 'Makeup', img: makeupImg },
  { id: 7, name: 'Accessories', img: accessoriesImg },
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
