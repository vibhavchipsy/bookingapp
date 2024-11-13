import api from "../api";
import { Axios, AxiosResponse } from "axios";
import { Booking } from "../models/bookingModel";

export const getBookings = async (): Promise<AxiosResponse<Booking[]>> => {
    return await api.get('/bookings');
}

export const getBookingsById = async (id: number): Promise<AxiosResponse<Booking[]>> => {
    return await api.get(`/bookings/${id}`);
}

export const createBooking = async (data: Booking): Promise<AxiosResponse<Booking[]>> => {
    return await api.post('/bookings', data);
}

export const updateBooking = async (id: number, data: Booking): Promise<AxiosResponse<Booking[]>> => {
    return await api.put(`/bookings/${id}`, data);
}

export const deleteBooking = async (id: number): Promise<AxiosResponse<Booking[]>> => {
    return await api.delete(`/bookings/${id}`);;
}