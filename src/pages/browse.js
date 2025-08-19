import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/browse.css';

// Import images
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || cat.name === selectedCategory)
  );

  return (
    <div className="browse-container">
      <h2>Explore Categories</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search category..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div className="item-list">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(cat => (
            <div key={cat.id} className="item-card">
              <img src={cat.img} alt={cat.name} />
              <div className="overlay">{cat.name}</div>
            </div>
          ))
        ) : (
          <p>No categories match your search.</p>
        )}
      </div>

      <Link to="/" className="back-btn">
        Back to Home
      </Link>
    </div>
  );
}
