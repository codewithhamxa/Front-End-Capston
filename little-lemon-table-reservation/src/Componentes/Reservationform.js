import React from "react";
import "./Reservationform.css";
import Select from "react-select";

function Reservationform() {
  return (
    <section className="reserve_section">
      <div className="reserve_form">
        <div className="date_time">
          <input type="date" placeholder="Date" />
          <input type="time" placeholder="Time" />
        </div>
        <div className="dinners">
          <Select
            id="dinners"
            name="dinners"
            placeholder="No of Dinners"
            options={[
              { value: "Two", label: "Two" },
              { value: "Four", label: "Four" },
              { value: "Six", label: "Six" },
              { value: "Eight", label: "Eight" },
            ]}
            className="select-input"
          />
        </div>
        <div className="occasion">
          <Select
            id="occasion"
            name="occasion"
            placeholder="Occasion"
            options={[
              { value: "Birthday", label: "Birthday" },
              { value: "Engagement", label: "Engagement" },
              { value: "Anniversary", label: "Anniversary" },
            ]}
            className="select-input"
          />
        </div>

        <div className="option_heading">
          <h3>Seating Options</h3>
        </div>

        <div className="seating-options">
          <label>
            <input
              type="radio"
              id="standard"
              name="seating-option"
              value="Standard"
            />
            Standard
          </label>
          <label>
            <input
              type="radio"
              id="outside"
              name="seating-option"
              value="Outside"
            />
            Outside
          </label>
        </div>

        <div className="button">
          <button className="btn">Let's go</button>
        </div>
      </div>
    </section>
  );
}

export default Reservationform;
