import { ITutorProfile } from '@/interfaces/tutor.interface';
import { IReview } from '@/interfaces/review.interface';
import { fetcher } from '@/api/fetcher.api';
import TutorDetailsSection from '@/components/TutorsComponents/details/TutorDetailsSection';
import ReviewsSection from '@/components/TutorsComponents/details/ReviewsSection';

interface Props {
  params: { id: string };
}

const TutorDetailsPage = async ({ params }: Props) => {
  const tutor: ITutorProfile = await fetcher(`/tutors/${params.id}`);

  const reviews: IReview[] = await fetcher(`/reviews?tutorId=${params.id}`);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <TutorDetailsSection tutor={tutor} />
      <ReviewsSection reviews={reviews} tutorId={params.id} />
    </div>
  );
};

export default TutorDetailsPage;
