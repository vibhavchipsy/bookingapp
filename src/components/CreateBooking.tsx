import React, { useState } from 'react';
import { Booking, createBooking } from '../services/bookingService';

interface CreateBookingProps {
    onBookingCreated: () => void;
}

const CreateBooking: React.FC<CreateBookingProps> = ({ onBookingCreated }) => {
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newBooking: Booking = { name, date };
        await createBooking(newBooking);
        onBookingCreated();
        setName('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Create Booking</h3>
            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
            <button type='submit'>Create</button>
        </form>
    );
};

export default CreateBooking;