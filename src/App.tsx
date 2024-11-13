import React, { useState } from 'react';
import BookingList from './components/BookingList';
import CreateBooking from './components/CreateBooking';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
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
      <ToastContainer position='top-right' />
    </div>
  );
};

export default App;
