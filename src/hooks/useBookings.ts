import { useEffect, useState } from "react";
import { Booking } from "../models/bookingModel";
import { fetchAllBookings } from "../handlers/bookingHandler";
import { deleteBooking, updateBooking } from "../services/bookingService";
import { ToastContainer, toast } from "react-toastify";

export const useBookings = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {
        try {
            const response = await fetchAllBookings();
            setBookings(response);
        } catch (error) {
            console.error("Failed to load bookings", error);
        }
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

    return {
        bookings: filteredBookings,
        currentBooking,
        loading,
        searchQuery,
        handleDelete,
        handleEdit,
        handleSubmitEdit,
        handleSearchChange,
        setCurrentBooking,
    };
};