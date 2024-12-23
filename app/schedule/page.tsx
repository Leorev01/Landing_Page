'use client'
import React, { useState } from 'react';

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  interface BookingData {
    name: string;
    email: string;
    selectedDate: string;
    selectedTime: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !clientName || !clientEmail) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Prepare booking data
      const bookingData: BookingData = {
        name: clientName,
        email: clientEmail,
        selectedDate,
        selectedTime,
      };

      // Send POST request to the API route
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Booking confirmed! We look forward to your meeting.');
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Error occurred while booking the meeting.');
    }
  };

  return (
    <div className="booking-form">
      <h1>Book a Free Meeting</h1>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
        <label>Your Email</label>
        <input
          type="email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
          required
        />
        <label>Select Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
        />
        <label>Select Time</label>
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
