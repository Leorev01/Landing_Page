import { NextResponse } from 'next/server';

interface BookingRequest {
    name: string;
    email: string;
    selectedDate: string;
    selectedTime: string;
}

interface BookingResponse {
    message: string;
    booking?: BookingRequest;
}

export async function POST(req: Request): Promise<NextResponse<BookingResponse>> {
    try {
        // Parse the incoming request (assuming it's a JSON object)
        const { name, email, selectedDate, selectedTime }: BookingRequest = await req.json();

        // Add your backend logic here, e.g., store in a database, send an email, etc.
        // For example, using a dummy response for now
        const bookingDetails: BookingRequest = { name, email, selectedDate, selectedTime };

        // Log or process the booking data
        console.log('New booking:', bookingDetails);

        // You can replace this with actual database logic or third-party API calls

        // Respond back with success
        return NextResponse.json({ message: 'Booking confirmed!', booking: bookingDetails }, { status: 200 });
    } catch (error) {
        console.error('Error processing booking:', error);
        return NextResponse.json({ message: 'Failed to book meeting' }, { status: 500 });
    }
}
