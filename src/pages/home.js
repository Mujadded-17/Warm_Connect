// pages/home.js
import React from "react";
import "../css/home.css";
import Footer from "../components/footer";
import { Link } from "react-router-dom"; // <-- import Link

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
            <Link to="/browse" className="btn btn--ghost">Browse Donations</Link> {/* fixed */}
            <a href="#donate" className="btn btn--primary">Post Donation</a>
          </div>
        </div>

        <div className="hero__right">
          {/* Replace with your own image in /public/images/hero.jpg */}
          <img src="/images/hero.png" alt="Helping hands" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
