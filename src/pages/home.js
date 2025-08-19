import React from "react";
import "../css/home.css";
import Footer from "../components/footer";

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
            <a href="#donate" className="btn1">Post Donation</a>
            <a href="#browse" className="btn2">Browse Donation</a>
          </div>
        </div>

        <div className="hero__right">
          {/* Replace with your own image in /public/images/hero.jpg */}
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
          <div className="stat__num">50K</div>
          <div className="stat__label">Collaborations</div>
        </div>
        <div className="stat">
          <div className="stat__num">370K</div>
          <div className="stat__label">Donations</div>
        </div>
      </section>




      <Footer />
    </main>
  );
}
