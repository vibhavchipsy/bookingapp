// BookingList.tsx
import React, { useEffect, useState } from 'react';
import { Booking, getBookings, deleteBooking, updateBooking } from '../services/bookingService';

const BookingList: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadBookings(); ations in 
    }, []);

    const loadBookings = async () => {
        const response = await getBookings();
        setBookings(response.data);
    };

    const handleDelete = async (id: number) => {
        await deleteBooking(id);
        loadBookings(); // Refresh the list after deletion
    };

    // Handle edit button click
    const handleEdit = (booking: Booking) => {
        setCurrentBooking(booking);
    };

    // Handle form submission to update the booking
    const handleSubmitEdit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!currentBooking) return;

        setLoading(true); // Start loading

        // Update the booking in the backend and the UI
        try {
            await updateBooking(currentBooking.id, currentBooking);
            setBookings((prev) => prev.map((b) => (b.id === currentBooking.id ? currentBooking : b)));
            setCurrentBooking(null); // Reset the form
        } catch (error) {
            console.error("error updating booking: ", error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div>
            <h2>Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <div key={booking.id} data-booking-id={booking.id}>
                        {booking.name} - {booking.date}
                        <button onClick={() => booking.id && handleDelete(booking.id)}>Delete</button>
                        <button onClick={() => handleEdit(booking)}>Edit</button>
                    </div>
                ))}
            </ul>

            {loading && <p>Loading...</p>} {/* Show loading text */}

            {currentBooking &&
                <form onSubmit={handleSubmitEdit}>
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
