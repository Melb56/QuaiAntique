import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css"; 
const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date); 
    console.log("Date sélectionnée :", date);
  };

  return (
    <div className="calendar-container">
      <h2>Choisissez une date :</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <p>Date sélectionnée : {selectedDate.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;