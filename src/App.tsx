import React, { useState } from 'react';
import BookingList from './components/BookingList';
import CreateBooking from './components/CreateBooking';
import './App.css';

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(0);

  const handleBookingCreated = () => {
    setRefresh((prev) => prev + 1);
  }

  return (
    <div className="App">
      <h1>Booking Management</h1>
      <CreateBooking onBookingCreated={handleBookingCreated} />
      <BookingList key={refresh} />
    </div>
  );
};

export default App;
