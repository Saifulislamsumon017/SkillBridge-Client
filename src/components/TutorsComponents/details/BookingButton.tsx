'use client';

import { fetcher } from '@/api/fetcher.api';
import { useState } from 'react';

import { toast } from 'sonner';

interface Props {
  tutorId: string;
}

const BookingButton = ({ tutorId }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    try {
      setLoading(true);

      await fetcher('/bookings', {
        method: 'POST',
        body: JSON.stringify({
          tutorId,
          date: new Date(),
        }),
      });

      toast.success('Booking request sent!');
    } catch {
      toast.error('Booking failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBooking}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? 'Processing...' : 'Book Session'}
    </button>
  );
};

export default BookingButton;
