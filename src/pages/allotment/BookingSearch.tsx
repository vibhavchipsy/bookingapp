import React from "react";

interface BookingSearchProps {
    searchQuery: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BookingSearch: React.FC<BookingSearchProps> = ({ searchQuery, onSearchChange }) => (
    <input
        type='text'
        placeholder='Search bookings...'
        value={searchQuery}
        onChange={onSearchChange}
    />
);

export default BookingSearch;