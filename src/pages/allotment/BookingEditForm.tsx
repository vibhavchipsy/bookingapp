import React from "react";
import { Booking } from "../../models/bookingModel";

// interface BookingEditFormProps {
//     booking: Booking;
//     onSubmitEdit: (event: React.FormEvent) => void;
//     setCurrentBooking: (booking: Booking | null) => void;
// }

// const BookingEditForm: React.FC<BookingEditFormProps> = ({ booking, onSubmitEdit, setCurrentBooking }) => {
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = event.target;
//         setCurrentBooking({ ...booking, [name]: value });
//     };

//     return (
//         <form onSubmit={onSubmitEdit} className='booking-form'>
//             <input
//                 type='text'
//                 value={booking.name}
//                 onChange={handleChange}
//             />
//             <input
//                 type='date'
//                 value={booking.date}
//                 onChange={handleChange}
//             />
//             <button type='submit'>Save Changes</button>
//         </form>
//     );
// };

interface BookingEditFormProps {
    currentBooking: Booking;
    handleSubmitEdit: (event: React.FormEvent) => void;
    setCurrentBooking: (booking: Booking | null) => void;
}

const BookingEditForm: React.FC<BookingEditFormProps> = ({ currentBooking, handleSubmitEdit, setCurrentBooking }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCurrentBooking({ ...currentBooking, [name]: value });
    };

    return (
        <form onSubmit={handleSubmitEdit} className='booking-form'>
            <input
                type='text'
                value={currentBooking.name}
                onChange={(e) =>
                    setCurrentBooking({ ...currentBooking, name: e.target.value })
                }
            />
            <input
                type='date'
                value={currentBooking.date}
                onChange={(e) => setCurrentBooking({ ...currentBooking, date: e.target.value })}
            />
            <button type='submit'>Save Changes</button>
        </form>
    );
};

export default BookingEditForm;