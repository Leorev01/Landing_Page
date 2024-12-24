'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AppointmentForm: React.FC = () => {
  const router = useRouter();
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // UK phone number pattern (starts with 07 or +44)
  const phonePattern = /^(?:\+44|0)7\d{9}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the form is valid
  const isFormValid = name && emailPattern.test(email) && phonePattern.test(phone) && message && date && time;

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message, date, time }),
      });

      if (response.ok) {
        setSuccess(true);  // Show success message
      } else {
        setError("Something went wrong. Please try again.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle success or redirect after a successful submission
  useEffect(() => {
    if (success) {
      setTimeout(() => router.push("/success"), 2000);  // Redirect to success page after 2 seconds
    }
  }, [success]);

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
        Book Your Free Consultation
      </h2>
      {error && (
        <div
          role="alert"
          aria-live="assertive"
          className="bg-red-200 text-red-800 p-4 rounded-lg mb-4 text-center"
        >
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4 text-center">
          Appointment Booked Successfully! Redirecting...
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email & Phone Inputs */}
        <div className="flex flex-row gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern={emailPattern.source}  // Client-side validation for email
              className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern={phonePattern.source}  // Client-side validation for phone
              className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tell us a bit about your project, goals, or any specific needs..."
            rows={4}
          />
        </div>

        {/* Date Picker */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            value={date || ""}
            onChange={(e) => setDate(e.target.value)}
            required
            min={today}
            className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Time Picker */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Time
          </label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a time</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
          >
            {isSubmitting ? "Submitting..." : "Book Appointment"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
