import React from "react";
import "./styles/Hero.css";
import videoHero from "../assets/Rain-and-Blue.mp4"

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-frame">
        <div className="overlay"></div>
        <video src={videoHero} autoPlay loop muted disablePictureInPicture>
        </video>
        <div className="hero-background-blur">
            content
        </div>
      </div>
    </section>
  );
}
