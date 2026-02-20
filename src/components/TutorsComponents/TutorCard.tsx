import Link from 'next/link';
import { ITutorProfile } from '@/interfaces/tutor.interface';

interface Props {
  tutor: ITutorProfile;
}

const TutorCard = ({ tutor }: Props) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">
        {tutor.bio || 'Professional Tutor'}
      </h3>

      <p className="text-yellow-500 font-medium mb-2">
        ⭐ {tutor.rating.toFixed(1)}
      </p>

      <p className="text-blue-600 font-bold mb-4">${tutor.hourlyRate}/hr</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tutor.subjects.map(sub => (
          <span
            key={sub.id}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
          >
            {sub.category.name}
          </span>
        ))}
      </div>

      <Link
        href={`/tutors/${tutor.id}`}
        className="block text-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default TutorCard;
