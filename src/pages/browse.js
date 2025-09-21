import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/browse.css";

// Category images
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
  const [donations, setDonations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewingItems, setViewingItems] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/donations");
        if (res.data.ok) setDonations(res.data.donation || []);
      } catch (err) {
        console.error("Error fetching donations:", err);
      }
    };
    fetchDonations();
  }, []);

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedDonations = donations.filter(d => d.category === selectedCategory);

  return (
    <div className="browse-container">
      <h2>Explore Categories</h2>

      {!viewingItems && (
        <>
          <div className="filters">
            <input
              type="text"
              placeholder="Search category..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedCategory}
              onChange={e => {
                setSelectedCategory(e.target.value);
                if (e.target.value) setViewingItems(true);
              }}
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="item-list">
            {filteredCategories.length > 0 ? (
              filteredCategories.map(cat => {
                const catDonations = donations.filter(d => d.category === cat.name);

                return (
                  <div
                    key={cat.id}
                    className="item-card"
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setViewingItems(true);
                    }}
                  >
                    <img src={cat.img} alt={cat.name} />
                    <div className="overlay">
                      <strong>{cat.name}</strong>
                      <br />
                      {catDonations.length > 0 ? (
                        <span>{catDonations.length} item(s) available</span>
                      ) : (
                        <span>No items</span>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No categories match your search.</p>
            )}
          </div>
        </>
      )}

      {viewingItems && (
        <div>
          <h2>
            <span className="category-title">{selectedCategory} Donations</span>
          </h2>

          <div className="item-list viewing-items">
            {selectedDonations.length > 0 ? (
              selectedDonations.map(d => (
                <div
                  key={d._id}
                  className="item-card"
                  onClick={() => navigate(`/donation/${d._id}`)} // navigate to detail
                >
                  <img src={`http://localhost:5000/${d.image}`} alt={d.title} />
                  <div className="overlay">
                    <strong>{d.title}</strong>
                    <p>{d.description}</p> {/* ✅ description displayed */}
                    <br />
                    {d.firstName} {d.lastName}
                  </div>
                </div>
              ))
            ) : (
              <p className="no-items">No items in this category yet.</p>
            )}
          </div>

          <button className="back-btn" onClick={() => setViewingItems(false)}>
            Back to Categories
          </button>
        </div>
      )}

      {!viewingItems && (
        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      )}
    </div>
  );
}
