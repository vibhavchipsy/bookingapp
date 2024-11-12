// BookingList.tsx
import React, { useEffect, useState } from 'react';
import { Booking, getBookings, deleteBooking } from '../services/bookingService';

const BookingList: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {
        const response = await getBookings();
        setBookings(response.data);
    };

    const handleDelete = async (id: number) => {
        await deleteBooking(id);
        loadBookings(); // Refresh the list after deletion
    };

    return (
        <div>
            <h2>Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        {booking.name} - {booking.date}
                        <button onClick={() => booking.id && handleDelete(booking.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;
