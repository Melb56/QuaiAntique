import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/pages/_reservation.css';

const ReservationForm = () => {
    const [date, setDate] = useState(new Date());
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      guests: 1,
    });
  
    const handleDateChange = (selectedDate) => {
      setDate(selectedDate);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, name, value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Réservation confirmée pour le ${date.toDateString()} par ${formData.name}`);
    };
    return (
        <div className="reservation">
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} />
        <p>Date sélectionnée : {date.toDateString()}</p>
      </div>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <label>
          Nom complet 
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email 
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Nombre de convives 
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            min="1"
            max="10"
            required
          />
        </label>
        <button className="button" type="submit">Réserver</button>
      </form>
    </div>
    );
};

export default ReservationForm;