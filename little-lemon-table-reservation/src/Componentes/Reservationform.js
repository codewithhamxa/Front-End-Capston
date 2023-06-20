import React, { useReducer } from "react";
import "./Reservationform.css";

const initialState = {
  selectedDate: "",
  selectedTime: "",
  numberOfGuests: 1,
  selectedOccasion: "",
  seatingOption: "Standard",
};
function Reservationform({
  formState,
  availableTimes,
  onFormChange,
  onSubmit,
  setAvailableTimes,
}) {
  const { selectedDate } = formState;

  const handleFormChange = (field, value) => {
    onFormChange(field, value);
    if (field === "UPDATE_DATE") {
      // Update available times based on the selected date
      const updatedTimes = getAvailableTimes(value);
      setAvailableTimes(updatedTimes);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const getAvailableTimes = (date) => {
    // Replace this logic with your own implementation to fetch available times based on the selected date
    // Example: Assume available times are stored in a data structure or fetched from an API
    // Return the available times for the selected date
    // For demonstration purposes, the available times will be hardcoded here

    const availableTimesByDate = {
      "2023-06-20": ["17:00", "18:00", "19:00", "20:00"],
      "2023-06-21": ["18:00", "19:00", "20:00", "21:00"],
      "2023-06-22": ["19:00", "20:00", "21:00", "22:00"],
    };

    return availableTimesByDate[date] || [];
  };
  return (
    <section className="reserve_section">
      <div className="reserve_form">
        <form onSubmit={onSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            name="selectedDate"
            onChange={(e) => onFormChange("selectedDate", e.target.value)}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="selectedTime"
            onChange={(e) => onFormChange("selectedTime", e.target.value)}
          >
            <optgroup label="Choose time">
              {availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </optgroup>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="numberOfGuests"
            onChange={(e) => onFormChange("numberOfGuests", e.target.value)}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="selectedOccasion"
            onChange={(e) => onFormChange("selectedOccasion", e.target.value)}
          >
            <optgroup label="Occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
            </optgroup>
          </select>
          <h3 className="seating_opt">Seating Options</h3>
          <label>
            <input
              type="radio"
              id="standard"
              name="seating-option"
              value="Standard"
              onChange={(e) => onFormChange("seatingOption", e.target.value)}
            />
            Standard
          </label>
          <label>
            <input
              type="radio"
              id="outside"
              name="seating-option"
              value="Outside"
              onChange={(e) => onFormChange("seatingOption", e.target.value)}
            />
            Outside
          </label>
          <button className="btn">Book Now</button>
        </form>
      </div>
    </section>
  );
}

export default Reservationform;
