import React, { useState } from 'react';
import { createBooking } from '../services/bookingService';
import { toast } from 'react-toastify';
import { Booking } from '../models/bookingModel';

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
        toast.success("Booking created successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className='booking-form'>
            <h3>Create Booking</h3>
            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type='date' value={date} onChange={(e) => setDate(e.target.value)} required />
            <button type='submit'>Create</button>
        </form>
    );
};

export default CreateBooking;