import React from "react";
import { Booking } from "../../models/bookingModel";

interface BookingItemProps {
    booking: Booking;
    onDelete: (id: number) => void;
    onEdit: (booking: Booking) => void;
}

const BookingItem: React.FC<BookingItemProps> = ({ booking, onDelete, onEdit }) => (
    <div key={booking.id} data-booking-id={booking.id} className='booking-item'>
        {booking.name} - {booking.date}
        <button onClick={() => booking.id && onDelete(booking.id)}>Delete</button>
        <button onClick={() => onEdit(booking)}>Edit</button>
    </div>
);

export default BookingItem;