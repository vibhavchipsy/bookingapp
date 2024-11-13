import { getBookings, getBookingsById, createBooking, updateBooking, deleteBooking } from "../services/bookingService"
import { Booking } from "../models/bookingModel"

export const fetchAllBookings = async (): Promise<Booking[]> => {
    try {
        const response = await getBookings();
        return response.data;
    } catch (error) {
        throw error;
    }
}