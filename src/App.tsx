import React, { useState } from 'react';
import BookingList from './components/BookingList';
import CreateBooking from './components/CreateBooking';
import './App.css';

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleBookingCreated = () => {
    setRefresh(!refresh);
  }

  return (
    <div className="App">
      <h1>Booking Management</h1>
      <BookingList />
    </div>
  );
};

export default App;
