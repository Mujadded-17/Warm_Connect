import React from "react";
import "../css/contact.css";
import Footer from "../components/footer";

export default function Contact() {
  const founders = [
    { name: "Silvia Alam", email: "silvia150@gmail.com" },
    { name: "Mujadded Morshed Chowdhury", email: "mujadded149@gmail.com" },
    { name: "Samprity Haque", email: "samprity151@gmail.com" },
    { name: "Rubai Raihan", email: "rubai143@gmail.com" },
  ];

  return (
    <>
      <div className="contact-container">
        <h2 className="contact-title">Need Assistance? Contact Us</h2>
        <p className="contact-subtitle">
          Reach out to our team for support, inquiries, or suggestions.
        </p>

        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-email">
                <a href={`mailto:${founder.email}`}>{founder.email}</a>
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
