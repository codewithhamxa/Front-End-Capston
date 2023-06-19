import React from "react";
import "./Main.css";
import heroimage from "../Assets/heroimg.jpg"
import Menu from "./Menu";
import GreekSalad from "../Assets/greek salad.jpg"
import burshata from "../Assets/bursheta.png"
import lemon from "../Assets/lemon dessert.jpg"

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
            <div className="menu_cards">
                <Menu 
                    imageSrc={GreekSalad}
                    Title1= "Greek Salad"
                    Title2= "$12.99"
                    Para = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                    Link= "Order a delivery"
                />
                   
                <Menu 
                    imageSrc={burshata}
                    Title1= "Bruchetta"
                    Title2= "$5.99"
                    Para = "Our Bruschetta is very tasty and made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    Link= "Order a delivery"
                />
                <Menu 
                    imageSrc={lemon}
                    Title1= "Lemon Dessert"
                    Title2= "$5.00"
                    Para = "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    Link= "Order a delivery"
                />
            </div>
        </section>
      </main>
    </>
  );
}
export default Main;
