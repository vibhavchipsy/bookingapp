import api from "../api";
import { Axios, AxiosResponse } from "axios";
import { Booking } from "../models/bookingModel";
import { bookingEndpoints } from "../endpoints/bookingEndpoints";

export const getBookings = async (): Promise<AxiosResponse<Booking[]>> => {
    return await api.get(bookingEndpoints.GET_ALL_BOOKINGS);
}

export const getBookingsById = async (id: number): Promise<AxiosResponse<Booking[]>> => {
    return await api.get(`/bookings/${id}`);
}

export const createBooking = async (bookingData: Booking): Promise<AxiosResponse<Booking>> => {
    const response = await api.post(bookingEndpoints.CREATE_BOOKING, bookingData);
    console.log(response);
    console.log('Booking created with ID:', response.data._id);
    return response;
}

export const updateBooking = async (id: string, data: Booking): Promise<AxiosResponse<Booking>> => {
    return await api.put(`${bookingEndpoints.UPDATE_BOOKING}/${id}`, data);
}

export const deleteBooking = async (id: string): Promise<AxiosResponse<Booking[]>> => {
    // return await api.delete(`/bookings/${id}`);
    return await api.delete(`${bookingEndpoints.DELETE_BOOKING}/${id}`);
}