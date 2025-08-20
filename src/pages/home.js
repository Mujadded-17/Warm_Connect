// src/pages/home.js
import React from "react";
import "../css/home.css";
import Footer from "../components/footer";
import { Link } from "react-router-dom"; // keep Link for SPA navigation

export default function Home() {
  return (
    <main className="wc-home">

      {/* ===== HERO (split) ===== */}
      <section className="hero">
        <div className="hero__left">
          <h1 className="hero__title">
            GIVE <span className="accent">WARMTH</span><br />
            RECEIVE <span className="muted">HOPE.</span>
          </h1>
          <p className="hero__text">
            A community-driven platform where people share what they can and receive what they need.
            Food, clothes, books, gadgets, support — all in one place.
          </p>

          <div className="actions">
            {/* Route to Post Donation page */}
            <Link to="/post" className="btn1">Post Donation</Link>
            {/* Route to Browse page */}
            <Link to="/browse" className="btn2">Browse Donation</Link>
          </div>
        </div>

        <div className="hero__right">
          {/* Replace with your own image in /public/images/hero.png */}
          <img src="/images/hero.png" alt="Helping hands" />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats">
        <div className="stat">
          <div className="stat__num">200M</div>
          <div className="stat__label">Humans Impacted</div>
        </div>
        <div className="stat">
          <div className="stat__num">50K+</div>
          <div className="stat__label">Collaborations</div>
        </div>
        <div className="stat">
          <div className="stat__num">370K+</div>
          <div className="stat__label">Donations</div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how">
        <h2 className="section-title">How It Works</h2>
        <div className="how__grid">
          <div className="step">
            <span className="step__dot">01</span>
            <h3>Post an Item</h3>
            <p>Share what you no longer need with a quick upload.</p>
          </div>
          <div className="divider" />
          <div className="step">
            <span className="step__dot">02</span>
            <h3>Browse &amp; Find</h3>
            <p>Explore donations by category or distance.</p>
          </div>
          <div className="divider" />
          <div className="step">
            <span className="step__dot">03</span>
            <h3>Request or Approve</h3>
            <p>One click to ask for help or approve someone’s request.</p>
          </div>
          <div className="divider" />
          <div className="step">
            <span className="step__dot">04</span>
            <h3>Connect &amp; Exchange</h3>
            <p>Chat securely, meet safely, and complete the handover.</p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <h2 className="section-title">What People Say About Us</h2>
        <div className="t-grid">
          <article className="t-card">
            <p>
              I donated my old textbooks here. A week later, I got a message from a student who used
              them to pass his exams. Knowing something small made such a big difference felt incredible.
            </p>
            <img className="t-avatar" src="/images/av-3.jpg" alt="Donor" />
          </article>

          <article className="t-card">
            <p>
              This isn’t just about giving or receiving; it’s about feeling connected. I met amazing
              people here, and every exchange feels like a small act of kindness multiplied.
            </p>
            <img className="t-avatar" src="/images/av-2.jpg" alt="Receiver" />
          </article>

          <article className="t-card">
            <p>
              I donated my old textbooks here. A week later, I got a message from a student who used
              them to pass his exams. Knowing something small made such a big difference felt incredible.
            </p>
            <img className="t-avatar" src="/images/av-1.jpg" alt="Donor" />
          </article>
        </div>
      </section>

      {/* ===== FINAL CTA (split) ===== */}
      <section id="donate" className="cta-split">
        <div className="cta__left">
          <span className="rule" />
          <h2>
            Kindness Begins With <br />
            <span className="highlight">One Click</span>
          </h2>

          {/* Use Link here too so it routes to /post */}
          <Link to="/post" className="btn3">Post Donation</Link>
        </div>
        <div className="cta__right">
          <img src="/images/cta.jpg" alt="Volunteers" />
        </div>
      </section>

      <Footer />
    </main>
  );
}


