import React from "react";
import "./styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
          <div className="description-hero">
            <h1 className="h1-hero">
              Lorem Ipsum 
            </h1>
            <h3 className="h3-hero">
              sub title
            </h3>
            <p className="desc-hero">
              Lorem Ipsum is a dummy text commonly used in the printing and typesetting industry. It has been the industry's standard placeholder text since the 1500s, when an unknown printer scrambled a galley of type to create a type specimen book. It features scrambled Latin text, emphasizing design over content, and is widely used in graphic design and publishing to preview layouts.
            </p>
          </div>
          <p className="image">
            image
          </p>
      </div>
    </section>
  );
}
