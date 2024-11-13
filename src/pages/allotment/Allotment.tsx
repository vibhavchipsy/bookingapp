// BookingList.tsx
import React, { useEffect, useState } from 'react';
import { useBookings } from '../../hooks/useBookings';
import BookingSearch from './BookingSearch';

const BookingList: React.FC = () => {

    const {
        bookings,
        currentBooking,
        loading,
        searchQuery,
        handleDelete,
        handleEdit,
        handleSubmitEdit,
        handleSearchChange,
        setCurrentBooking,
    } = useBookings();

    return (
        <div>
            <h2>All Bookings</h2>

            {/* search input for filtering */}
            <BookingSearch searchQuery={searchQuery} onSearchChange={handleSearchChange} />

            <ul>
                {bookings.map((booking) => (
                    <div key={booking.id} data-booking-id={booking.id} className='booking-item'>
                        {booking.name} - {booking.date}
                        <button onClick={() => booking.id && handleDelete(booking.id)}>Delete</button>
                        <button onClick={() => handleEdit(booking)}>Edit</button>
                    </div>
                ))}
            </ul>

            {loading && <p>Loading...</p>} {/* Show loading text */}

            {currentBooking &&
                <form onSubmit={handleSubmitEdit} className='booking-form'>
                    <input
                        type='text'
                        value={currentBooking.name}
                        onChange={(e) =>
                            setCurrentBooking({ ...currentBooking, name: e.target.value })
                        }
                    />
                    <input
                        type='date'
                        value={currentBooking.date}
                        onChange={(e) => setCurrentBooking({ ...currentBooking, date: e.target.value })}
                    />
                    <button type='submit'>Save Changes</button>
                </form>
            }
        </div>
    );
};

export default BookingList;
