// BookingList.tsx
import React, { useEffect, useState } from 'react';
import { useBookings } from '../../hooks/useBookings';
import BookingSearch from './BookingSearch';
import BookingItem from './BookingItem';
import BookingEditForm from './BookingEditForm';

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

            {currentBooking && (
                <BookingEditForm currentBooking={currentBooking} handleSubmitEdit={handleSubmitEdit} setCurrentBooking={setCurrentBooking}
                />)
            }
        </div>
    );
};

export default BookingList;
