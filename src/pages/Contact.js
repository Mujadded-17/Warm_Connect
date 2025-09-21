import React from "react";
import "../css/contact.css";

export default function Contact() {
  const founders = [
    { name: "Silvia Alam", email: "silviaalam134@gmail.com" },
    { name: "Mujadded Morshed Chowdhury", email: "mujadded@example.com" },
    { name: "Samprity Haque", email: "samprity@example.com" },
    { name: "Rubai Raihan", email: "rubai@example.com" },
  ];

  return (
    <div className="contact-container">
      <h2>Contact Our Founders</h2>
      <div className="founders-grid">
        {founders.map((f, idx) => (
          <div className="founder-card" key={idx}>
            <h3>{f.name}</h3>
            <p>
              <a href={`mailto:${f.email}`}>{f.email}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
