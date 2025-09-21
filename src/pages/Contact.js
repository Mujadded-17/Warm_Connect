import React from "react";
import "../css/contact.css";
import Footer from "../components/footer"; // Import Footer

export default function Contact() {
  const founders = [
    { name: "Silvia Alam", email: "silviaalam134@gmail.com" },
    { name: "Mujadded Morshed Chowdhury", email: "mujadded@gmail.com" },
    { name: "Samprity Haque", email: "samprity@gmail.com" },
    { name: "Rubai Raihan", email: "rubai@gmail.com" },
  ];

  return (
    <>
      <div className="contact-container">
        <h2>For Any Help Contact With Us</h2>
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <div className="founder-img">
                {/* Placeholder for image */}
                <span>Image</span>
              </div>
              <h3>{founder.name}</h3>
              <p>{founder.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
