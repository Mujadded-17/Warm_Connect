import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../css/DonationDetail.css";

export default function DonationDetail() {
  const { id } = useParams();
  const [donation, setDonation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/donations/${id}`);
        if (res.data.ok) setDonation(res.data.donation);
      } catch (err) {
        console.error("Error fetching donation:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDonation();
  }, [id]);

  if (loading) return <p>Loading donation details...</p>;
  if (!donation) return <p>Donation not found.</p>;

  return (
    <div className="donation-detail-container">
      <h2>{donation.title}</h2>
      <div className="donation-detail-content">
        <img
          src={`http://localhost:5000/${donation.image}`}
          alt={donation.title}
          className="donation-detail-image"
        />
        <div className="donation-info">
          <p><strong>Description:</strong> {donation.description}</p>
          <p><strong>Donor:</strong> {donation.firstName} {donation.lastName}</p>
          <p><strong>Email:</strong> {donation.email}</p>
          <p><strong>Phone:</strong> {donation.phone}</p>
          <p><strong>Address:</strong> {donation.address}</p>
          <p><strong>Option:</strong> {donation.option}</p>
          <p><strong>Category:</strong> {donation.category}</p>
        </div>
      </div>

      <Link to="/browse" className="back-btn">
        Back to Browse
      </Link>
    </div>
  );
}
