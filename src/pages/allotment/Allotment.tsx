// BookingList.tsx
import React, { useEffect, useState } from 'react';
import { useBookings } from '../../hooks/useBookings';
import BookingSearch from './BookingSearch';
import BookingItem from './BookingItem';

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

            <BookingSearch searchQuery={searchQuery} onSearchChange={handleSearchChange} />

            <ul>
                {bookings.map((booking) => (
                    <BookingItem key={booking.id} booking={booking} onDelete={handleDelete} onEdit={handleEdit} />
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
