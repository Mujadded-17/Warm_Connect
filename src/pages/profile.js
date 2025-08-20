import React from "react";
import "../css/profile.css"; // External CSS file

const ProfilePage = () => {
  // Static data for now — replace with database values later
  const user = {
    name: "Sophia Carter",
    location: "San Francisco, CA",
    bio: "Passionate about supporting education and environmental causes.",
    email: "sophia.carter@email.com",
    phone: "(555) 123-4567",
    avatar: "https://via.placeholder.com/120" // Replace with actual user image
  };

  const donationHistory = [
    { date: "03/15/2024", recipient: "Local School Library", amount: "$100", status: "Completed" },
    { date: "02/20/2024", recipient: "Environmental Cleanup Project", amount: "$50", status: "Completed" },
    { date: "01/10/2024", recipient: "Community Food Bank", amount: "$75", status: "Completed" },
    { date: "12/05/2023", recipient: "Animal Shelter", amount: "$25", status: "Completed" },
    { date: "11/18/2023", recipient: "Disaster Relief Fund", amount: "$150", status: "Completed" }
  ];

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <img src={user.avatar} alt={user.name} className="profile-avatar" />
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
            {donationHistory.map((donation, index) => (
              <tr key={index}>
                <td>{donation.date}</td>
                <td>{donation.recipient}</td>
                <td>{donation.amount}</td>
                <td><span className="status-badge">{donation.status}</span></td>
              </tr>
            ))}
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
