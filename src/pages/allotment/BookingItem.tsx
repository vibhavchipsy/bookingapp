import React from "react";
import { Booking } from "../../models/bookingModel";

interface BookingItemProps {
    booking: Booking;
    onDelete: (id: string) => void;
    onEdit: (booking: Booking) => void;
}

const BookingItem: React.FC<BookingItemProps> = ({ booking, onDelete, onEdit }) => (
    <div key={booking._id} data-booking-id={booking._id} className='booking-item'>
        {booking.name} - {booking.date}
        <button onClick={() => booking._id && onDelete(booking._id)}>Delete</button>
        <button onClick={() => onEdit(booking)}>Edit</button>
    </div>
);

export default BookingItem;