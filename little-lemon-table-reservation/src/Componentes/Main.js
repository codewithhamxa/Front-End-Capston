import React from "react";
import "./Main.css";
import heroimage from "../Assets/heroimg.jpg"

function Main() {
  return (
    <>
      <main>
        <section className="hero_section">
            <div className="hero">
            <div className="hero_details">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                We are family owned Mediterranean <br/>
                    restaurant, focused on traditional <br/>
                    recipes served with a modern twist.
                </p>
                <a href="#">Reserve a table</a>
            </div>
            <div className="hero_image">
                <img src={heroimage} />
            </div>
            </div>
        </section>
        <section className="menu_section">
            <div className="menu_title">
                <h2>This week specials!</h2>
                <a href="#">Online Menu</a>
            </div>
        </section>
      </main>
    </>
  );
}
export default Main;
