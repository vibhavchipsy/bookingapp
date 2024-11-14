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
    return await api.post(bookingEndpoints.CREATE_BOOKING, bookingData);
}

export const updateBooking = async (id: number, data: Booking): Promise<AxiosResponse<Booking[]>> => {
    return await api.put(`/bookings/${id}`, data);
}

export const deleteBooking = async (id: number): Promise<AxiosResponse<Booking[]>> => {
    return await api.delete(`/bookings/${id}`);;
}