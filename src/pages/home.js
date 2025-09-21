import React from "react";
import "../css/home.css";
import Footer from "../components/footer";
import { Link } from "react-router-dom"; 
import ImpactStats from "../components/ImpactStats";

export default function Home() {
  return (
    <main className="wc-home">
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
            <Link to="/post" className="btn1">Post Donation</Link>
            <Link to="/browse" className="btn2">Browse Donation</Link>
          </div>
        </div>
        <div className="hero__right">
          <img src="/images/hero.png" alt="Helping hands" />
        </div>
      </section>

      <ImpactStats />

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
      <section id="testimonials" className="testimonials">
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

      <section id="donate" className="cta-split">
        <div className="cta__left">
          <span className="rule" />
          <h2>
            Kindness Begins With <br />
            <span className="highlight">One Click</span>
          </h2>
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
