import { ITutorProfile } from '@/interfaces/tutor.interface';
import BookingButton from './BookingButton';

interface Props {
  tutor: ITutorProfile;
}

const TutorDetailsSection = ({ tutor }: Props) => {
  return (
    <div className="grid md:grid-cols-3 gap-16">
      {/* Left Info */}
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold mb-6">
          {tutor.bio || 'Professional Tutor'}
        </h1>

        <p className="text-yellow-500 text-lg mb-4">
          ⭐ {tutor.rating.toFixed(1)}
        </p>

        <p className="text-gray-700 mb-8">
          Experienced tutor ready to help you grow your skills.
        </p>

        {/* Subjects */}
        <div className="mb-10">
          <h3 className="font-semibold mb-4 text-xl">Subjects</h3>
          <div className="flex flex-wrap gap-3">
            {tutor.subjects.map(sub => (
              <span
                key={sub.id}
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full"
              >
                {sub.category.name}
              </span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <h3 className="font-semibold mb-4 text-xl">Availability</h3>
          <div className="space-y-3">
            {tutor.availability.map(slot => (
              <div
                key={slot.id}
                className="bg-slate-100 p-4 rounded-xl flex justify-between"
              >
                <span>{slot.day}</span>
                <span>
                  {slot.start} - {slot.end}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Card */}
      <div className="bg-white shadow-lg p-8 rounded-2xl h-fit">
        <p className="text-2xl font-bold text-blue-600 mb-6">
          ${tutor.hourlyRate}/hr
        </p>

        <BookingButton tutorId={tutor.id} />
      </div>
    </div>
  );
};

export default TutorDetailsSection;
