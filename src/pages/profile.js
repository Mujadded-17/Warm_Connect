import React, { useEffect, useState } from "react";
import "../css/profile.css";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [donationHistory, setDonationHistory] = useState([]);

  useEffect(() => {
    // Grab token from localStorage (saved during login)
    const token = localStorage.getItem("token");

    if (!token) return; // user not logged in

    // Fetch user profile
    fetch("http://localhost:5000/api/me", {
  headers: { Authorization: `Bearer ${token}` }
})

      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);             // assuming backend returns { user: {...} }
        setDonationHistory(data.donations || []);
      })
      .catch((err) => console.error("Error loading profile:", err));
  }, []);

  if (!user) {
    return <p>Loading profile...</p>; // or redirect to login
  }

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <img src={user.avatar || "https://via.placeholder.com/120"} alt={user.name} className="profile-avatar" />
        <h2>{user.name}</h2>
        <p className="location">{user.location}</p>
        <p className="bio">{user.bio}</p>
      </div>

      {/* Donation History */}
      <div className="profile-section">
        <h3>Donation History</h3>
        <table className="donation-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Recipient</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {donationHistory.length > 0 ? (
              donationHistory.map((donation, index) => (
                <tr key={index}>
                  <td>{donation.date}</td>
                  <td>{donation.recipient}</td>
                  <td>{donation.amount}</td>
                  <td><span className="status-badge">{donation.status}</span></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No donations yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Contact Info */}
      <div className="profile-section">
        <h3>Contact Information</h3>
        <div className="contact-item">
          <strong>Email</strong>
          <p>{user.email}</p>
        </div>
        <div className="contact-item">
          <strong>Phone</strong>
          <p>{user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
