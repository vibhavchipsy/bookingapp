// BookingList.tsx
import React, { useEffect, useState } from 'react';
import { Booking, getBookings, deleteBooking, updateBooking } from '../services/bookingService';
import { ToastContainer, toast } from 'react-toastify';

const BookingList: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {
        const response = await getBookings();
        setBookings(response.data);
    };

    const handleDelete = async (id: number) => {
        const confirmed = window.confirm("are you sure you want to delete this booking?");
        if (confirmed) {
            await deleteBooking(id);
            loadBookings(); // Refresh the list after deletion
            toast.error("Booking deleted!");
        }
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
            toast.info("Booking updated successfully!");
        } catch (error) {
            console.error("error updating booking: ", error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Handle search input change
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    // Filter bookings based on search query
    const filteredBookings = bookings.filter((booking) =>
        booking.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>All Bookings</h2>
            {/* search input for filtering */}
            <input
                type='text'
                placeholder='Search bookings...'
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredBookings.map((booking) => (
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
